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
import { RGPDComponent } from './pages/rgpd/rgpd.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { EventsPipe } from './shared/pipes/events.pipe';
import { SharedModule } from './shared/shared.module';
import { EvenementComponent } from './pages/evenement/evenement.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AccueilComponent,
    UsersComponent,
    ProfilComponent,
    EvenementsComponent,
    InscriptionComponent,
    ConnexionComponent,
    RGPDComponent,
    ContactComponent,
    ErreurComponent,
    EventsPipe,
    EvenementComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
