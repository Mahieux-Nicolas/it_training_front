import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Formation } from '../models/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private apiUrl = 'http://localhost:8080';

  // Injection de la dépendence HttpClient
  constructor(private httpClient: HttpClient) { }

  // Création des différentes routes vers mon API
  getFormations(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(`${this.apiUrl}/formations/all`);
  }
  getFormation(id: number): Observable<Formation>{
    return this.httpClient.get<Formation>(`${this.apiUrl}/formations/${id}`)
  }
  searchFormationsByName(searchTerm: string | null): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/formations/search/${searchTerm}`);
  }
}
