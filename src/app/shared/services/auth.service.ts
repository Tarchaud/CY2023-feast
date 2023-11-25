import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FireUserI, UsersI } from '../models/users-i';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { Firestore, collection, doc, getDoc, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authID : { id: string, mdp: string } = { id : '', mdp : '' };
  profil !: UsersI;
  isLoggedIn : boolean = false;

  //integration de firebase
  fire = inject(Auth);
  user !: User;

  constructor( private http : HttpClient, private router : Router, private store : Firestore) { }


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

  fireAuth(){
    signInWithEmailAndPassword(this.fire, this.authID.id, this.authID.mdp)
    .then(
      infos => {
        this.user = infos.user;
        this.isLoggedIn = true;
        console.log('user : ', this.user);
        this.getProfil();
        this.router.navigateByUrl('/');
      }
    ).catch(
      er => {
        console.log(er);
        this.isLoggedIn = false;
      }
    );
  }

  fireNewUser(){
    createUserWithEmailAndPassword(this.fire,this.authID.id, this.authID.mdp)
    .then(
      infos => {
        this.user = infos.user;
        this.isLoggedIn = true;
        //Go form compléter profile
        this.router.navigateByUrl('/inscription');
      }
    ).catch(
      er => {
        console.log(er);
        this.isLoggedIn = false;
      }
    );
  }

  getProfil(){
    getDoc(doc(this.store,'users',this.user.uid)).then(
      (doc) => {
        if (doc.exists()) {
          this.profil = doc.data() as UsersI;
          console.log(this.profil);
        }
      }
    ).catch(
      (er) => console.log(er)

    )
  }

}
