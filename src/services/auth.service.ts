import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { ApiClientService } from './api-client.service';
import { HttpErrorResponse } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { AuthResponse, AuthentifiedUser, DecodedToken, LoginParams } from './auth.types';
import { LOGIN_URL, REFRESH_URL } from 'src/api_routes';

const REFRESH_TOKEN_STORAGE_KEY = 'authUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  observableAuthUser = new BehaviorSubject<AuthentifiedUser | null>(null);

  constructor(
    private apiClient: ApiClientService
  ) {}

  private setLocalRefreshToken(token: string) {
    localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, token);
  }

  private getUserObjectFromResponse(response: AuthResponse): AuthentifiedUser {
    const decodedToken: DecodedToken = jwtDecode(response.accessToken);
    return {
      ...response,
      email: decodedToken.email,
      id: decodedToken.sub
    }
  }

  getObservableUser() {
    return this.observableAuthUser;
  }

  refreshToken(token: string) {
    const observable = this.apiClient.post<AuthResponse>(REFRESH_URL, {
      refreshToken: token
    }).pipe(shareReplay());
    observable.subscribe((response) => {
      this.observableAuthUser.next(this.getUserObjectFromResponse(response));
      this.setLocalRefreshToken(response.refreshToken);
    });
    return observable;
  }

  login({
    email,
    password,
    onError,
    onSuccess
  }: LoginParams) {
    return this.apiClient.post<AuthResponse>(LOGIN_URL, {
      email,
      password
    }).subscribe({
      next: (response) => {
        this.observableAuthUser.next(this.getUserObjectFromResponse(response));
        this.setLocalRefreshToken(response.refreshToken);
        onSuccess && onSuccess(this.getUserObjectFromResponse(response));
      },
      error: (error: HttpErrorResponse) => onError && onError(error)
    })
  }

  logout() {
    this.observableAuthUser.next(null);
    localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
  }

  loginFromLocal(): Observable<AuthResponse> | null {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);
    return refreshToken
      ? this.refreshToken(refreshToken)
      : null;
  }
}
