import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CampeonatoModel } from '../_models/campeonato.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environments';
import { ClubeModel } from '../_models/clube.model';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  private resourceListar: string = "/campeonato/campeonatos";
  private resourceListarClubesPorCompeticaoAno: string = "/campeonato/competicao/ano/clubes/";
  private resourceRecuperar: string = "/campeonato";
  private resourceSalvar: string = "/campeonato/salvar";
  private resourceDeletar: string = "/campeonato/deletar";

  constructor(private http: HttpClient) { }

  public listar(): Observable<CampeonatoModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListar)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public listarClubesPorCompeticaoAno(idCompeticaoAno: Number): Observable<ClubeModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListarClubesPorCompeticaoAno + idCompeticaoAno)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public recuperarPorId(id:number): Observable<CampeonatoModel> {

    return this.http.get<any>(environment.apiUrl + this.resourceRecuperar + "/" + id)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public salvar(campeonato: CampeonatoModel): Observable<CampeonatoModel> {

    return this.http.post<any>(environment.apiUrl + this.resourceSalvar, campeonato)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public deletar(idCampeonato: number): Observable<Boolean> {

    return this.http.delete<any>(environment.apiUrl + this.resourceDeletar + "/" + idCampeonato)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }
}
