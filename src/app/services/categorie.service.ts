import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Categorie } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>(`${this.apiUrl}/categories/all`);
  }
}
