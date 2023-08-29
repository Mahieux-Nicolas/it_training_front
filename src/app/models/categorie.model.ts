import { Formation } from "./formation.model";

export class Categorie {
    id!:number;
    intitulerCategorie!:string;
    description!:string;
    formations!:Formation[];
}