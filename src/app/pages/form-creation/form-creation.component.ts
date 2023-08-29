import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-form-creation',
  templateUrl: './form-creation.component.html',
  styleUrls: ['./form-creation.component.css']
})
export class FormCreationComponent {
  userForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(2)]]
  })

  submitted: boolean = false;
  
  constructor
  (private formBuilder:FormBuilder,
   private clientService: ClientService
    
    ) {}

    onSubmit() {

      if (this.userForm.invalid) {
        this.submitted = false;
        return this.submitted;
      } else {
        const email = this.userForm.value.email;
        const password = this.userForm.value.password;
  
        this.clientService.inscriptionClient(email, password).subscribe(
          result => {
            if (result) {
              console.log('Inscription réussie');
              this.submitted = true;
            } else {
              console.log("L'inscription a échoué (déjà existant)");
            }
          },
          error => {
            console.error("Erreur d'inscription:", error);
          }
        );
       return this.submitted;
      }
    }


  //Getter
  get form() {
    return this.userForm.controls;
  }


}
