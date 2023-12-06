import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatI } from 'src/app/shared/models/chat-i';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RealTimeChatService } from 'src/app/shared/services/real-time-chat.service';

@Component({
  selector: 'app-real-time-chat',
  templateUrl: './real-time-chat.component.html',
  styleUrls: ['./real-time-chat.component.css']
})
export class RealTimeChatComponent {
  newMessage: string = '';
  listMessages!: Observable<ChatI[]>;
  @Input() eventId!: string;
  @ViewChild('chatBox') chatBox!: ElementRef;

  constructor(public chatService: RealTimeChatService, public auth : AuthService) {  }

  ngOnInit(): void {
    this.chatService.getChatMessages(this.eventId);
    this.listMessages = this.chatService.listChatMessagesSubject.asObservable();
    setTimeout(() => {
      this.scrollToBottom();
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      const message  = {
        uid: this.auth.user.uid ,
        name : this.auth.profil.prenom,
        message: this.newMessage,
        date: new Date().getTime()
      };

      this.chatService.sendChatMessage(message, this.eventId);
      setTimeout(() => {
        this.scrollToBottom();
      });

      this.newMessage = '';
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.sendMessage();
    }
  }

  scrollToBottom(): void {
    try {
      this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
