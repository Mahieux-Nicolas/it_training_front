import { BesoinFormationService } from './../../services/besoin-formation.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';




@Component({
  selector: 'app-projet-formation',
  templateUrl: './projet-formation.component.html',
  styleUrls: ['./projet-formation.component.css']
})
export class ProjetFormationComponent {

  formationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private formationService: BesoinFormationService) {
    this.formationForm = this.formBuilder.group({
      intituleFormation: ['', Validators.required],
      besoinRequis: ['', Validators.required],
      // Ajoutez les autres champs ici
      // ...
    });
  }


  envoyerDemande() {
    if (this.formationForm.valid) {
      const donneesFormation = this.formationForm.value;
      this.formationService.envoyerDemandeFormation(donneesFormation).subscribe(
        response => {
          console.log('Données envoyées avec succès !', response);
          // Réinitialisez le formulaire après l'envoi réussi
          this.formationForm.reset();
        },
        error => {
          console.error('Erreur lors de l\'envoi des données :', error);
        }
      );
    } else {
      console.warn('Veuillez remplir correctement tous les champs.');
    }
  }
}
