import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './commons/footer/footer.component';
import { NavBarComponent } from './commons/nav-bar/nav-bar.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';

import { DetailFormationComponent } from './pages/detail-formation/detail-formation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ProjetFormationComponent } from './pages/projet-formation/projet-formation.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,

    NotFoundComponent,
    DetailFormationComponent,
    DashboardComponent,
    ProjetFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
