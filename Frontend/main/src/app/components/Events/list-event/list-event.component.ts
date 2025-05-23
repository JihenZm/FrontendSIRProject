import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⚡ Ajout obligatoire ici
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TablerIconsModule } from 'angular-tabler-icons';
import { RouterLink } from "@angular/router";
import { MatFormFieldModule } from '@angular/material/form-field';
import { EvenementService, Evenement } from 'src/app/services/evenement.service';
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-list-event',
  standalone: true,
  imports: [
    CommonModule, // ⚡ Ajoute CommonModule ici pour utiliser *ngFor, *ngIf, etc.
    MatCardModule,
    MatChipsModule,
    TablerIconsModule,
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    MatProgressSpinner
  ],
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.scss'
})
export class ListEventComponent implements OnInit {

  events: Evenement[] = [];

  constructor(private evenementService: EvenementService) {}

  ngOnInit() {
    this.getEvents();
  }

  loading = true;

  getEvents() {
    this.evenementService.getAllEvenements().subscribe({
      next: (data) => {
        console.log("Données reçues : ", data);
        this.events = data;

        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des événements', error);
        this.loading = false;
      }
    });
  }



}
