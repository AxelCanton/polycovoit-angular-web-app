import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass'],
  imports: [MatToolbarModule, MatButtonModule, RouterLink, CommonModule]
})
export class TopBarComponent {
  isConnected = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getObservableUser().subscribe((user) => {
      if (user) {
        this.isConnected = true;
      }
    })
  }

}
