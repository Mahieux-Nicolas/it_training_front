import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation.model';
import { Theme } from 'src/app/models/theme.model';
import { FormationService } from 'src/app/services/formation.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  
  // constructor(private themeService: ThemeService){
  // }
  constructor(private formationService: FormationService){
    
  }
  // themes: Theme[] = []
  formations: Formation [] = []
  
ngOnInit(): void {
  // this.themeService.getThemes().subscribe((themes) => { this.themes = themes })
  this.formationService.getFormations().subscribe((formations) => { this.formations = formations })
  
  
}
searchTerm: string = '';
  searchFormations() {
    this.formationService.searchFormationsByName(this.searchTerm)
      .subscribe(response => {
        this.formations = response;
      });
  }
}
