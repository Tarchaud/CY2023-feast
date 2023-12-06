import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { ContactI } from '../models/users-i';
import { Notify } from 'notiflix';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private store : Firestore) { }

  /**
   * Permet de sauvegarder un contact
   * @param contact
   */
  saveContact(contact : ContactI) {
    addDoc(collection(this.store,'contacts'), contact).then(
      () => {
        console.log('ok');
        Notify.success('Contact bien envoyé !');
      }
    ).catch(
      er => {
        console.log(er);
        Notify.failure(er);
      }
    );
  }
}
