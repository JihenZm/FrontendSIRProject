import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { EvenementService } from 'src/app/services/evenement.service';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from "@angular/material/datepicker";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    RouterLink,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ]
})
export class AddEventComponent {
  eventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventService: EvenementService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.eventForm = this.fb.group({
      titre: ['', Validators.required],
      lieu: ['', Validators.required],
      date: ['', Validators.required],
      description: [''],
      prix: [0, [Validators.required, Validators.min(0)]],
      popularite: [0],
      capacite: [0],
      organisateurId: [1, Validators.required],
      ticketIds: [[]]
    });
  }

  /** Formate la date pour le backend Spring : yyyy-MM-dd */
  private formatDate(date: Date): string {
    console.log('📅 Date avant conversion :', date);
    if (!date) return '';
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  onSubmit() {
    if (this.eventForm.invalid) return;

    const formData = this.eventForm.value;

    const evenement = {
      titre: formData.titre,
      lieu: formData.lieu,
      date: this.formatDate(formData.date), // ✅ conversion nécessaire
      description: formData.description,
      prix: formData.prix,
      popularite: formData.popularite,
      capacite: formData.capacite,
      organisateur: { id: formData.organisateurId },
      tickets: formData.ticketIds.map((id: number) => ({ id }))
    };

    console.log('🎯 Événement envoyé :', evenement); // 🔍 debug utile

    this.eventService.addEvenement(evenement).subscribe({
      next: () => {
        this.snackBar.open('🎉 Événement créé avec succès !', 'Fermer', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        this.router.navigate(['/event/listEvent']);
      },
      error: err => {
        console.error('❌ Erreur lors de l\'ajout', err);
        this.snackBar.open('❌ Une erreur est survenue.', 'Fermer', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }
}
