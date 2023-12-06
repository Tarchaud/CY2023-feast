import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersI } from 'src/app/shared/models/users-i';
import { AdminService } from '../../shared/services/admin.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent {
  user !: UsersI;
  idUser !: string;

  constructor(private activeRoute : ActivatedRoute, private adminService : AdminService, private route : Router, private userService : UsersService ) {
    this.idUser = this.activeRoute.snapshot.paramMap.get('idUser') || '';
    this.userService.getProfilById(this.idUser).then(
      (user) => {
        this.user = user.data() as UsersI;
        console.log('user : ', this.user);
      }
    ).catch(
      (er) => console.log(er)
    );
  }

  editProfil(form : NgForm){
    let profil = {
      nom : form.value.nom,
      prenom : form.value.prenom,
      email : form.value.email,
      statut : form.value.statut
    };

    this.userService.editProfilById(this.idUser,profil);
    this.route.navigateByUrl('/admin');

  }
}
