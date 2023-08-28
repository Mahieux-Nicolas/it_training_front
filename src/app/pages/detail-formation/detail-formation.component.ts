import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { FormationService } from 'src/app/services/formation.service';
import { Formation } from 'src/app/models/formation.model';
import { SessionFormation } from 'src/app/models/sessionFormation.model';
import { SessionFormationService } from 'src/app/services/sessionFormation.service';
import { AuthService } from 'src/app/services/auth.service';
import { Client } from 'src/app/models/client.model';
import { Router } from '@angular/router'; // Importez Router depuis '@angular/router'

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.css']
})
export class DetailFormationComponent {
  userForm: FormGroup = this.formBuilder.group({
    lieuFormation: ['', [Validators.required, Validators.minLength(2)]],
    sessionSouhaitee: ['', [Validators.required, Validators.minLength(2)]]
  })

  constructor
  (private formBuilder:FormBuilder,
    private authService: AuthService,
    private sessionFormationService: SessionFormationService,
    private clientService: ClientService,
    private router: Router 
  ) {}

    submitted: boolean = false;
    sessionFormations: SessionFormation [] = []
    selectedSessionPrix: number = 0; // Initialisez la propriété
    client : Client | null = null;
    sessionFormation : SessionFormation | null = null;

    ngOnInit(): void {
      console.log("teestavantl'heure");
      this.sessionFormationService.getSessionFormations().subscribe((sessionFormations) => { this.sessionFormations = sessionFormations })     
      console.log(this.authService.estAuthentifier());
      if(this.authService.estAuthentifier() == true)
      {
          console.log("je suis test");
          this.client = this.authService.envoieClientAuthentifier();
          console.log(this.client);
      }
    }

  onSubmit() {
    if (this.userForm.invalid) {
      this.submitted = false;
      for (const controlName in this.userForm.controls) {
        if (this.userForm.controls[controlName].invalid) {
          console.log(`Le champ ${controlName} est invalide.`);
        }}
      return this.submitted;
    } else {
      const lieuFormationForm = this.userForm.value.lieuFormation;
      const sessionSouhaiteeForm = this.userForm.value.sessionSouhaitee;
      const sessionFormation = new SessionFormation(
        sessionSouhaiteeForm,
        lieuFormationForm
        
      );
      if(this.authService.verifyToken()){
        const clientString = localStorage.getItem('authenticatedClient');
        if (clientString !== null) {
          const client = JSON.parse(clientString);
          console.log("CLIENT : ", client);
          this.clientService.inscriptionFormation(client,sessionFormation).subscribe(
            result => {
              if (result) {
                alert('Inscription réussie');
                this.submitted = true;
              } else {
                alert("L'inscription a échoué (déjà existant)");
              }
            },
            error => {
              console.error("Erreur d'inscription:", error);
            }
          );
        } else {
          console.log("Aucune information client trouvée");
          return "false";
        }
      }else{
        alert("Vous n'êtes pas identifier")
        this.router.navigate(['/user/connexion']);
      }
     
     return this.submitted;
    }
  }
}
