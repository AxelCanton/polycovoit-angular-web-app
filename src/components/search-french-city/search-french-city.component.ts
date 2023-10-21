import { Component, EventEmitter, Output } from '@angular/core';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { Observable, Subject, defaultIfEmpty, map, startWith } from 'rxjs';

type FrenchCity = {
  nom_commune: string
  nom_departement: string
  code_postal: number
  nom_region: string
  latitude: number
  longitude: number
}

@Component({
  standalone: true,
  selector: 'app-search-french-city',
  templateUrl: './search-french-city.component.html',
  styleUrls: ['./search-french-city.component.sass'],
  imports: [
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    ScrollingModule
  ]
})
export class SearchFrenchCityComponent {
  options: FrenchCity[] = [];
  myControl = new FormControl<FrenchCity | null>(null);
  filteredOptions: Observable<FrenchCity[]> | null = null;
  
  constructor(private httpClient: HttpClient) {
    this.httpClient.get<FrenchCity[]>('assets/franceCities.json').subscribe((res) => {
      this.options = res;
    });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      map(value => this._filter(value)),
    );
  }

  @Output() onPick = new EventEmitter<FrenchCity>();

  onSelect(event: MatAutocompleteSelectedEvent) {
    console.log(event);
  }

  getOptions() {
    return this.filteredOptions || this.options;
  }

  formatOption(city: FrenchCity | null) {
    if (!city) {
      return '';
    }
    return `${city.nom_commune} (${city.nom_departement}, ${city.code_postal})`
  }
  log(event: any) {
    console.log(event)
  }

  private _filter(value: FrenchCity | null) {
    return this.options;
    // if (!value) {
    //   return this.options;
    // }
    // try {
    //   const filterValue = value.toLowerCase();

    //   return this.options.filter(option => this.formatOption(option).toLowerCase().includes(filterValue));
    // }
    // catch (err) {
    //   console.log('err', value);
    //   return this.options
    // }
  }
}
