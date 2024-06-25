import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPedido } from '../../interfaces/IPedido';
import { Observable } from 'rxjs';
import { IService } from '../../interfaces/IService';

@Injectable({
  providedIn: 'root'
})
export class PedidosService implements IService {
  api: string = 'http://localhost:8080/pedido';

  constructor(private http: HttpClient) { }

  findAll(): Observable<IPedido[]> {
    return this.http.get<IPedido[]>(this.api); 
  }

  findById(id: string): Observable<IPedido> {
    return this.http.get<IPedido>(`${this.api}/${id}`);
  }

  create(pedido: IPedido, caixaId: string): Observable<IPedido> {
    return this.http.post<IPedido>(`${this.api}/cadastrar/${caixaId}`, pedido);
  }

  alter(pedido: IPedido, id: string): Observable<IPedido> {
    return this.http.put<IPedido>(`${this.api}/alterar/${id}`, pedido);
  }

  delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.api}/excluir/${id}`);
  }
}
