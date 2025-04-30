import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatProgressBar} from "@angular/material/progress-bar";
import {TablerIconsModule} from "angular-tabler-icons";
import {TitleCasePipe} from "@angular/common";
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MaterialModule } from "../../../material.module";
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgScrollbarModule } from 'ngx-scrollbar';


import { TicketService, Ticket } from 'src/app/services/ticket.service';
@Component({
  selector: 'app-listticket-participant',
  imports: [
    MatCard,
    CommonModule,
    MatCardContent,
    MatCardTitle,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatProgressBar,
    MatRow,
    MatRowDef,
    MatTable,
    TablerIconsModule,
    TitleCasePipe,
    MatMenuTrigger,
    MatMenuItem,
    MatHeaderCellDef,
    MaterialModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
    TablerIconsModule,
    MatProgressBarModule,
    NgScrollbarModule
  ],
  templateUrl: './listticket-participant.component.html',
  standalone: true,
  styleUrl: './listticket-participant.component.scss'
})
export class ListticketParticipantComponent implements OnInit {
  displayedColumns: string[] = ['evenement', 'place','paiement', 'status', 'menu'];
  dataSource = new MatTableDataSource<Ticket>();

  userId = 3; // 🔁 à remplacer par AuthService plus tard

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getAllTickets().subscribe({
      next: (tickets) => {
        const userTickets = tickets.filter(ticket => ticket.acheteurId === this.userId);
        this.dataSource.data = userTickets;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des tickets :', err);
      }
    });
  }
}
