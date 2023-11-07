import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  authID : { id: string, mdp: string } = { id : '', mdp : '' };

  constructor( private http : HttpClient) { }


  authentification(){
    this.http.get('assets/data/ids/'+ this.authID.id +'@'+this.authID.mdp+'.json').subscribe({
      next : (data) => {
        console.log(data);

      },
      error : (er) => console.log('Erreur de authentification'),
    })
    //doit appeler le fichier heidi@heidi64.json sachant que heidi et l'id saisi et heidi64 le mot de passe
    // ça donnera une concatenation sur la requête http comme celle-ci : `${this.authID.id}@{this.authID.mdp}.json`
  }

}
