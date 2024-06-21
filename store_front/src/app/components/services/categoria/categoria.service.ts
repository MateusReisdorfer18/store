import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategoria } from '../../interfaces/ICategoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private URL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(`${this.URL}/categoria`);
  }

  getById(id: string): Observable<ICategoria> {
    return this.http.get<ICategoria>(`${this.URL}/categoria/${id}`);
  }

  create(categoria: ICategoria): Observable<ICategoria> {
  return this.http.post<ICategoria>(`${this.URL}/categoria/cadastrar`, categoria);
  }

  update(categoria: ICategoria, id: string): Observable<ICategoria> {
    return this.http.put<ICategoria>(`${this.URL}/categoria/alterar/${id}`, categoria);
  }

  delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.URL}/categoria/excluir/${id}`);
  }
}
