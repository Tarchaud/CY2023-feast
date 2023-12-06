import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GestionProfilsComponent } from './pages/gestion-profils/gestion-profils.component';
import { AdminEditUserComponent } from './pages/admin-edit-user/admin-edit-user.component';

const routes: Routes = [
  { path: '' , component: AdminComponent, children: [
    { path: '', component: GestionProfilsComponent },
    { path: 'editUser/:idUser', component: AdminEditUserComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
