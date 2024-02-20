import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAvaliacaoEntity } from 'src/app/interfaces/IAvaliacaoEntity';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {
  constructor(private http: HttpClient) {}

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}avaliacoes`;
  
  private userTokenSubject = new BehaviorSubject<string>('');

  public setUserToken(token: string) {
    this.userTokenSubject.next(token);
  }

  public userTokenChanged():Observable<string> {
    return this.userTokenSubject.asObservable();
  }

  public obterEstatisticas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/estatisticas`, {
      headers: {
        Authorization: 
          this.userTokenSubject.value
      }
    });
  }

  public obterMetas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/metas`, {
      headers: {
        Authorization: 
          this.userTokenSubject.value
      }
    });
  }
}