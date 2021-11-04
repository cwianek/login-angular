import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Outfit } from '../interfaces/Outfit';
import { config } from '../../config';
import { AuthService } from './auth.service';

@Injectable()
export class OutfitsService {
  constructor(private http: HttpClient, auth: AuthService) { }

  fetchOutfits() {
    return this.http.post(config.url + 'outfits-by-weather', {});
  }

}