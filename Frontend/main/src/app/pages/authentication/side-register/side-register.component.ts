import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

import { AuthService } from 'src/app/services/auth.service'; 
@Component({
  selector: 'app-side-register',
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-register.component.html',
})
export class AppSideRegisterComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService, private router: Router, private authService: AuthService) {}
  

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) return;
  
    this.authService.register(
      this.form.value.uname!,
      '', // no prenom field yet in your form, you can extend it later
      this.form.value.email!,
      this.form.value.password!
    ).subscribe({
      next: (response) => {
        console.log('Registration success', response);
        this.router.navigate(['/']); // Redirect to login page
      },
      error: (error) => {
        console.error('Registration failed', error);
        // show error to user if needed
      }
    });
  }
}
