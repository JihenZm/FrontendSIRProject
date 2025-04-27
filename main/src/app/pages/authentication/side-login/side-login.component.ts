import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service'; // <-- Ajoute l'import
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private apiService: ApiService // <-- Injecte ApiService ici
  ) {}

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.valid) {
      const credentials = {
        username: this.form.value.uname,
        password: this.form.value.password
      };

      this.apiService.login(credentials).subscribe(
        (response) => {
          console.log('Connexion réussie', response);
          this.router.navigate(['/']); // Redirection après succès
        },
        (error) => {
          console.error('Erreur lors de la connexion', error);
        }
      );
    } else {
      console.warn('Formulaire invalide');
    }
  }
}
