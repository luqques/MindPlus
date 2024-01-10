import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, ObservableInput, catchError, throwError } from 'rxjs';

import { UserLogin } from '../interfaces/UserLogin';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  constructor(private http: HttpClient) {}

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}user/login`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };

  autenticarLogin(payload: any): Observable<UserLogin> {
    return this.http.post<UserLogin>(this.apiUrl, payload, this.httpOptions);
  }
}
