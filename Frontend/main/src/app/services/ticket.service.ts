import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Ticket {
  prix: number;
  place: string;
  acheter: boolean;
  dateAchat: string;
  acheteurId: number;       // 👈 au lieu de acheteur: { id: number }
  evenementId: number;      // 👈 au lieu de evenement: { titre: string }
}
export interface TicketCreate {
  prix: number;
  place: string;
  acheter: boolean;
  dateAchat: string;
  acheteur: { id: number };
  evenement: { id: number };
}


@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = '/ticket'; // URL complète

  constructor(private http: HttpClient) {}

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl);
  }

  getTicketById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}/${id}`);
  }

  reserverTicket(ticket: TicketCreate): Observable<Ticket> {
    return this.http.post<Ticket>(this.apiUrl, ticket);
  }
}
