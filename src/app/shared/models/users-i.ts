export interface UsersI {
  nom : string;
  prenom : string;
  id ?: string;
  email : string;
  emailVerified ?: boolean;
  token ?: string;
  statut : string;
  infos ?: string;
  media ?: MediaI;
  creationDate ?: number;
  lastlog ?: number;
}

export interface ContactI {
  nom ?: string;
  prenom ?: string;
  age ?: number;
  adresse : Adresse;
  tel ?: string;
  mobile ?: string;
  email : string;
  status ?: string;
  infos ?: string;
}

interface Adresse {
  rue : string;
  codePostal : number;
  ville : string;
}


export interface MediaI{
  src : string;
  alt ?: string;
  type : string;
}


export interface FireUserI {
  metadata : MetadataI;
  // accessToken : string;
  email : string;
  phoneNumber ?: string;
  photoURL ?: string;
  uid: string;
}

export interface MetadataI {
  createdAt : string;
  creationTime : string;
  lastLoginAt : string;
  lastSignInTime : string;
}

export interface ParticipantI {
  idUser : string;
  nom : string;
  prenom : string;
  event : string;
}
