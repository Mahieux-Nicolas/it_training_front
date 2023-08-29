import { Component } from '@angular/core';
import { Categorie } from 'src/app/models/categorie.model';
import { Formation } from 'src/app/models/formation.model';
import { CategorieService } from 'src/app/services/categorie.service';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.css']
})
export class ListeFormationsComponent {
  constructor(private formationService: FormationService, private categorieService: CategorieService){
    
  }
  formations: Formation [] = [];
  categories: Categorie [] = [];

  ordreAlphabet() : void{
    this.categories.sort((categorie1,categorie2) =>categorie1.intitulerCategorie.localeCompare(categorie2.intitulerCategorie));
  }
  ngOnInit(): void {
    this.formationService.getFormations().subscribe((formations) => { this.formations = formations });
    // méthode afin que les catégorie soit trié de manière alphabétique
    this.categorieService.getCategories().subscribe((categories) => { this.categories = categories.sort((categorie1, categorie2) => categorie1.intitulerCategorie.localeCompare
      (categorie2.intitulerCategorie));
     });
    
  }
  
}
