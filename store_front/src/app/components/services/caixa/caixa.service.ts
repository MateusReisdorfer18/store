import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICaixa } from '../../interfaces/ICaixa';
import { IService } from '../../interfaces/IService';

@Injectable({
  providedIn: 'root'
})
export class CaixaService implements IService {
  api: string = 'http://localhost:8080/caixa'
  
  constructor(private http: HttpClient) { }

  findAll(): Observable<ICaixa[]> {
    return this.http.get<ICaixa[]>(this.api);
  }

  findById(id: string): Observable<ICaixa> {
    return this.http.get<ICaixa>(`${this.api}/${id}`);
  }

  create(): Observable<ICaixa> {
    return this.http.post<ICaixa>(`${this.api}/cadastrar`, {});
  }

  alter(caixa: ICaixa, id: string): Observable<ICaixa> {
    return this.http.put<ICaixa>(`${this.api}/alter/${id}`, caixa);
  }

  openCaixa(id: string): Observable<ICaixa> {
    return this.http.patch<ICaixa>(`${this.api}/abrir-caixa/${id}`, {});
  }

  closeCaixa(id: string): Observable<ICaixa> {
    return this.http.patch<ICaixa>(`${this.api}/fechar-caixa/${id}`, {});
  }

  delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.api}/excluir/${id}`);
  }
}
