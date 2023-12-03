import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

//Modules
import { SharedModule } from './shared/shared.module';

//Components
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
import { EvenementComponent } from './pages/evenement/evenement.component';

//Interceptors
import { TokenInterceptor } from './shared/securite/token.interceptor';
import { Auth401Interceptor } from './shared/securite/auth401.interceptor';

//Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

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
    EvenementComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() => initializeApp({"projectId":"cytech-cloud","appId":"1:799194493579:web:e34cfb7a438491bb115a8e","storageBucket":"cytech-cloud.appspot.com","apiKey":"AIzaSyBguW13bpJLs2UvZanWyHlBBXCTRzcjzSA","authDomain":"cytech-cloud.firebaseapp.com","messagingSenderId":"799194493579"})),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass : Auth401Interceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
