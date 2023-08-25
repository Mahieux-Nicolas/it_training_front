import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  inscriptionClient(email: string, password: string): Observable<boolean> {
    const inscriptionClientDTO = { email, password };
    return this.httpClient.post<boolean>(`${this.apiUrl}/inscriptionclient`, inscriptionClientDTO);
  }
}
