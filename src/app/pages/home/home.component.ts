import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie.model';
import { Formation } from 'src/app/models/formation.model';
import { CategorieService } from 'src/app/services/categorie.service';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private formationService: FormationService, private categorieService: CategorieService){
    
  }

  formations: Formation [] = [];
  categories: Categorie [] = [];
  
ngOnInit(): void {
  // this.themeService.getThemes().subscribe((themes) => { this.themes = themes })
  this.formationService.getFormations().subscribe((formations) => { this.formations = formations });
  this.categorieService.getCategories().subscribe((categories) => {this.categories = categories});
  
}
searchTerm: string = '';
  searchFormations() {
    this.formationService.searchFormationsByName(this.searchTerm)
      .subscribe(response => {
        this.formations = response;
      });
  }
}
