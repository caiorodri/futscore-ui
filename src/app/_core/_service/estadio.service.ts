import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadioModel } from '../_models/estadio.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class EstadioService {

  private resourceListar: string = "/estadio/estadios";
  private resourceRecuperar: string = "/estadio";
  private resourceSalvar: string = "/estadio/salvar";
  private resourceDeletar: string = "/estadio/deletar";

  constructor(private http: HttpClient) { }

  public listar(): Observable<EstadioModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListar)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public recuperarPorId(id:number): Observable<EstadioModel> {

    return this.http.get<any>(environment.apiUrl + this.resourceRecuperar + "/" + id)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public salvar(estadio: EstadioModel): Observable<EstadioModel> {

    return this.http.post<any>(environment.apiUrl + this.resourceSalvar, estadio)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public deletar(idEstadio: number): Observable<Boolean> {

    return this.http.delete<any>(environment.apiUrl + this.resourceDeletar + "/" + idEstadio)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }
}
