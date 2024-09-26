import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ArbitroModel } from '../_models/arbitro.model';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ArbitroService {

  private resourceListar: string = "/arbitro/arbitros";
  private resourceRecuperar: string = "/arbitro";
  private resourceSalvar: string = "/arbitro/salvar";
  private resourceDeletar: string = "/arbitro/deletar";

  constructor(private http: HttpClient) { }

  public listar(): Observable<ArbitroModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListar)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public recuperarPorId(id:number): Observable<ArbitroModel> {

    return this.http.get<any>(environment.apiUrl + this.resourceRecuperar + "/" + id)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public salvar(arbitro: ArbitroModel): Observable<ArbitroModel> {

    return this.http.post<any>(environment.apiUrl + this.resourceSalvar, arbitro)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public deletar(idArbitro: number): Observable<Boolean> {

    return this.http.delete<any>(environment.apiUrl + this.resourceDeletar + "/" + idArbitro)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

}
