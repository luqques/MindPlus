import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, } from '@angular/common/http';
import { Observable, ObservableInput, catchError, throwError } from 'rxjs';

import { UsuarioLogin } from '../../interfaces/UsuarioLogin';

import { environment } from 'src/environments/environment';
import { UsuarioEntity } from 'src/app/interfaces/UsuarioEntity';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}usuario`;
  private apiUrlLogin = `${this.apiUrl}/login`

  token: string = this.localStorageService.get('bearerToken');

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    }),
  };

  autenticarLogin(payload: any): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(this.apiUrlLogin, payload, this.httpOptions);
  }

  atualizarUsuario(payload: any): Observable<UsuarioEntity> {
    return this.http.put<UsuarioEntity>(this.apiUrl, payload, this.httpOptions);
  }
}