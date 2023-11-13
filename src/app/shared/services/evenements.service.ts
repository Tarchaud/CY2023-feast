import { Injectable } from '@angular/core';
import { EvenementI } from '../models/evenement-i';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  listeEvenements : Array<EvenementI> = [];

  constructor( private http : HttpClient) {  }

  getEvenements(){
    this.http.get<Array<EvenementI>>('assets/data/evenements.json').subscribe({
      next: (ev) => {
        console.log('Donne reçues du JSON', ev);
        this.listeEvenements = ev;

      },
      error : (er) => console.log(er),
      complete : () => console.log("les evenements ont été chargé")
    })
  }

  /**
   *
   * @param ev
   */
  setEvenement(ev:EvenementI){
    this.http.post('asset/data/evenements.json',ev);
  }

  /**
   *
   * @param id
   * @returns
   */
  getEvenement(id:number):EvenementI{
    return this.listeEvenements.filter(d => d.date == id)[0];
  }

}
