import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, ObservableInput, catchError, throwError } from 'rxjs';

import { UsuarioLogin } from '../interfaces/UsuarioLogin';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioLoginService {
  constructor(private http: HttpClient) {}

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}usuario/login`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };

  autenticarLogin(payload: any): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(this.apiUrl, payload, this.httpOptions);
  }
}
