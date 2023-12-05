import { Injectable, inject } from '@angular/core';
import { Database, get, getDatabase, onValue, push, ref, set } from '@angular/fire/database';
import { ChatI } from '../models/chat-i';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { getAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { v4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class RealTimeChatService {
  // private db !: Database;
  listChatMessagesSubject: BehaviorSubject<ChatI[]> = new BehaviorSubject<ChatI[]>([]);
  listChatMessages$: Observable<ChatI[]> = this.listChatMessagesSubject.asObservable();


  constructor(private auth : AuthService) {
    // this.db = getDatabase();
  }

  sendChatMessage(message: any, eventId: string): void {
    const db = getDatabase();
    const randomId = v4()
    console.log('randomId', randomId);
    set(ref(db, 'chat/'+ eventId + "/" + randomId), message);
  }

  getChatMessages(eventId: string): void {
    const db = getDatabase();
    const chatRef = ref(db, 'chat/' + eventId );

    onValue(chatRef, (snapshot)=> {
      const data = snapshot.val();
      if (data) {
        const messagesArray: ChatI[] = Object.values(data);
        messagesArray.sort((a, b) => a.date - b.date);
        this.listChatMessagesSubject.next(messagesArray);
        console.log('get', messagesArray);
      } else {
        this.listChatMessagesSubject.next([]);
      }
    });

  }
}
