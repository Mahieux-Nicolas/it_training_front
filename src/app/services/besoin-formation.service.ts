import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BesoinFormationService {

  private apiUrl = 'https://votre-api.com'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) { }

  // Méthode pour envoyer les données de formation
  envoyerDemandeFormation(donneesFormation: any): Observable<any> {
    const url = `${this.apiUrl}/envoyer-formation`; // Remplacez par l'endpoint d'envoi dans votre API
    return this.http.post(url, donneesFormation);
  }
}
