import { Pipe, PipeTransform } from '@angular/core';
import { StockI } from '../models/stock-i';
import { list } from '@angular/fire/database';

@Pipe({
  name: 'stocks'
})
export class StocksPipe implements PipeTransform {

  transform(listStock: Array<StockI>,filtre: string): Array<StockI> {
    return listStock.filter(stock => stock.nom.toLowerCase().indexOf(filtre.toLowerCase()) > -1 );
  }

}
