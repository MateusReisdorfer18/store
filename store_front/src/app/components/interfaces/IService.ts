import { Component } from "@angular/core";
import { Observable } from "rxjs";

export interface IService {
    findAll(): Observable<any[]>;
    findById(id: string): Observable<{}>;
    create(object: {}, caixaId?: string): Observable<{}>;
    alter(object: {}, id: string): Observable<{}>;
    delete(id: string): Observable<Boolean>;
}