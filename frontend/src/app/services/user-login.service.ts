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

  //TODO: usar este handleError futuramente
  private handleError(error: HttpErrorResponse): ObservableInput<any> {
    if (error.status === 0) {
      console.error('Ocorreu um erro:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Algo deu errado, tente novamente mais tarde.')
    );
  }

  getConfig() {
    return this.http
      .get<UserLogin>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  autenticarLogin(userLogin: UserLogin): Observable<UserLogin> {
    return this.http
      .post<UserLogin>(this.apiUrl, userLogin, this.httpOptions)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }
}
