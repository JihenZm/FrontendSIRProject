import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-side-register',
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-register.component.html',
  standalone: true
})
export class AppSideRegisterComponent {
  options = this.settings.getOptions();

  constructor(
    private settings: CoreService,
    private router: Router,
    private userService: UserService // On injecte UserService
  ) {}

  form = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    motdepasse: new FormControl('', [Validators.required, Validators.minLength(6)]),
    role: new FormControl('', [Validators.required])
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      return; // Si le formulaire est invalide, on ne fait rien
    }

    // Créer un objet JSON à partir du formulaire
    const formData = {
      nom: this.form.value.nom,
      prenom: this.form.value.prenom,
      email: this.form.value.email,
      motdepasse: this.form.value.motdepasse,
      role: this.form.value.role
    };

    // Appel du service UserService pour créer un participant
    this.userService.creerParticipant(formData).subscribe({
      next: (response) => {
        console.log('Inscription réussie', response);
        // Rediriger vers dashboard si succès
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Erreur lors de l\'inscription', error);
        // Afficher un message d'erreur si besoin
      }
    });
  }
}
