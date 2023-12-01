import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  id : string = '';
  mdp : string = '';
  // TestAppTest
  //test@testapp.com

  constructor ( public auth : AuthService) {}


  login() {
    // this.auth.authentification();
    this.auth.fireAuth();
  }

}
