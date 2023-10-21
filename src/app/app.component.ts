import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AuthService } from 'src/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    standalone: true,
    imports: [
        RouterOutlet,
        TopBarComponent,
        CommonModule
    ]
})
export class AppComponent {
    isLoading = false;

    constructor(private authService: AuthService, private router: Router) {}
    
    ngOnInit() {
        // const observable = this.authService.loginFromLocal();
        // if (observable) {
        //     observable.subscribe({
        //         next: () => {
        //             this.isLoading = false;
        //             this.router.navigate(['map']);
        //         },
        //         error: () => {
        //             this.isLoading = false;
        //             this.router.navigate(['login']);
        //         }
        //     });
        // } else {
        //     this.isLoading = false;
        //     this.router.navigate(['login']);
        // }
    }
}
