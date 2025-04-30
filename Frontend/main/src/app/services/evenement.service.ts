import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface TypeScript pour Evenement
export interface Ticket {
  id: number;
}

export interface Evenement {
  id?: number; // optionnel à la création
  date: string;
  titre: string;
  lieu: string;
  description: string;
  prix: number;
  popularite: number;
  capacite: number;
  organisateur?: any;
  tickets: Ticket[];
}

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private evenementUrl = '/evenement'; // Chemin vers ton backend

  constructor(private http: HttpClient) {}

  /** Ajouter un nouvel événement */

  addEvenement(evenement: Evenement): Observable<any> {
    return this.http.post('/evenement', evenement, { responseType: 'text' as 'json' });
  }



  getEvenementById(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.evenementUrl}/${id}`);
  }



  /** Récupérer tous les événements */
  getAllEvenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.evenementUrl);
  }
}
