import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.css'],
})
export class CategoriesDetailComponent implements OnInit{
  categorie!: Categorie;


  constructor(private router: Router, private categorieService: CategorieService, private route: ActivatedRoute){ }

  private subscribCategorie(id: number): void {
    this.categorieService.getCategorieById(id).subscribe((categorie) => {
      this.categorie = categorie
     
    });
  }
  private setSubscribe(type: string | null, id: string | null): void {
    if (id && type === 'categorie') {
      this.subscribCategorie(+id);
    } else if (!id || !type) {
      this.router.navigate(['/not-found']);
    }
  }
  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');
    console.log(type)
    const id = this.route.snapshot.paramMap.get('id');
    this.setSubscribe(type, id)
  }

}
