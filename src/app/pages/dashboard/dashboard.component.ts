import { Component } from '@angular/core';
import { SessionFormationService } from 'src/app/services/sessionFormation.service';
import { AuthService } from 'src/app/services/auth.service';
import { SessionFormation } from 'src/app/models/sessionFormation.model';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor
  (
    private sessionFormationService: SessionFormationService,
    private authService : AuthService,
    private clientService: ClientService,
  ) {}

  client : Client | null = null;
  clientele : Client | null = null;
  sessionFormations: SessionFormation [] = []
  sessionFormation : SessionFormation | null = null;

  Deconnexion() : void {
    this.authService.deconnexion();
    
  }
  ngOnInit(): void {
    
    this.sessionFormationService.getSessionFormations().subscribe((sessionFormations) => { this.sessionFormations = sessionFormations })     

    console.log("Test avant l'appel à la vérification du token");
    console.log("Token valide ?", this.authService.verifyToken());
  
    if (this.authService.verifyToken()) {
      console.log("Token valide. Récupération des informations du client...");
      this.client = this.authService.envoieClient();
      console.log("Informations du client:", this.client);
      
      // this.clientService.recupererClient(this.client?.id).subscribe(
      //   (clientData: Client) => {
      //     this.clientele = clientData;
      //     console.log("Récupération client :", this.clientele.sessionFormations);
      //   },
      //   error => {
      //     console.error("Erreur lors de la récupération des informations du client:", error);
      //   }
      // );
    } else {
      console.log("Token invalide ou non trouvé. Pas de récupération des informations du client.");
    }

  }


}
