import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ClubeModel } from '../_models/clube.model';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ClubeService {

  private resourceListar: string = "/clube/clubes";
  private resourceListarPorPais: string = "/clube/clubes/pais/";
  private resourceListarPorContinente: string = "/clube/clubes/continente/";
  private resourceRecuperar: string = "/clube";
  private resourceSalvar: string = "/clube/salvar";
  private resourceDeletar: string = "/clube/deletar";

  constructor(private http: HttpClient) { }

  public listar(): Observable<ClubeModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListar)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public listarClubesPorPais(idPais: number): Observable<ClubeModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListarPorPais + idPais)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public listarClubesPorContinente(idContinente: number): Observable<ClubeModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListarPorContinente + idContinente)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public recuperarPorId(id:number): Observable<ClubeModel> {

    return this.http.get<any>(environment.apiUrl + this.resourceRecuperar + "/" + id)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public salvar(clube: ClubeModel): Observable<ClubeModel> {

    return this.http.post<any>(environment.apiUrl + this.resourceSalvar, clube)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public deletar(idClube: number): Observable<Boolean> {

    return this.http.delete<any>(environment.apiUrl + this.resourceDeletar + "/" + idClube)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }


}
