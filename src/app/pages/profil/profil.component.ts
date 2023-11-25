import { Component, OnInit } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user !: UsersI;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.profil;

  }

}
