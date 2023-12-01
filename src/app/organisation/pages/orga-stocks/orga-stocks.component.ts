import { Component } from '@angular/core';
import { StocksService } from '../../shared/services/stocks.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-orga-stocks',
  templateUrl: './orga-stocks.component.html',
  styleUrls: ['./orga-stocks.component.css']
})
export class OrgaStocksComponent {
  filtre : string = '';

  constructor(public stocksService : StocksService, private router : Router ) { }

  ngOnInit(): void {
    this.stocksService.getStocks();
  }


  deleteStock(id : string){
    this.stocksService.deleteStock(id);
    this.stocksService.getStocks();
  }

  editStock(id : string){
    this.router.navigate(['organisation','stocks','edit',id]);
  }
}
