import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto } from '../../interfaces/IProduto';
import { Observable } from 'rxjs';
import { ambients } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private URL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  findAll(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(`${this.URL}/produto`);
  }

  findById(id: String): Observable<IProduto> {
    return this.http.get<IProduto>(`${this.URL}/produto/${id}`);
  }

  create(produto: IProduto): Observable<IProduto> {
    return this.http.post<IProduto>(`${this.URL}/produto/cadastrar`, produto);
  }

  alter(produto: IProduto, id: String): Observable<IProduto> {
    return this.http.post<IProduto>(`${this.URL}/produto/alterar/${id}`, produto);
  }

  delete(id: String): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.URL}/produto/excluir/${id}`);
  }
}
