import { Injectable } from '@angular/core';
import { Firestore, doc, deleteDoc} from '@angular/fire/firestore';
import { UsersI } from 'src/app/shared/models/users-i';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private store:Firestore) { }

}
