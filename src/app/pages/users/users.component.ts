import { Component, OnInit } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  listeUsers : Array<UsersI> = [
    {nom : 'Dupont', prenom : 'Jean', email : 'jeanDupont@gmail.com', statut : 'user' },
    {nom : 'Dupond', prenom : 'Paul', email : 'paulDupont@gmail.com', statut : 'user' },
    {nom : 'Dupond', prenom : 'Jacques', email : 'jacquesDupont@gmail.com', statut : 'admin' },
  ];

  constructor(public users:UsersService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.users.getAllUsers();
  }

}
