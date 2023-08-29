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
    //On souscrit à un filmm et...
    this.categorieService.getCategorieById(id).subscribe((categorie) => {
      // ..on affete le résultat à notre variable 'detail'
      this.categorie = categorie
     
    });
  }
  private setSubscribe(type: string | null, id: string | null): void {
    // Si l'objet contient album, on souscrit à un album
    if (id && type === 'categorie') {
      // En appellant la méthode qu'on a créé plus tôt
      // Le fait d'ajouter '+' devant ID nous permet de le caster en number
      // En effet, par défaut c'est un string
      this.subscribCategorie(+id);
    } else if (!id || !type) {
      // Et on ajoute une redirection vers 404 si un param est manquant
      this.router.navigate(['/not-found']);
    }
  }
  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');
    console.log(type)
    // On stock la partie 'ID' de l'URI
    const id = this.route.snapshot.paramMap.get('id');
    // Et on appel notre méthode en lui passant les infos
    this.setSubscribe(type, id)
  }

}
