import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersI } from '../models/users-i';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authID : { id: string, mdp: string } = { id : '', mdp : '' };
  profil !: UsersI;
  isLoggedIn : boolean = false;

  constructor( private http : HttpClient, private router : Router) { }


  authentification(){
    this.http.get<UsersI>('assets/data/ids/'+this.authID.id+'@'+this.authID.mdp+'.json').subscribe({
      next : (p) => {
        this.profil = p;
        this.isLoggedIn = true;
        this.router.navigateByUrl('/');
      },
      error : (er) => {
        console.log('Erreur de authentification'),
        this.router.navigateByUrl('/toto');
      },
      complete : () => console.log('requête faite'),

    })
  }
}
