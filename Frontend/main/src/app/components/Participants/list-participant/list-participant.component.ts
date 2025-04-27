import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

// table 1
export interface productsData {
  id: number;
  imagePath: string;
  prenom: string;
  nom: string;
  email: string;
}

const PRODUCT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/products/product-1.png',
    prenom: 'Jihen',
    nom: 'ZEMZEM',
    email: 'jihenzemzem@gmail.com',
   
  },
  {
    id: 2,
    imagePath: 'assets/images/products/product-2.png',
    prenom: 'Amir ',
    nom: 'AL MAMMA',
    email: 'helloamir@gmail.com',
  
  },
 
];
@Component({
  selector: 'app-list-participant',
  imports: [ MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,],
  templateUrl: './list-participant.component.html',
  standalone: true,
  styleUrl: './list-participant.component.scss'
})
export class ListParticipantComponent {
// table 1
  displayedColumns1: string[] = [ 'prenom', 'nom', 'email','action'];
  dataSource1 = PRODUCT_DATA;
}

