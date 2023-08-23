import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {


  recherche = new FormControl('');

  onSubmit(){

  }
  
}

