import { Component, OnInit } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user !: UsersI;

  constructor(public authService: AuthService, public userServie: UsersService) { }

  ngOnInit(): void {
    if (!this.authService.profil) {
      this.authService.getProfil();
    }
    this.user = this.authService.profil;
  }


  deleteProfil(){
    this.userServie.supprimeDoc(this.authService.user.uid);
  }
}
