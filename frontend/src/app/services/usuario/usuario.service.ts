import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUsuarioLogin } from '../../interfaces/IUsuarioLogin';
import { environment } from 'src/environments/environment';
import { IUsuarioEntity } from 'src/app/interfaces/IUsuarioEntity';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}usuario`;
  private apiUrlLogin = `${this.apiUrl}/login`;

  private userTokenSubject = new BehaviorSubject<string>('');

  public setUserToken(token: string) {
    this.userTokenSubject.next(token);
  }

  public userTokenChanged(): Observable<string> {
    return this.userTokenSubject.asObservable();
  }

  autenticarLogin(payload: any): Observable<IUsuarioLogin> {
    return this.http.post<IUsuarioLogin>(this.apiUrlLogin, payload);
  }

  atualizarProprioPerfil(payload: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/perfil`, payload, { 
      headers: { 
        'Content-Type': 'application/json',
        Authorization: 
          this.userTokenSubject.value
      },
    });
  }

  obterUsuarioPorId(id: number): Observable<IUsuarioEntity> {
    return this.http.get<IUsuarioEntity>(`${this.apiUrl}/${id}`, { 
      headers: { 
        Authorization: 
          this.userTokenSubject.value
      },
    });
  }
}
