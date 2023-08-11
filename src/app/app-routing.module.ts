import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailFormationComponent } from './pages/detail-formation/detail-formation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'formation/test', component: DetailFormationComponent },
  { path: 'user/dashboard', component: DashboardComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
