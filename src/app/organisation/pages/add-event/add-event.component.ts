import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EvenementsService } from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {

  constructor(public eventService : EvenementsService, private route : Router) { }

  add(form :NgForm){

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

    this.eventService.addEvent(event);
    this.route.navigate(['organisation','events']);
    form.resetForm();

  }
}
