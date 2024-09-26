import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContinenteModel } from '../_models/continente.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environments';
import { PaisModel } from '../_models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class ContinenteService {

  private resourceListar: string = "/continente/continentes";
  private resourceRecuperar: string = "/continente";
  private resourceListarPaises: string = "/continente/pais/paises";
  private resourceRecuperarPais: string = "/continente/pais";

  constructor(private http: HttpClient) { }

  public listar(): Observable<ContinenteModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListar)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public recuperarPorId(id:number): Observable<ContinenteModel> {

    return this.http.get<any>(environment.apiUrl + this.resourceRecuperar + "/" + id)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }
  public listarPaises(): Observable<PaisModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListarPaises)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }
  public listarPaisesPorContinente(idContinente: Number): Observable<PaisModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListarPaises + "/" + idContinente)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public recuperarPaisPorId(id:number): Observable<PaisModel> {

    return this.http.get<any>(environment.apiUrl + this.resourceRecuperarPais + "/" + id)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }
}
