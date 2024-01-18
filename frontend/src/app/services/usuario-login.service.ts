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
 
  private storage: Storage;
 
  constructor(private http: HttpClient) {
    this.storage = window.localStorage;
  }

  set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }
  
  get(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key));
    }
    return null;
  }

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}usuario/login`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'my-auth-token'
    }),
  };

  autenticarLogin(payload: any): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(this.apiUrl, payload, this.httpOptions);
  }
}
