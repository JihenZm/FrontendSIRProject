import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {RouterLink} from "@angular/router";

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
  imports: [
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatLabel,
    MatFormField,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatDatepicker,
    FormsModule,
    MatButton,
    MatInput,
    MatOption,
    MatSelect, MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule, MatDatepickerInput, RouterLink,
  ],
  standalone: true
})
export class AddEventComponent {

  country: Food[] = [
    { value: 'steak-0', viewValue: 'USA' },
    { value: 'pizza-1', viewValue: 'India' },
    { value: 'tacos-2', viewValue: 'France' },
    { value: 'tacos-3', viewValue: 'UK' },
  ];

  selectedCountry = this.country[2].value;

  city: Food[] = [
    { value: 'steak-0', viewValue: 'Mexico' },
    { value: 'pizza-1', viewValue: 'Mumbai' },
    { value: 'tacos-2', viewValue: 'Tokyo' },
    { value: 'tacos-3', viewValue: 'New York' },
  ];

  selectedCity = this.city[1].value;

  state: Food[] = [
    { value: 'steak-0', viewValue: 'Cuba' },
    { value: 'pizza-1', viewValue: 'Djibouti' },
    { value: 'tacos-2', viewValue: 'Bulgaria' },
    { value: 'tacos-3', viewValue: 'Cabo Verde' },
  ];

  selectedState = this.state[3].value;
}
