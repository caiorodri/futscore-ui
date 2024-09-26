import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompeticaoModel } from '../_models/competicao.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environments';
import { CompeticaoTipoModel } from '../_models/competicao.tipo.model';

@Injectable({
  providedIn: 'root'
})
export class CompeticaoService {

  private resourceListar: string = "/competicao/competicoes";
  private resourceRecuperar: string = "/competicao";
  private resourceSalvar: string = "/competicao/salvar";
  private resourceDeletar: string = "/competicao/deletar";
  private resourceListarTipos: string = "/competicao/tipo/tipos";
  private resourceRecuperarTipo: string = "/competicao/tipo";

  constructor(private http: HttpClient) { }

  public listar(): Observable<CompeticaoModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListar)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }


  public recuperarPorId(id:number): Observable<CompeticaoModel> {

    return this.http.get<any>(environment.apiUrl + this.resourceRecuperar + "/" + id)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public salvar(competicao: CompeticaoModel): Observable<CompeticaoModel> {

    return this.http.post<any>(environment.apiUrl + this.resourceSalvar, competicao)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public deletar(idCompeticao: number): Observable<Boolean> {

    return this.http.delete<any>(environment.apiUrl + this.resourceDeletar + "/" + idCompeticao)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )
  }

  public listarTipos(): Observable<CompeticaoTipoModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListarTipos)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public recuperarTipoPorId(id:number): Observable<CompeticaoTipoModel> {

    return this.http.get<any>(environment.apiUrl + this.resourceRecuperarTipo + "/" + id)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }
}
