import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UsersI } from '../models/users-i';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, deleteUser } from '@angular/fire/auth';
import { Firestore, collection, doc, getDoc, getDocs, setDoc } from '@angular/fire/firestore';

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

  /**
   * Permet de se connecter avec firebase
   */
  fireAuth(){
    signInWithEmailAndPassword(this.fire, this.authID.id, this.authID.mdp)
    .then(
      infos => {
        this.user = infos.user;
        this.isLoggedIn = true;
        console.log('user : ', this.user);
        // this.profil = { nom : '', prenom : '', email : this.authID.id, statut : 'user' };
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

  /**
   * Permet de créer un user et son authentification firebase
   */
  fireNewUser(){
    createUserWithEmailAndPassword(this.fire,this.authID.id, this.authID.mdp)
    .then(
      infos => {
        this.user = infos.user;
        this.isLoggedIn = true;
        this.profil = { nom : '', prenom : '', email : this.authID.id, statut : 'user' };
        const monDoc = doc(this.store, 'users', this.user.uid);
        setDoc(monDoc, this.profil, {merge:true})
        .then(
          () => console.log('ok')
        ).catch(
          er => console.log(er)
        );
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

  /**
   * Permet de récuperer le profil de l'utilisateur connecter
   */
  getProfil(){
    getDoc(doc(this.store,'users',this.user.uid)).then(
      (doc) => {
        if (doc.exists()) {
          this.profil = doc.data() as UsersI;
          console.log(this.profil);
        }else {
          this.deleteUser();
        }
      }
    ).catch(
      (er) => console.log(er)
    )
  }

  /**
   * Permet de supprimer un user et son authentification firebase de la personne connecter
   */
  deleteUser(){
    this.user.delete().then(
      () => {
        this.isLoggedIn = false;
        console.log('user supprimé');
        this.authID = { id : '', mdp : '' };
        this.router.navigateByUrl('/connexion');
      }
    ).catch(
      er => console.log(er)
    );
  }

  /**
   * Permet de se déconnecter
   */
  logOut(){
    signOut(this.fire).then(
      () => {
        this.isLoggedIn = false;
        this.authID = { id : '', mdp : '' };
        this.router.navigateByUrl('/connexion');
      }
    ).catch(
      er => console.log(er)
    );
  }

}
