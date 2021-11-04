import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config';
import { retry, tap } from 'rxjs/operators';
import { LoginForm } from '../interfaces/LoginForm';
import { AuthData } from '../interfaces/AuthData';

interface AuthResponse {
  token: ''
}



@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  data: AuthData = {
    email: "",
    token: ""
  }

  logIn(loginForm: LoginForm) {
    return this.http.post<AuthResponse>(config.url + 'login', { email: loginForm.email, password: loginForm.password })
      .pipe(tap(response => this.storeToken(loginForm, response)));
  }

  signUp(loginForm: LoginForm) {
    return this.http.post<AuthResponse>(config.url + 'signup', { email: loginForm.email, password: loginForm.password })
      .pipe(tap(response => this.storeToken(loginForm, response)));
  }

  storeToken(loginForm: LoginForm, response: AuthResponse) {
    this.data.email = loginForm.email;
    this.data.token = response.token;
  }

  getToken(): string {
    return this.data.token;
  }

}