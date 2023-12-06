import { Injectable } from '@angular/core';
import { EvenementI } from '../models/evenement-i';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Firestore, collection, doc, getDoc, getDocs, addDoc, deleteDoc, setDoc } from '@angular/fire/firestore';
import { Notify } from 'notiflix';

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
            const data = doc.data() as EvenementI;
            data.id = doc.id;
            this.listeEvenements.push(data);
          }
        );
        this.listeEvent$.next(this.listeEvenements);
      }
    ).catch(
      (er) => console.log(er)
    );
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
   * Permet de créer un evenement
   * @param ev
   */
  addEvent(ev:any){
    addDoc(collection(this.store,'events'), ev).then(
      () => {
        console.log('ok');
        Notify.success('Evénement bien créé !');
      }
    ).catch(
      er => console.log(er)
    );
  }

  /**
   * Suppression d'un evenement
   * @param id
   */
  deleteEvent(id:string){
    deleteDoc(doc(this.store,'events',id)).then(
      () => {
        console.log('ok');
        Notify.success('Evénement bien supprimé !');
      }
    ).catch(
      er => console.log(er)
    );
  }

  /**
   *  Mise à jour d'un evenement
   * @param id
   * @param ev
   */
  updateEvent(id:string, ev:any){
    const eventDoc = doc(this.store,'events',id);
    setDoc(eventDoc, ev, {merge:true})
    .then(
      () => {
        console.log('ok');
        Notify.success('Evénement mis à jour !');
      }
    ).catch(
      er => console.log(er)
    );
  }

}
