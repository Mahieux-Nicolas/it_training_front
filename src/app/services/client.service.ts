import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionFormation } from '../models/sessionFormation.model';
import { Client } from '../models/client.model';
import { Form } from '@angular/forms';
import { Formation } from '../models/formation.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  inscriptionClient(nom: string, prenom : string, ville : string, cp : number, email: string, password: string): Observable<boolean> {
    const inscriptionClientDTO = { nom, prenom, ville, cp, email, password };
    return this.httpClient.post<boolean>(`${this.apiUrl}/clients/inscriptionclient`, inscriptionClientDTO);
  }

  inscriptionFormation(client: Client | null, sessionFormation: SessionFormation): Observable<boolean> {
    const inscriptionFormationDTO = { client, sessionFormation };
    return this.httpClient.post<boolean>(`${this.apiUrl}/clients/inscriptionformation`, inscriptionFormationDTO);
  }

  recupererClient(id : number | undefined) : Observable<Client> {
    return this.httpClient.get<Client>(`${this.apiUrl}/clients/`+id);
  }

  getFormations(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(`${this.apiUrl}/formations/all`);
  }

  
}
