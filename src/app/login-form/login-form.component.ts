import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl } from '@angular/forms';
import { LoginForm } from '../interfaces/LoginForm';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
  loginForm: LoginForm = { email: '', password: '' };
  createAccount: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  logIn() {
    this.auth.logIn(this.loginForm).subscribe();
  }

  signUp() {
    this.auth.signUp(this.loginForm).subscribe();
  }

  onAction() {
    this.createAccount ? this.signUp() : this.logIn();
  }

}
