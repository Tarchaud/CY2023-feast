import { Injectable } from '@angular/core';
import { EvenementI } from '../models/evenement-i';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Firestore, collection, doc, getDoc, getDocs, addDoc, deleteDoc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  listeEvenements : Array<EvenementI> = [];
  listeEvent$ : BehaviorSubject<Array<EvenementI>> = new BehaviorSubject([] as Array<EvenementI>);
  exempleObservable$ : Observable<Array<EvenementI>> = new Observable();

  constructor( private http : HttpClient, private store:Firestore) {  }

  /**
   * Recpération de tout les evenements
   */
  getEvenements(){
    this.listeEvenements = [];
    getDocs(collection(this.store,'events')).then(
      (querySnapshot) => {
        console.log(querySnapshot);
        querySnapshot.forEach(
          (doc) => {
            console.log(doc.id, " => ", doc.data()); //TODO: clear
            const data = doc.data() as EvenementI;
            data.id = doc.id;
            console.log('data' ,data);//TODO: clear

            this.listeEvenements.push(data);
            console.log(this.listeEvenements);//TODO: clear
          }
        );
        this.listeEvent$.next(this.listeEvenements);
      }
    ).catch(
      (er) => console.log(er)
    );
  }

  /**
   *
   * @param ev
   */
  setEvenement(ev:EvenementI){ //TODO : a faire

    // this.http.post('asset/data/evenements.json',ev);
  }

  /**
   * Récpération d'un evenement
   * @param id
   */
  getEvenement(id:string):Promise<EvenementI>{
    return getDoc(doc(this.store,'events',id)).then(
      (doc) => {
        if(doc.exists()){
          let event : EvenementI;
          console.log(doc.data()); //TODO : clear
          event = doc.data() as EvenementI;
          event.id = doc.id;
          return event;
        }else{
          console.log('Aucun document trouvé');
          return {} as EvenementI;
        }
      }
    ).catch(
      (er) => {
        console.log(er);
        return {}  as EvenementI;;
      }
    )
  }
  /**
   *
   * @param ev
   */
  addEvent(ev:any){
    addDoc(collection(this.store,'events'), ev).then(
      () => console.log('ok')
    ).catch(
      er => console.log(er)
    );
  }

  /**
   *
   * @param id
   */
  deleteEvent(id:string){
    deleteDoc(doc(this.store,'events',id)).then(
      () => console.log('ok')
    ).catch(
      er => console.log(er)
    );
  }

  updateEvent(id:string, ev:any){
    console.log('id : ', id); //TODO : clear
    console.log('ev : ', ev); //TODO : clear
    const eventDoc = doc(this.store,'events',id);
    setDoc(eventDoc, ev, {merge:true})
    .then(
      () => console.log('ok')
    ).catch(
      er => console.log(er)
    );
  }

}
