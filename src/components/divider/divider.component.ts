import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  standalone: true,
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.sass'],
  imports: [MatDividerModule]
})
export class DividerComponent {

}
