import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  nom : string = '';
  prenom : string = '';
  id : string = '';
  email : string = '';
  statut : string = '';
  infos : string = '' ;
  mdp : string = '';

  singup() {
    console.log("teztstt");

  }
}
