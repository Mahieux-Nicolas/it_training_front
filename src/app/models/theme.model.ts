import { Categorie } from "./categorie.model";

export class Theme {
    id!: number;
    intitulerTheme!: string;
    description!: string;
    categories!:Categorie[];
  }