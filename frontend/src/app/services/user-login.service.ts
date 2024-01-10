import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { UserLogin } from '../interfaces/UserLogin';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}user/login`;

  constructor(private http: HttpClient) {}

  autenticarLogin(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(this.apiUrl, userLogin);
  }
}
