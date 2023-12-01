import { Injectable } from '@angular/core';
import { StockI } from '../models/stock-i';
import { Firestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from '@angular/fire/firestore';
import { get } from '@angular/fire/database';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  listeStocks : Array<StockI> = []

  constructor(private store : Firestore) { }


  /**
   * Permet de récupérer tout les stocks
   */
  getStocks(){
    this.listeStocks = [];
    getDocs(collection(this.store, 'stocks')).then(
      (querySnapshot) => {
        console.log(querySnapshot);//TODO: clear
        querySnapshot.forEach(
          (doc) => {
            console.log(doc.id, " => ", doc.data()); //TODO: clear
            const data = doc.data() as StockI;
            data.id = doc.id;
            console.log('data' ,data);//TODO: clear
            this.listeStocks.push(data);
            console.log(this.listeStocks);//TODO: clear
          }
        );
      }
    ).catch(
      (er) => console.log(er)
    );
  }

  getStock(id:string) : Promise<StockI>{
    return getDoc(doc(this.store, 'stocks', id)).then(
      (doc) => {
        if(doc.exists()){
          console.log(doc.id, " => ", doc.data());//TODO: clear
          const stock = doc.data() as StockI;
          stock.id = doc.id;
          console.log('data' ,stock);//TODO: clear
          return stock;
        }else{
          console.log('pas de document');
          return {} as StockI;
        }
      }
    ).catch(
      (er) => {
        console.log(er);
        return {} as StockI;
      }
    );
  }


  /**
   * Permet de créer un stock
   * @param stock
   */
  setStock(stock:NgForm){
    addDoc(collection(this.store, 'stocks'), stock).then(
      () => console.log('stock ajouté')
    ).catch(
      er => console.log(er)
    );
  }

  /**
   * Permet de supprimer un stock
   * @param id
   */
  deleteStock(id:string){
    deleteDoc(doc(this.store, 'stocks', id)).then(
      () => console.log('stock supprimé')
    ).catch(
      er => console.log(er)
    );
  }

  /**
   * Permet de modifier un stock
   * @param id
   */
  editStock(id:string, stock:NgForm){
    const stockDoc = doc(this.store, 'stocks', id);
    setDoc(stockDoc, stock, {merge:true}).then(
      () => console.log('stock modifié')
    ).catch(
      er => console.log(er)
    );
  }


}
