import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BehaviorSubject, Observable, ObservableInput, catchError, throwError } from 'rxjs';

import { UsuarioLogin } from '../../interfaces/UsuarioLogin';

import { environment } from 'src/environments/environment';
import { UsuarioEntity } from 'src/app/interfaces/UsuarioEntity';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}usuario`;
  private apiUrlLogin = `${this.apiUrl}/login`;

  private userTokenSubject = new BehaviorSubject<string>('');

  public setUserToken(token: string) {
    this.userTokenSubject.next(token);
  }

  public userTokenChanged():Observable<string> {
    return this.userTokenSubject.asObservable();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.userTokenSubject.value}`,
    }),
  };

  autenticarLogin(payload: any): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(this.apiUrlLogin, payload, this.httpOptions);
  }

  atualizarUsuario(payload: any): Observable<UsuarioEntity> {
    return this.http.put<UsuarioEntity>(this.apiUrl, payload, this.httpOptions);
  }

  obterUsuario(id: number): Observable<UsuarioEntity> {
    return this.http.get<UsuarioEntity>(`${this.apiUrl}/${id}`, { 
      headers: { 
        Authorization: 
          this.userTokenSubject.value
      },
    });
  }
}
