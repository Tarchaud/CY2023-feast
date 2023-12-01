import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StocksService } from '../../shared/services/stocks.service';
import { StockI } from '../../shared/models/stock-i';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent {
  stock !: StockI;
  stockId !: string;
  loader : boolean = true;


  constructor(private activeRoute : ActivatedRoute, public stocksService : StocksService, private router : Router) {
    this.stockId = this.activeRoute.snapshot.paramMap.get('idStock') || '';
    console.log('params : ', this.stockId);
    this.stocksService.getStock(this.stockId).then(
      (ev) => {
        this.loader = false;
        this.stock = ev;
        console.log('stock : ', this.stock);
      }
    ).catch(
      (er) => console.log(er)
    );
  }

  ngOnInit(): void {
  }

  updateStock(stock : NgForm){
    console.log("form value : ", stock);
    this.stocksService.editStock(this.stockId, stock);
    this.router.navigate(['organisation','stocks']);
  }
}
