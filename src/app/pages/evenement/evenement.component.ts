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
  param !: number;

  constructor(public activeRoute : ActivatedRoute, public evenements : EvenementsService) {
   }

  ngOnInit(){
    this.param = Number(this.activeRoute.snapshot.paramMap.get('event')) || -1;
    console.log('params : ', this.param);
    this.event = this.evenements.getEvenement(this.param);
    console.log('params : ', this.evenements.listeEvenements);
  }

}
