import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { OrgaEventsComponent } from './pages/orga-events/orga-events.component';
import { OrgaStocksComponent } from './pages/orga-stocks/orga-stocks.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { AddEventComponent } from './pages/add-event/add-event.component';

const routes: Routes = [
  { path : '', component: OrganisationComponent , children: [
    { path : '', component: AccueilComponent },
    { path : 'events', component: OrgaEventsComponent },
    { path : 'events/new', component : AddEventComponent },
    { path : 'stocks', component: OrgaStocksComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationRoutingModule { }
