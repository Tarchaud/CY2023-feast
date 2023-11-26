import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EvenementsService } from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnDestroy, OnInit {
  filtre : string = '';
  listener : Subscription;
  depart: number = 0;
  pas: number = 5;

  constructor(public events : EvenementsService) {
    // this.events.getEvenements();
    // console.log('LIST' , this.events.listeEvenements);

    this.listener = this.events.listeEvent$.subscribe({
      next : (ev) => {console.log("From Observable",ev);},
      error : (er) => console.log(er),
      complete : () => console.log("Observable terminé")
    });
    console.log('LIST' , this.listener); //TODO : clear
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.events.getEvenements();
    console.log('LIST' , this.events.listeEvenements); //TODO : clear

  }

  ngOnDestroy(): void {
    this.listener.unsubscribe();
  }

  avant(){
    this.depart += 4;
  }

  arriere(){
    this.depart -= 4;
  }

}
