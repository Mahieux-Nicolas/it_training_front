import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './commons/footer/footer.component';
import { NavBarComponent } from './commons/nav-bar/nav-bar.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { DetailFormationComponent } from './pages/detail-formation/detail-formation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormConnexionComponent } from './pages/form-connexion/form-connexion.component';
import { FormCreationComponent } from './pages/form-creation/form-creation.component';
import { FormResetPasswordComponent } from './pages/form-reset-password/form-reset-password.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogueFormationsComponent } from './pages/catalogue-formations/catalogue-formations.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjetFormationComponent } from './pages/projet-formation/projet-formation.component';
import { ListeFormationsComponent } from './pages/liste-formations/liste-formations.component';


import { AuthInterceptor } from './services/auth_intercepteur.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { EvaluationSessionComponent } from './pages/evaluations/evaluation-session/evaluation-session.component';
import { EvaluationFormateurComponent } from './pages/evaluations/evaluation-formateur/evaluation-formateur.component';
import { CategoriesDetailComponent } from './pages/liste-formations/categories-detail/categories-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    NotFoundComponent,
    DetailFormationComponent,
    DashboardComponent,
    FormConnexionComponent,
    FormCreationComponent,
    FormResetPasswordComponent,
    HomeComponent,
    ProjetFormationComponent,
    ListeFormationsComponent,
    CatalogueFormationsComponent,
    EvaluationSessionComponent,
    EvaluationFormateurComponent,
    CategoriesDetailComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule, 
    HttpClientModule
  ],


  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})

export class AppModule { }
