import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  motdepasse?: string;
  role?: string;
  tickets?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiParticipantUrl = '/auth/register';
  private apiLoginUrl = '/auth/login';
  private apiUtilisateursUrl = 'utilisateur'; // Exemple de route REST exposée pour les utilisateurs

  constructor(private http: HttpClient) {}

  creerParticipant(data: any): Observable<any> {
    return this.http.post(this.apiParticipantUrl, data);
  }

  login(email: string, motdepasse: string): Observable<any> {
    const credentials = { email, motdepasse };
    return this.http.post(this.apiLoginUrl, credentials);
  }

  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUtilisateursUrl);
  }
}
