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
   * Permet de créer ou mettre à jour un user
   * @param profil
   */
  gereDoc(profil: any){
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
            let user = doc.data() as UsersI;
            user.id = doc.id;
            this.usersList.push(user);
          }
        );
      }
    ).catch(
      (er) => console.log(er)
    );
  }

}
