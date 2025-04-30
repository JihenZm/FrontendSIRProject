import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatTableDataSource } from '@angular/material/table';
import { TicketService, Ticket } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-list-ticket',
  standalone: true,
  templateUrl: './list-ticket.component.html',
  styleUrl: './list-ticket.component.scss',
  imports: [
    CommonModule,
    MaterialModule,
    MatMenuModule,
    MatButtonModule,
    TablerIconsModule,
    MatProgressBarModule,
    NgScrollbarModule
  ]
})
export class ListTicketComponent implements OnInit {
  displayedColumns: string[] = ['products','place', 'payment', 'status', 'menu'];
  dataSource = new MatTableDataSource<Ticket>();

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketService.getAllTickets().subscribe({
      next: (tickets) => {
        const eventTickets = tickets.filter(t => t.evenement?.id === eventId);
        this.dataSource.data = eventTickets;
      },
      error: (err) => {
        console.error('Erreur récupération tickets :', err);
      }
    });
  }
}
