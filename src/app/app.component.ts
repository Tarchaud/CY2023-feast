import { Component } from '@angular/core';
import { NetworkService } from './shared/services/network.service';
import { Observable, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-racine',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private network : NetworkService) {  };

}
