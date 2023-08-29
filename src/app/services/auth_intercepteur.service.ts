import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupérer le token d'authentification depuis le stockage (cookie ou local storage)
    const token = 'token';

    // Cloner la requête et ajouter l'en-tête Authorization avec le token
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Poursuivre avec la requête modifiée
    return next.handle(request);
  }
}