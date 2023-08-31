import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailFormationComponent } from './pages/detail-formation/detail-formation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { FormInscrtiptionFormationComponent } from './pages/form-inscrtiption-formation/form-inscrtiption-formation.component';
import { FormConnexionComponent } from './pages/form-connexion/form-connexion.component';
import { FormCreationComponent } from './pages/form-creation/form-creation.component';
import { FormResetPasswordComponent } from './pages/form-reset-password/form-reset-password.component';
import { HomeComponent } from './pages/home/home.component';

import { ProjetFormationComponent } from './pages/projet-formation/projet-formation.component';
import { ListeFormationsComponent } from './pages/liste-formations/liste-formations.component';

import { GuardienAuth } from './services/guardien_auth';
import { EvaluationSessionComponent } from './pages/evaluations/evaluation-session/evaluation-session.component';
import { EvaluationFormateurComponent } from './pages/evaluations/evaluation-formateur/evaluation-formateur.component';
import { CategoriesDetailComponent } from './pages/liste-formations/categories-detail/categories-detail.component';




const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: HomeComponent},
  { path: 'user/dashboard', component: DashboardComponent, canActivate: [GuardienAuth]  },

  { path: 'formation/inscription-formation', component: FormInscrtiptionFormationComponent },
  { path: 'user/connexion', component: FormConnexionComponent},
  { path: 'user/creation', component: FormCreationComponent},
  { path: 'user/password', component: FormResetPasswordComponent},

  { path: 'evaluation-session', component: EvaluationSessionComponent},

  { path: 'evaluation-formateur', component: EvaluationFormateurComponent},

 
  { path : 'contact', component: ProjetFormationComponent},
  { path : 'categorie', component: ListeFormationsComponent},
  { path: 'categories/:type', component: CategoriesDetailComponent},
  { path: 'categories/:type/:id', component: CategoriesDetailComponent},
  { path: 'formations/:type/:id', component: DetailFormationComponent }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
