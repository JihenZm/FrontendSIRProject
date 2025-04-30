import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import {Ticket, TicketService} from 'src/app/services/ticket.service';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-ticket',
  standalone: true,
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardTitle,
    MatCardContent,
    MatCard
  ]
})
export class ListTicketComponent implements OnInit {
  dataSource = new MatTableDataSource<Ticket>();
  displayedColumns: string[] = ['products', 'place', 'payment', 'status', 'menu'];

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Event ID depuis l’URL :', eventId);

    this.ticketService.getAllTickets().subscribe({
      next: (tickets) => {
        const filtered = tickets.filter(t => t.evenementId === eventId);
        this.dataSource.data = filtered;
        console.log('Tickets filtrés :', filtered);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des tickets :', err);
      }
    });
  }
}
