import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-liste-evenements',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './liste-evenements.component.html',
  styleUrls: ['./liste-evenements.component.scss']
})
export class ListeEvenementsComponent implements OnInit {
  events: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getEvents().subscribe(
      (data) => {
        this.events = data;
        console.log('Événements récupérés :', this.events);
      },
      (error) => {
        console.error('Erreur lors de la récupération des événements', error);
      }
    );
  }
}
