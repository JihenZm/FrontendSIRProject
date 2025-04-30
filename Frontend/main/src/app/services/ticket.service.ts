import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
export interface Ticket {
  prix: number;
  place: string;
  acheter: boolean;
  dateAchat: string; // ISO string
  evenement: { id: number };
  acheteur: { id: number };
}

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = '/ticket'; // à adapter selon ton backend

  constructor(private http: HttpClient) {}

  reserverTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.apiUrl, ticket);
  }
  // GET : récupérer un ticket par son ID
  getTicketById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}/${id}`);
  }

  // GET : récupérer tous les tickets
  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl);
  }
}
