import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Ici on importe notre modèl Theme
import { Theme } from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getThemes(): Observable<Theme[]> {
    return this.httpClient.get<Theme[]>(`${this.apiUrl}/themes/all`);
  }


}
