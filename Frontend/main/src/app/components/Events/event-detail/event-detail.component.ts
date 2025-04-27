import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {TablerIconsModule} from "angular-tabler-icons";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-event-detail',
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    TablerIconsModule,
    MatDivider,
    MatCardHeader
  ],
  templateUrl: './event-detail.component.html',
  standalone: true,
  styleUrl: './event-detail.component.scss'
})

export class EventDetailComponent {

  eventDetails = {
    photoEvenement: 'https://via.placeholder.com/600x200',
    data: {
      photoOrganisateur: 'https://via.placeholder.com/100',
      OrganisatorNom: 'John Doe',
      nom: 'Sample Event Title',
      debut: '2025-06-01',
      fin: '2025-06-05',
      description: 'This is a static description of the event. It is amazing and you should definitely attend!',
      salons: [
        { nom: 'Salon A' },
        { nom: 'Salon B' },
        { nom: 'Salon C' }
      ]
    }
  };

  getImageUrl(imagePath: string): string {
    return imagePath;
  }

}
