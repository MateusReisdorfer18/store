import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICaixa } from '../../interfaces/ICaixa';

@Injectable({
  providedIn: 'root'
})
export class CaixaService {
  api: string = 'http://localhost:8080/caixa'
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<ICaixa[]> {
    return this.http.get<ICaixa[]>(this.api);
  }

  getById(id: string): Observable<ICaixa> {
    return this.http.get<ICaixa>(`${this.api}/${id}`);
  }

  create(): Observable<ICaixa> {
    return this.http.post<ICaixa>(`${this.api}/cadastrar`, {});
  }

  alter(caixa: ICaixa, id: string): Observable<ICaixa> {
    return this.http.put<ICaixa>(`${this.api}/alter/${id}`, caixa);
  }

  openCaixa(id: string): Observable<Boolean> {
    return this.http.patch<Boolean>(`${this.api}/abrir-caixa/${id}`, {});
  }

  closeCaixa(id: string): Observable<Boolean> {
    return this.http.patch<Boolean>(`${this.api}/fechar-caixa/${id}`, {});
  }

  delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.api}/excluir/${id}`);
  }
}
