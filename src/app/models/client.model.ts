export class Client{
    id! :number;
    nom! :string;
    prenom! :string;
    adresse! : string;
    complementUn! :string;
    complementDeux! : string;
    codePostal! : number;
    ville! : string;
    email! : string;
    password! : string;
    telephone! : string;
    desactive! :boolean;
    estCapable! :boolean;

    constructor(nom : string, prenom : string, email: string, password : string){
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = this.password;
    }
}