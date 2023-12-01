import { MediaI } from "./users-i";

export interface EvenementI {
  id ?: string;
  titre : string;
  date : number | Date;
  places : number;
  horaires : HoraireI;
  infos ?: string;
  media ?: MediaI;
}

interface HoraireI {
  debut : string;
  fin : string;
}
