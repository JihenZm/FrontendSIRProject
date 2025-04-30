
import { Component, OnInit } from '@angular/core';
import {CommonModule, CurrencyPipe, DatePipe, NgForOf} from '@angular/common'; // ⚡ Ajout obligatoire ici
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardActions, MatCardContent, MatCardImage, MatCardModule} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TablerIconsModule } from 'angular-tabler-icons';
import { RouterLink } from "@angular/router";
import { MatFormFieldModule } from '@angular/material/form-field';
import { EvenementService, Evenement } from 'src/app/services/evenement.service';


@Component({
  selector: 'app-event-participant',
  imports: [
    CurrencyPipe,
    DatePipe,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardImage,
    NgForOf,
    RouterLink,
    CommonModule, // ⚡ Ajoute CommonModule ici pour utiliser *ngFor, *ngIf, etc.
    MatCardModule,
    MatChipsModule,
    TablerIconsModule,
    MatButtonModule,
    RouterLink,
    MatFormFieldModule
  ],
  templateUrl: './event-participant.component.html',
  standalone: true,
  styleUrl: './event-participant.component.scss'
})
export class EventParticipantComponent implements OnInit {

  events: Evenement[] = [];

  constructor(private evenementService: EvenementService) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.evenementService.getAllEvenements().subscribe({
      next: (data) => {
        this.events = data;
        console.log('Événements récupérés:', this.events);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des événements', error);
      }
    });
  }
}
