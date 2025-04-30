import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service'; // ⚡ On importe ton service UserService

@Component({
  selector: 'app-side-login',
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-login.component.html',
  standalone: true
})
export class AppSideLoginComponent {

  constructor(
    private router: Router,
    private userService: UserService // ⚡ Injection du service UserService
  ) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    motdepasse: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const loginData = {
      email: this.form.value.email,
      motdepasse: this.form.value.motdepasse
    };

    this.userService.login(loginData.email!, loginData.motdepasse!).subscribe({
      next: (response) => {
        console.log('Connexion réussie', response);

        // Redirection selon le rôle
        if (response.role === 'user') {
          this.router.navigate(['/participant/event/EventParticipant']);
        } else if (response.role === 'organisateur') {
          this.router.navigate(['/dashboard']);
        } else {
          console.error('Rôle non reconnu');
          alert('Rôle non reconnu.');
        }
      },
      error: (error) => {
        if (error.status === 401) {
          alert('Identifiants invalides. Veuillez réessayer.');
        } else {
          alert('Erreur lors de la connexion.');
        }
        console.error('Erreur lors de la connexion', error);
      }
    });

}
}
