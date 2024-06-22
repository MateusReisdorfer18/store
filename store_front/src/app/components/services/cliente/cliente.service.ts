import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente } from '../../interfaces/ICliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiUrl: string = 'http://localhost:8080/cliente'

  constructor(private http: HttpClient) { }

  findAll(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(this.apiUrl);
  }

  findById(id: string): Observable<ICliente> {
    return this.http.get<ICliente>(`${this.apiUrl}/${id}`);
  }

  create(cliente: ICliente): Observable<ICliente> {
    return this.http.post<ICliente>(`${this.apiUrl}/cadastrar`, cliente);
  }

  alter(cliente: ICliente, id: string): Observable<ICliente> {
    return this.http.put<ICliente>(`${this.apiUrl}/alterar/${id}`, cliente);
  }

  delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.apiUrl}/excluir/${id}`);
  }
}
