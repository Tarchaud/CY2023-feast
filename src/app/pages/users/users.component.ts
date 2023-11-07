import { Component } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  listeUsers : Array<UsersI> = [
    {nom : 'Dupont', prenom : 'Jean', email : 'jeanDupont@gmail.com', statut : 'user' },
    {nom : 'Dupond', prenom : 'Paul', email : 'paulDupont@gmail.com', statut : 'user' },
    {nom : 'Dupond', prenom : 'Jacques', email : 'jacquesDupont@gmail.com', statut : 'admin' },
  ];
}
