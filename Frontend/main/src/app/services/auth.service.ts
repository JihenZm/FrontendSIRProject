import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth'; // <-- Your backend auth endpoint

  constructor(private http: HttpClient) {}

  register(nom: string, prenom: string, email: string, motdepasse: string): Observable<any> {
    const body = { nom, prenom, email, motdepasse };
    return this.http.post(`${this.baseUrl}/register`, body);
  }

  login(email: string, motdepasse: string): Observable<any> {
    const body = { email, motdepasse };
    return this.http.post(`${this.baseUrl}/login`, body);
  }
}
