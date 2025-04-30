import { Component, OnInit } from '@angular/core';
import { UserService, Utilisateur } from 'src/app/services/user.service';
import {
  MatCardModule,
  MatCardContent,
  MatCardTitle
} from '@angular/material/card';
import {
  MatTableModule,
  MatTableDataSource
} from '@angular/material/table';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-participant',
  standalone: true,
  templateUrl: './list-participant.component.html',
  styleUrls: ['./list-participant.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatCardTitle,
    MatCardContent,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    NgOptimizedImage
  ]
})
export class ListParticipantComponent implements OnInit {
  displayedColumns1: string[] = ['prenom', 'nom', 'email', 'action'];
  dataSource1 = new MatTableDataSource<Utilisateur>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUtilisateurs().subscribe({
      next: (data) => {
        console.log('Utilisateurs récupérés :', data);

        // Simuler le champ "role"
        const utilisateursSimulés = data.map(user => ({
          ...user,
          role: user.email?.toLowerCase().includes('organ') ? 'organisateur' : 'user'
        }));

        // Filtrer uniquement les utilisateurs
        const participants = utilisateursSimulés.filter(u => u.role === 'user');

        if (participants.length === 0) {
          console.warn('Aucun utilisateur avec le rôle "user" trouvé.');
        }

        this.dataSource1.data = participants;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des utilisateurs', err);
      }
    });
  }
}
