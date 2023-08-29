import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionFormation } from '../models/sessionFormation.model';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class SessionFormationService {
  private apiUrl = 'http://localhost:8080';

  // Injection de la dépendence HttpClient
  constructor(private httpClient: HttpClient) { 

  }

  // Création des différentes routes vers mon API

  getSessionFormations(): Observable<SessionFormation[]> {
    return this.httpClient.get<SessionFormation[]>(`${this.apiUrl}/sessionformations/all`);
  }

  InscriptionFormation(): Observable<Client> {
    return this.httpClient.post<Client>(`${this.apiUrl}/clients/inscriptionformation`, Client);
  }
}