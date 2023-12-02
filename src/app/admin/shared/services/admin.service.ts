import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc, getDoc, deleteDoc, getDocs } from '@angular/fire/firestore';
import { UsersI } from 'src/app/shared/models/users-i';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  usersList : Array<UsersI> = [];

  constructor(private store:Firestore) { }

  getProfilById(id:string): Promise<any>{
    return getDoc(doc(this.store, 'users', id));
  }

  editProfilById(id:string, profil:any){
    console.log("profil : ",profil);
    const monDoc = doc(this.store, 'users', id);
    setDoc(monDoc, profil, {merge:true})
    .then(
      () => console.log('ok')
    ).catch(
      er => console.log(er)
    );
  }

  supprimeUser(id:string){
    deleteDoc(doc(this.store, 'users', id)).then(
      () => {
        console.log('supprimé');
      }
    ).catch(
      er => console.log(er)
    );
  }

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
