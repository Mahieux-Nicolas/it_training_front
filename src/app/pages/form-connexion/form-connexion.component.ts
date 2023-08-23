import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.css']
})
export class FormConnexionComponent {

  userForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(2)]]
  })

  submitted: boolean = false;
  
  constructor(private formBuilder:FormBuilder) {}

  onSubmit(): boolean {
    this.submitted = true;
    //Appel du validateur 'invalid' pour lancer la vérification
    if(this.userForm.invalid) {
      return false;
    } else {
        return true;
    }
  }


  //Getter
  get form() {
    return this.userForm.controls;
  }

}


