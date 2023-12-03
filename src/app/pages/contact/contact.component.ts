import { Component } from '@angular/core';
import { ContactI } from 'src/app/shared/models/users-i';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact !: ContactI ;

  constructor(private contactService : ContactService) {
    this.initContact();
  }


  saveContact() {
    this.contactService.saveContact(this.contact);
    this.initContact();
  }

  initContact() {
    this.contact = {
      nom : '',
      prenom : '',
      age : 0,
      adresse : {
        rue : '',
        codePostal : 0,
        ville : ''
      },
      tel : '',
      mobile : '',
      email : '',
      infos : ''
    };
  }

}
