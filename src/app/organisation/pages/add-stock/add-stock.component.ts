import { Component, OnInit } from '@angular/core';
import { StockI } from '../../shared/models/stock-i';
import { Router } from '@angular/router';
import { StocksService } from '../../shared/services/stocks.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit{
  stock !: StockI;
  stockId !: string;
  loader : boolean = true;


  constructor( public stocksService : StocksService, private router : Router) {
  }

  ngOnInit(): void {
  }

  addStock(stock : NgForm){
    console.log('stock : ', stock);
    this.stocksService.setStock(stock);
    this.router.navigate(['organisation','stocks']);
  }
}
