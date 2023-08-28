import { Client } from "../models/client.model";

interface ConnexionResponse {
    isAuthenticated: boolean;
    client?: Client; // Si l'objet client est facultatif
  }