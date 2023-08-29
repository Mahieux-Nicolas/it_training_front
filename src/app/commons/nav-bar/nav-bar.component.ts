import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormationService } from 'src/app/services/formation.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {


  // recherche = new FormControl('');

  // onSubmit(){

  // }
  rechercheName = new FormControl('');
  searchTerm: string | null = '';
  formations: any[] = [];

  constructor(private formationService: FormationService) { }

  onSubmit() {
    const searchTerm = this.rechercheName.value; 
    console.log(searchTerm);
    this.formationService.searchFormationsByName(searchTerm)
      .subscribe(response => {
        console.log(response);
        this.formations = response;
      });
  }
}


