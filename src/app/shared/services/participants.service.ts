import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, getDocs, query, where } from '@angular/fire/firestore';
import { ParticipantI } from '../models/users-i';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  listeParticipants : Array<ParticipantI> = [];

  constructor(private store:Firestore) { }


  /**
   * Permet de s'inscrire à un événement
   * @param participant
   */
  inscription(participant:ParticipantI){
    addDoc(collection(this.store,'participations'), participant).then(
      () => console.log('ok')
    ).catch(
      er => console.log(er)
    );
  }

  /**
   * Permet d'avoir le nombre de personne inscrite à un événement
   * @param idEvent
   * @returns
   */
  async getCountInscrits(idEvent: string) : Promise<number> {
    try {
      const q = query(collection(this.store, 'participations'), where('event', '==', idEvent));
      const querySnapshot = await getDocs(q);
      const count = querySnapshot.size;
      console.log('Nombre de participations pour l\'événement avec l\'ID', idEvent, ':', count);
      return count;
    } catch (error) {
      console.error('Erreur lors de la récupération des participations:', error);
      throw error;
    }
  }

  /**
   * Permet d'avoir la liste des participants à un événement
   * @param idEvent
   * @returns
   */
  async getParticipants(idEvent: string) : Promise<Array<ParticipantI>> {
    try {
      const q = query(collection(this.store, 'participations'), where('event', '==', idEvent));
      const querySnapshot = await getDocs(q);
      const participants = querySnapshot.docs.map(doc => doc.data() as ParticipantI);
      console.log('Participants pour l\'événement avec l\'ID', idEvent, ':', participants);
      return participants;
    } catch (error) {
      console.error('Erreur lors de la récupération des participations:', error);
      throw error;
    }
  }

  /**
   * Permet de récupérer une participation
   * @param idEvent
   * @param idUser
   * @returns
   */
  async getParticipation(idEvent: string, idUser: string): Promise<ParticipantI | null> {
    try {
      const q = query(collection(this.store, 'participations'), where('event', '==', idEvent),where('idUser', '==', idUser));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size === 0) {
        console.log('Aucune participation trouvée pour l\'utilisateur avec l\'ID', idUser, 'à l\'événement avec l\'ID', idEvent);
        return null;
      }

      const participant = querySnapshot.docs[0].data() as ParticipantI;
      console.log('Participation pour l\'utilisateur avec l\'ID', idUser, 'à l\'événement avec l\'ID', idEvent, ':', participant);
      return participant;
    } catch (error) {
      console.error('Erreur lors de la récupération de la participation:', error);
      throw error;
    }
  }

  /**
   * Permet de supprimer une participation
   * @param idEvent
   * @param idUser
   * @returns
   */
  async deleteParticipation(idEvent: string, idUser: string): Promise<void> {
    try {
      const q = query(collection(this.store, 'participations'),
                      where('event', '==', idEvent),
                      where('idUser', '==', idUser));

      const querySnapshot = await getDocs(q);

      if (querySnapshot.size === 0) {
        console.log('Aucune participation trouvée pour l\'utilisateur avec l\'ID', idUser, 'à l\'événement avec l\'ID', idEvent);
        return;
      }

      // Supprimer le premier document correspondant à la requête
      const docToDelete = querySnapshot.docs[0];
      await deleteDoc(docToDelete.ref);

      console.log('Participation de l\'utilisateur avec l\'ID', idUser, 'à l\'événement avec l\'ID', idEvent, 'supprimée avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression de la participation:', error);
      throw error;
    }
  }


}
