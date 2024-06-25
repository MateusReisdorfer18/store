import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategoria } from '../../interfaces/ICategoria';
import { Observable } from 'rxjs';
import { IService } from '../../interfaces/IService';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService implements IService {
  private URL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  findAll(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(`${this.URL}/categoria`);
  }

  findById(id: string): Observable<ICategoria> {
    return this.http.get<ICategoria>(`${this.URL}/categoria/${id}`);
  }

  create(categoria: ICategoria): Observable<ICategoria> {
  return this.http.post<ICategoria>(`${this.URL}/categoria/cadastrar`, categoria);
  }

  alter(categoria: ICategoria, id: string): Observable<ICategoria> {
    return this.http.put<ICategoria>(`${this.URL}/categoria/alterar/${id}`, categoria);
  }

  delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.URL}/categoria/excluir/${id}`);
  }
}
