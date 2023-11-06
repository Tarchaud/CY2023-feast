import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { MenuComponent } from './template/menu/menu.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    AccueilComponent,
    UsersComponent,
    ProfilComponent,
    EvenementsComponent,
    InscriptionComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
