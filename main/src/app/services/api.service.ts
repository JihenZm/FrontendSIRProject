import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Adresse de ton backend
  private backendUrl = 'http://localhost:8080'; // ⚠️ adapte l'URL si besoin (ex: http://localhost:8080/api)

  constructor(private http: HttpClient) { }

  /**
   * Inscription d'un nouvel utilisateur
   * @param userData : les données du formulaire d'inscription
   */
  register(userData: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/register`, userData);
  }

  /**
   * Connexion d'un utilisateur
   * @param credentials : login + password
   */
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/login`, credentials);
  }

  /**
   * Exemple : création d'un événement
   * @param eventData : données de l'événement
   */
  createEvent(eventData: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/events`, eventData);
  }

  /**
   * Exemple : récupération de la liste des événements
   */
  getEvents(): Observable<any> {
    return this.http.get(`${this.backendUrl}/events`);
  }

  // Tu peux rajouter autant de méthodes que tu veux selon ton backend !
}
