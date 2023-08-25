import { Client } from "./client.model";
import { Formation } from "./formation.model";

export class SessionFormation{
    id! :number;
    nom_session! :string;
    debut_session! :Date;
    fin_session! : Date;
    nbParticipants! :number;
    typeFormation! : string;
    lieuSession! : string;
    formation! : Formation;
    clients! : Client[];
}