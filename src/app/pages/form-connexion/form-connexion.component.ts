import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'; // Importez Router depuis '@angular/router'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.css']
})
export class FormConnexionComponent {

  submitted: boolean = false;
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(2)]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router 
  ) {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');
  
    if (emailControl && passwordControl) 
    {
      const email = emailControl.value;
      const password = passwordControl.value;
      this.authService.connexion(email, password).subscribe(
        (result) => {
          if (result.client) {
            console.log("YES");
            this.authService.Authentification(result.client);
            this.authService.setAuthenticatedClient(result.client);
            this.router.navigate(['/user/dashboard']);
          } else {
            console.log("Échec de la connexion");
          }
        },
        error => {
          console.error("Erreur de connexion:", error);
        }
      );
    }
  }

  // Getter pour accéder facilement aux contrôles de formulaire dans le template
  get form() {
    return this.loginForm.controls;
  }
}