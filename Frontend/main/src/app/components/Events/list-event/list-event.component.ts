import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TablerIconsModule } from 'angular-tabler-icons';
import {RouterLink} from "@angular/router";
import { MatFormFieldModule } from '@angular/material/form-field';


interface cardimgs {
  id: number;
  gender: string;
  imgSrc: string;
  user: string;
  title: string;
  location: string;
  price: string;
  date: string;
}
@Component({
  selector: 'app-list-event',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, TablerIconsModule, MatButtonModule, RouterLink,MatFormFieldModule],
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.scss'
})
export class ListEventComponent {
  constructor() {}

  //   card 2
  cardimgs: cardimgs[] = [
    {
      id: 1,
      gender: 'JAZZ',
      imgSrc: '/assets/images/blog/blog-img1.jpg',
      user: '/assets/images/profile/user-1.jpg',
      title: 'As yen tumbles, gadget-loving Japan goes for iPhones',
      location: 'Paté Rennes ',
      price: '30',
      date: 'Mon, Dec 2025',
    },
    {
      id: 2,
      gender: 'POP',
      imgSrc: '/assets/images/blog/blog-img2.jpg',
      user: '/assets/images/profile/user-2.jpg',
      title:
        'Intel loses bid to revive antitrust case against patent foe Fortress',
      location: 'Rennes',
      price: '30',
      date: 'Sun, Dec 2025',
    },
    {
      id: 3,
      gender: 'HIP HOP',
      imgSrc: '/assets/images/blog/blog-img3.jpg',
      user: '/assets/images/profile/user-3.jpg',
      title: 'COVID outbreak deepens as more lockdowns loom in China',
      location: 'Paris',
      price: '30',
      date: 'Sat, Dec 2025',
    },
  ];
}



