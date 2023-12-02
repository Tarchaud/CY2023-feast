import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {


  constructor(public auth:AuthService, public user:UsersService, private route : Router) { }

  completeProfil(value :NgForm) {
    let user = {
      nom: value.value.nom,
      prenom: value.value.prenom,
      email: value.value.email,
      statut: value.value.statut,
      media: {
        src: value.value.src,
      },
    }
    this.user.gereDoc(user);
    this.route.navigate(['/profil']);
  }
}
