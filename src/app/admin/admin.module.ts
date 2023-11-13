import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GestionProfilsComponent } from './pages/gestion-profils/gestion-profils.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    GestionProfilsComponent,
    ParametresComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
