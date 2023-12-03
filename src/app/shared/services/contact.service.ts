import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { ContactI } from '../models/users-i';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private store : Firestore) { }

  saveContact(contact : ContactI) {
    addDoc(collection(this.store,'contacts'), contact).then(
      () => console.log('ok')
    ).catch(
      er => console.log(er)
    );
  }
}
