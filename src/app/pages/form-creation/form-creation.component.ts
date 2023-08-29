import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router'; // Importez Router depuis '@angular/router'

@Component({
  selector: 'app-form-creation',
  templateUrl: './form-creation.component.html',
  styleUrls: ['./form-creation.component.css']
})
export class FormCreationComponent {
  userForm: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    ville: ['', [Validators.required, Validators.minLength(2)]],
    cp: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(2)]]
  })

  submitted: boolean = false;
  
  constructor
  (private formBuilder:FormBuilder,

   private clientService: ClientService,
   private router: Router
    
    ) {}

    onSubmit() {
        this.submitted = true; 
        if (this.userForm.invalid) {
          return;
        } else {
              const nom = this.userForm.value.nom;
        const prenom = this.userForm.value.prenom;
        const ville = this.userForm.value.ville;
        const cp = this.userForm.value.cp;
        const email = this.userForm.value.email;
        const password = this.userForm.value.password;
        console.log("TOTO : " + nom + prenom + ville + cp + email + password);
        this.clientService.inscriptionClient(nom, prenom, ville, cp, email, password).subscribe(
          result => {
            if (result) {
              alert('Inscription réussie');
              this.submitted = true;
              this.router.navigate(['/user/connexion']);
            } else {
              alert("L'inscription a échoué (déjà existant)");
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
