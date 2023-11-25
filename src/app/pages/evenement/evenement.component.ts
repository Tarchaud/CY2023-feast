import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { EvenementsService } from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent  implements OnInit{
  event !: EvenementI;
  param !: string;
  loader : boolean = true;

  constructor(public activeRoute : ActivatedRoute, public evenements : EvenementsService) {
    this.param = this.activeRoute.snapshot.paramMap.get('event') || '';
    console.log('params : ', this.param);
    this.evenements.getEvenement(this.param).then(
      (ev) => {
        this.event = ev;
        this.loader = false;
        console.log('event : ', this.event);
      }
    ).catch(
      (er) => console.log(er)
    );
    console.log('event : ', this.evenements.listeEvenements);

  }

  ngOnInit(){
  }

}
