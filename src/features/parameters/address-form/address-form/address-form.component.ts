import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio'; 
import { SearchFrenchCityComponent } from 'src/components/search-french-city/search-french-city.component';

@Component({
  standalone: true,
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.sass'],
  imports: [MatRadioModule, FormsModule, NgFor, SearchFrenchCityComponent]
})
export class AddressFormComponent {
  radioPlace: string = '';
  radioPlaceList = ['France', 'Etranger']
  country = new FormControl('');
  city = new FormControl('');
  postalCode = new FormControl('');
}
