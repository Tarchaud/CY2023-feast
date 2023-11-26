import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { AccueilComponent } from './pages/accueil/accueil.component';
import { OrgaMenuComponent } from './template/orga-menu/orga-menu.component';
import { OrgaStocksComponent } from './pages/orga-stocks/orga-stocks.component';
import { OrgaEventsComponent } from './pages/orga-events/orga-events.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { AddEventComponent } from './pages/add-event/add-event.component';
import { EditEventComponent } from './pages/edit-event/edit-event.component';

//Modules
import { SharedModule } from '../shared/shared.module';
import { OrganisationRoutingModule } from './organisation-routing.module';
import { StocksPipe } from './shared/pipes/stocks.pipe';
import { EditStockComponent } from './pages/edit-stock/edit-stock.component';
import { AddStockComponent } from './pages/add-stock/add-stock.component';

@NgModule({
  declarations: [
    AccueilComponent,
    OrgaMenuComponent,
    OrgaStocksComponent,
    OrgaEventsComponent,
    OrganisationComponent,
    AddEventComponent,
    EditEventComponent,
    StocksPipe,
    EditStockComponent,
    AddStockComponent
  ],
  imports: [
    CommonModule,
    OrganisationRoutingModule,
    SharedModule,
  ]
})
export class OrganisationModule { }
