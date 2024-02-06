import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEmpresaEntity } from 'src/app/interfaces/IEmpresaEntity';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  constructor(private http: HttpClient) {}

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}empresa`;
  
  private userTokenSubject = new BehaviorSubject<string>('');

  public setUserToken(token: string) {
    this.userTokenSubject.next(token);
  }

  public userTokenChanged():Observable<string> {
    return this.userTokenSubject.asObservable();
  }

  obterEmpresaPorId(id: number): Observable<IEmpresaEntity> {
    return this.http.get<IEmpresaEntity>(`${this.apiUrl}/${id}`, {
      headers: {
        Authorization: 
          this.userTokenSubject.value
      }
    });
  }
}
