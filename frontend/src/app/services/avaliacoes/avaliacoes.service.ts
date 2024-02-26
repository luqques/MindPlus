import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEstatisticasDTO} from 'src/app/interfaces/IEstatisticasDTO';

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

  public obterEstatisticas(): Observable<IEstatisticasDTO> {
    return this.http.get<IEstatisticasDTO>(`${this.apiUrl}/estatisticas`, {
      headers: {
        Authorization: 
          this.userTokenSubject.value
      }
    });
  }

  public obterMetas(): Observable<Object> {
    return this.http.get<Object>(`${this.apiUrl}/metas`, {
      headers: {
        Authorization: 
          this.userTokenSubject.value
      }
    });
  }
}
