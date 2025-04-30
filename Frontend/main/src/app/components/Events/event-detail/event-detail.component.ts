import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { EvenementService, Evenement } from 'src/app/services/evenement.service';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from "@angular/material/card";
import { TablerIconsModule } from "angular-tabler-icons";
import { MatDivider } from "@angular/material/divider";
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatDivider,
    TablerIconsModule,
    RouterLink,
    MatCardImage,
    NgOptimizedImage,
    MatButton
  ],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss'
})
export class EventDetailComponent implements OnInit {

  event?: Evenement; //  Utiliser Evenement de ton service
  eventId!: number; // id de l'événement récupéré de l'URL

  constructor(
    private route: ActivatedRoute,
    private evenementService: EvenementService
  ) {}

  ngOnInit() {
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.getEventDetails();
  }

  getEventDetails() {
    this.evenementService.getEvenementById(this.eventId).subscribe({
      next: (data) => {
        this.event = data;
        console.log('Événement chargé:', this.event);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération de l\'événement', error);
      }
    });
  }



}
