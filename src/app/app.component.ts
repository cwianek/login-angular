import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AuthData } from './interfaces/AuthData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  loginData: AuthData = {
    email: '',
    token: ''
  };

  constructor(private auth: AuthService) {
    this.loginData = auth.data
  }


}
