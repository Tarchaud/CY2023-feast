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
  isLoading : boolean = true;

  constructor(public authService: AuthService, public userServie: UsersService) { }

  ngOnInit(): void {
    console.log('profil : ', this.authService.profil);
    this.authService.getProfil();
    this.isLoading = false;
  }


  deleteProfil(){
    this.userServie.supprimeDoc(this.authService.user.uid);
  }
}
