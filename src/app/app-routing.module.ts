import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailFormationComponent } from './pages/detail-formation/detail-formation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjetFormationComponent } from './pages/projet-formation/projet-formation.component';
import { ListeFormationsComponent } from './pages/liste-formations/liste-formations.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'formation/test', component: DetailFormationComponent },
  { path: 'user/dashboard', component: DashboardComponent },
  {path : 'contact', component: ProjetFormationComponent},
  {path : "formations", component: ListeFormationsComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
