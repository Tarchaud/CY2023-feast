import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, doc, setDoc, getDoc, deleteDoc, getDocs } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { UsersI } from '../models/users-i';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersList : Array<UsersI> = [];

  constructor(private store:Firestore, private auth:AuthService) { }


  /**
   * Permet de créer un user
   */
  creerProfil(){
    // const monDoc = doc(this.store, 'users', 'monId');
    addDoc(collection(this.store, 'users'), {

    })
  }

  /**
   * Permet de créer ou mettre à jour un user
   * @param profil
   */
  gereDoc(profil: NgForm){
    console.log("profil : ",profil);
    const monDoc = doc(this.store, 'users', this.auth.user.uid);
    setDoc(monDoc, profil, {merge:true})
    .then(
      () => console.log('ok')
    ).catch(
      er => console.log(er)
    );
  }

  /**
   * Permet de supprimer un user
   * @param id
   */
  supprimeDoc(id:string){
    deleteDoc(doc(this.store, 'users', id)).then(
      () => {
        console.log('supprimé');
        this.auth.deleteUser();
      }
    ).catch(
      er => console.log(er)
    );
  }

  /**
   * Permet de récuperer tout les users
   */
  getAllUsers(){
    this.usersList = [];
    getDocs(collection(this.store, 'users')).then(
      (docs) => {
        docs.forEach(
          (doc) => {
            console.log(doc.id, " => ", doc.data()); //TODO : clear
            this.usersList.push(doc.data() as UsersI);
          }
        );
      }
    ).catch(
      (er) => console.log(er)
    );
  }


}
