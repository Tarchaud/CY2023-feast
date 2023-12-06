import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  online: boolean;
  isNetworkStopped = false;

  constructor(private auth : AuthService) {
    this.online = window.navigator.onLine;

    fromEvent(window, 'online').subscribe(e => {
      this.online = true;
      console.log('online', this.online);

    });

    /**
     * Permet de se déconnecter si on perd la connexion
     */
    fromEvent(window, 'offline').subscribe(e => {
      this.online = false;
      console.log('online', this.online);
      if (this.auth.isLoggedIn) {
        this.auth.logOut();
      }
    });
  }
}
