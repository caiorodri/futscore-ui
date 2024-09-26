import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PartidaModel } from '../_models/partida.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  private resourceListar: string = "/partida/partidas";
  private resourceRecuperar: string = "/partida";
  private resourceSalvar: string = "/partida/salvar";
  private resourceDeletar: string = "/partida/deletar";

  constructor(private http: HttpClient) { }

  public listar(): Observable<PartidaModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListar)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public recuperarPorId(id:number): Observable<PartidaModel> {

    return this.http.get<any>(environment.apiUrl + this.resourceRecuperar + "/" + id)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public salvar(partida: PartidaModel): Observable<PartidaModel> {

    return this.http.post<any>(environment.apiUrl + this.resourceSalvar, partida)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public deletar(idPartida: number): Observable<Boolean> {

    return this.http.delete<any>(environment.apiUrl + this.resourceDeletar + "/" + idPartida)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }
}
