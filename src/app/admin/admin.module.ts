import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GestionProfilsComponent } from './pages/gestion-profils/gestion-profils.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEditUserComponent } from './pages/admin-edit-user/admin-edit-user.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GestionProfilsComponent,
    AdminComponent,
    AdminEditUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
