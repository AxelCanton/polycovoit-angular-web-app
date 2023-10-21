import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { USER_FETCH_URL } from 'src/api_routes';
import { ApiClientService } from 'src/services/api-client.service';
import { AuthService } from 'src/services/auth.service';
import { AuthentifiedUser } from 'src/services/auth.types';
import { UserFetchResponse } from '../type';
import { AddressFormComponent } from '../address-form/address-form/address-form.component';
import { DividerComponent } from 'src/components/divider/divider.component';

@Component({
  standalone: true,
  selector: 'app-parameters-page',
  templateUrl: './parameters-page.component.html',
  styleUrls: ['./parameters-page.component.sass'],
  imports: [AddressFormComponent, DividerComponent]
})
export class ParametersPageComponent {
  authUser: BehaviorSubject<AuthentifiedUser | null> | null = null;
  isLoading = true;
  userData: UserFetchResponse | null = null;

  constructor(private apiClient: ApiClientService, private authService: AuthService) {}

  ngOnInit() {
    this.authUser = this.authService.getObservableUser();
    this.authUser.subscribe((user) => {
      if (user) {
        this.apiClient.get<UserFetchResponse>(USER_FETCH_URL(user.id)).subscribe((response) => {
          this.userData = response;
          this.isLoading = false;
        });
      }
    });
  }

  ngOnDestroy() {
    this.authUser?.unsubscribe();
  }
}
