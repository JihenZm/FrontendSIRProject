import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-creation-evenement',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './creation-evenement.component.html',
  styleUrls: ['./creation-evenement.component.scss']
})
export class CreationEvenementComponent {

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  });

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  submit() {
    if (this.form.valid) {
      const eventData = {
        title: this.form.value.title,
        description: this.form.value.description,
        date: this.form.value.date
      };

      this.apiService.createEvent(eventData).subscribe(
        (response) => {
          console.log('Événement créé avec succès', response);
          this.router.navigate(['/']); // Tu peux changer l'URL après succès
        },
        (error) => {
          console.error('Erreur lors de la création de l’événement', error);
        }
      );
    } else {
      console.warn('Formulaire invalide');
    }
  }
}
