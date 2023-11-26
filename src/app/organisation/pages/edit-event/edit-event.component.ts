import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { EvenementsService } from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit{
  event !: EvenementI;
  eventId !: string;
  loader : boolean = true;


  constructor(private activeRoute : ActivatedRoute, public eventService : EvenementsService, private  router : Router) {
    this.eventId = this.activeRoute.snapshot.paramMap.get('idEvent') || '';
    console.log('params : ', this.eventId);
    this.eventService.getEvenement(this.eventId).then(
      (ev) => {
        this.loader = false;
        this.event = ev;
        console.log('event : ', this.event);
      }
    ).catch(
      (er) => console.log(er)
    );
  }

  ngOnInit(): void {
  }


  edit(form :NgForm){
    console.log("form value : ", form);
    const event = {
      titre: form.value.titre,
      date: form.value.date,
      horaires: {
        debut: form.value.debut,
        fin: form.value.fin
      },
      places: form.value.places,
      infos: form.value.infos,
      media: {
        src: form.value.media_url
      }
    };
    this.eventService.updateEvent(this.eventId, event);
    this.router.navigate(['organisation','events']);

  }

}
