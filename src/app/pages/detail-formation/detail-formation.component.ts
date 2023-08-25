import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { FormationService } from 'src/app/services/formation.service';
import { Formation } from 'src/app/models/formation.model';
import { SessionFormation } from 'src/app/models/sessionFormation.model';
import { SessionFormationService } from 'src/app/services/sessionFormation.service';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.css']
})
export class DetailFormationComponent {
  userForm: FormGroup = this.formBuilder.group({
    lieuFormation: ['', [Validators.required, Validators.email]],
    sessionSouhaitee: ['', [Validators.required, Validators.minLength(2)]]
  })

  constructor
  (private formBuilder:FormBuilder,

    private sessionFormationService: SessionFormationService
    ) {}

    submitted: boolean = false;
    sessionFormations: SessionFormation [] = []
    selectedSessionPrix: number = 0; // Initialisez la propriété

    ngOnInit(): void {
      this.sessionFormationService.getSessionFormations().subscribe((sessionFormations) => { this.sessionFormations = sessionFormations })     
    }
  onSessionSelectionChange(){
    // const selectedSessionId = this.userForm.get('sessionSouhaitee').value;
    // const selectedSession = this.sessionFormations.find(session => session.id === selectedSessionId);
    // if (selectedSession) {
    //   // Ici, vous pouvez mettre à jour selectedSessionPrix en fonction de la session sélectionnée
    //   // et de la logique de calcul que vous avez.
    //   // Par exemple, si selectedSession a une propriété prix, vous pouvez faire :
    //   this.selectedSessionPrix = selectedSession.prix;
    // } else {
    //   this.selectedSessionPrix = null;
    // }
  }
  onSubmit() {
    // if (this.userForm.invalid) {
    //   this.submitted = false;
    //   return this.submitted;
    // } else {
    //   const lieuFormation = this.userForm.value.lieuFormation;
    //   const sessionFormation = this.userForm.value.sessionSouhaitee;

    //   this.clientService.inscriptionFormation(lieuFormation,sessionFormation).subscribe(
    //     result => {
    //       if (result) {
    //         console.log('Inscription réussie');
    //         this.submitted = true;
    //       } else {
    //         console.log("L'inscription a échoué (déjà existant)");
    //       }
    //     },
    //     error => {
    //       console.error("Erreur d'inscription:", error);
    //     }
    //   );
    //  return this.submitted;
    // }
  }
}
