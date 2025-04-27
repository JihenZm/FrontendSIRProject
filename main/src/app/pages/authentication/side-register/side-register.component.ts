import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { ApiService } from 'src/app/services/api.service'; // <-- ajoute l'import

@Component({
  selector: 'app-side-register',
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-register.component.html',
})
export class AppSideRegisterComponent {
  options = this.settings.getOptions();

  constructor(
    private settings: CoreService,
    private router: Router,
    private apiService: ApiService // <-- injecte ApiService ici
  ) {}

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.valid) {
      const userData = {
        username: this.form.value.uname,
        email: this.form.value.email,
        password: this.form.value.password
      };

      this.apiService.register(userData).subscribe(
        (response) => {
          console.log('Inscription réussie', response);
          this.router.navigate(['/']); // Redirige après succès
        },
        (error) => {
          console.error('Erreur lors de l’inscription', error);
        }
      );
    } else {
      console.warn('Formulaire invalide');
    }
  }
}
