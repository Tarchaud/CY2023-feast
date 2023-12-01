import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementsService } from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-orga-events',
  templateUrl: './orga-events.component.html',
  styleUrls: ['./orga-events.component.css']
})
export class OrgaEventsComponent implements OnInit {
  filtre : string = '';

  constructor(public eventsSevice: EvenementsService, private router : Router) { }

  ngOnInit(): void {
    this.eventsSevice.getEvenements();
  }


  ajouter(){
    this.router.navigate(['organisation','events','new']);
  }

  deleteEvent(id : string){
    this.eventsSevice.deleteEvent(id);
    this.eventsSevice.getEvenements();
  }

  editEvent(id : string){
    this.router.navigate(['organisation','events','edit',id]);
  }

}
