import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { AdminService } from '../../shared/services/admin.service';

@Component({
  selector: 'app-gestion-profils',
  templateUrl: './gestion-profils.component.html',
  styleUrls: ['./gestion-profils.component.css']
})
export class GestionProfilsComponent implements OnInit {

  constructor(private route : Router,
  public adminService : AdminService, public auth : AuthService, public usersSerivce : UsersService) { }

  ngOnInit(): void {
    this.usersSerivce.getAllUsers();
  }


  editUser(user : string){
    console.log(user);
    this.route.navigateByUrl('/admin/editUser/'+user);
  }

  deleteUser(user : string){
    console.log(user);
    this.usersSerivce.supprimeUser(user);
    this.usersSerivce.getAllUsers();
  }

}
