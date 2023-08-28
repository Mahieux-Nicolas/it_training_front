import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import jwt_decode  from 'jwt-decode';
import * as jwt from 'jsonwebtoken';

interface ConnexionResponse {
  isAuthenticated?: boolean;
  client?: Client; // Si l'objet client est facultatif
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private isAuthenticated: boolean = false;
  private authenticatedClient: Client | null = null;
  private apiUrl = 'http://localhost:8080';

  // Injection de la dépendence HttpClient
  constructor(private httpClient: HttpClient) { 
  }

  connexion(email: String, password: String): Observable<ConnexionResponse> {
    const loginData = { email, password }; // Créer un objet avec les paramètres
    console.log(email, password);
      return this.httpClient.post<ConnexionResponse>(`${this.apiUrl}/clients/connexionclient`, loginData);
  }



  // Simulate a logout action
  deconnexion() {
    this.isAuthenticated = false;
  }


  verifyToken(): boolean {
    // Récupérez le token depuis le localStorage
    const token = localStorage.getItem('authToken'); // Utilisez le nom correct du token que vous avez stocké

    if (token === "connecter") {
      try {
        const clientString = localStorage.getItem('authenticatedClient');
        if (clientString !== null) {
          const client = JSON.parse(clientString);
          console.log("CLIENT : ", client);
          console.log("Token valide, informations du client:", client);
          return true; // Le token est valide
        } else {
          console.log("Aucune information client trouvée");
          return false;
        }
      } catch (error) {
        console.error("Erreur lors du décodage du token:", error);
        return false; // Le token est invalide
      }
    } else {
      console.log("Aucun token trouvé");
      return false; // Aucun token trouvé
    }
   }


   Authentification(clientInfo: any): void {
    this.isAuthenticated = true;

    const token = "connecter";
    // Stockez le token dans le localStorage
    localStorage.setItem('authToken', token);
    localStorage.setItem('authenticatedClient', JSON.stringify(clientInfo));

  }

  estAuthentifier() : boolean{
    return this.isAuthenticated;
  }

  setAuthenticatedClient(client: Client): void {
    this.authenticatedClient = client;
  }

  envoieClientAuthentifier() : Client | null{
    return this.authenticatedClient;
  }

   
  testenvoieclient() : string{
    const clientString = localStorage.getItem('authenticatedClient');
         if (clientString !== null) {
    const client = JSON.parse(clientString);
    console.log("CLIENT : ", client);
    return client
  } else {
    console.log("Aucune information client trouvée");
    return "false";
  }
  }
}
