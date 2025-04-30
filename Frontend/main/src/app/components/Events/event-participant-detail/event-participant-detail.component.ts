import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EvenementService, Evenement } from 'src/app/services/evenement.service';
import { TicketService } from 'src/app/services/ticket.service'; // On importe juste le service ici
import { formatISO } from 'date-fns';

import { MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle } from '@angular/material/card';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatDivider } from '@angular/material/divider';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event-participant-detail',
  standalone: true,
  templateUrl: './event-participant-detail.component.html',
  styleUrl: './event-participant-detail.component.scss',
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
    MatButton,
    MatSnackBarModule
  ]
})
export class EventParticipantDetailComponent implements OnInit {
  event?: Evenement;
  eventId!: number;

  constructor(
    private route: ActivatedRoute,
    private evenementService: EvenementService,
    private ticketService: TicketService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.getEventDetails();
  }

  getEventDetails() {
    this.evenementService.getEvenementById(this.eventId).subscribe({
      next: (data) => {
        this.event = data;
        console.log('Événement chargé :', this.event);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération de l\'événement', error);
        this.snackBar.open('❌ Échec du chargement de l’événement.', 'Fermer', {
          duration: 4000,
          panelClass: ['snackbar-error']
        });
      }
    });
  }

  reserverTicket() {
    if (!this.event) {
      this.snackBar.open('⚠️ Événement introuvable.', 'Fermer', {
        duration: 4000,
        panelClass: ['snackbar-error']
      });
      return;
    }

    const userId = 3; // à remplacer dynamiquement

    // ✅ on crée un objet avec le format attendu par le backend
    const ticketToPost = {
      prix: this.event.prix,
      place: this.genererPlaceAleatoire(),
      acheter: false,
      dateAchat: formatISO(new Date()),
      acheteur: { id: userId },
      evenement: { id: this.event.id! }
    };

    this.ticketService.reserverTicket(ticketToPost).subscribe({
      next: () => {
        this.snackBar.open('🎫 Ticket réservé avec succès !', 'Fermer', {
          duration: 4000,
          panelClass: ['snackbar-success']
        });
      },
      error: (err) => {
        console.error('Erreur réservation ticket:', err);
        this.snackBar.open('❌ Erreur lors de la réservation.', 'Fermer', {
          duration: 4000,
          panelClass: ['snackbar-error']
        });
      }
    });
  }

  genererPlaceAleatoire(): string {
    const rang = String.fromCharCode(65 + Math.floor(Math.random() * 6)); // A-F
    const numero = Math.floor(Math.random() * 30) + 1; // 1-30
    return `${rang}${numero}`;
  }
}
