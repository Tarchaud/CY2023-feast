import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  id : string = '';
  mdp : string = '';

  constructor ( private user : UsersService) {}


  login() {
    this.user.authID.id = this.id;
    this.user.authID.mdp = this.mdp
    this.user.authentification();
  }

}
