import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EvenementsService } from 'src/app/shared/services/evenements.service';
import { ParticipantsService } from 'src/app/shared/services/participants.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent  implements OnInit{
  event !: EvenementI;
  param !: string;
  loader : boolean = true;
  countInscrits !: number;
  isInscrit : boolean = false;
  participantsList : Array<any> = [];

  constructor(public activeRoute : ActivatedRoute, public evenements : EvenementsService, public auth : AuthService, public participants : ParticipantsService) {
    this.param = this.activeRoute.snapshot.paramMap.get('event') || '';
    console.log('params : ', this.param);
    this.evenements.getEvenement(this.param).then(
      (ev) => {
        this.event = ev;
        this.loader = false;
        console.log('event : ', this.event);
        this.getCountIncrits();
        this.getInscrits();
        if(this.auth.isLoggedIn){
          this.participants.getParticipation(this.param, this.auth.user.uid).then(
            (participation) => {
              if(participation){
                this.isInscrit = true;
                console.log('participation : ', participation);
              }
            }
          ).catch(
            (er) => console.log(er)
          );
        }
      }
    ).catch(
      (er) => console.log(er)
    );


  }

  ngOnInit(){
  }

  inscription(){
    const participant = { idUser : this.auth.user.uid ,nom : this.auth.profil.nom, prenom : this.auth.profil.prenom, event : this.param};
    try {
      console.log('avant incristpion');

      this.participants.inscription(participant);
      console.log('après incristpion');
      this.getInscrits();
      this.getCountIncrits();
      this.isInscrit = true;

    } catch (error) {

    }
  }

  desincrire(){
    this.participants.deleteParticipation(this.param, this.auth.user.uid).then(
      () => {
        this.isInscrit = false;
        this.getCountIncrits();
        this.getInscrits();
      }
    ).catch(
      (er) => console.log(er)
    );
  }

  getInscrits(){
    this.participants.getParticipants(this.param).then(
      (participants) => {
        this.participantsList = participants;
        console.log('participants : ', this.participantsList);
      }
    ).catch(
      (er) => console.log(er)
    );
  }

  getCountIncrits(){
    this.participants.getCountInscrits(this.param).then(
      (count) => {
        console.log('count : ', count);
        this.countInscrits = count;
      }
    ).catch(
      (er) => console.log(er)
    );
  }
}
