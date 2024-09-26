import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompeticaoModel } from '../_models/competicao.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environments';
import { CompeticaoFormatoModel } from '../_models/competicao.formato.model';
import { CompeticaoAnoModel } from '../_models/competicao.ano.model';

@Injectable({
  providedIn: 'root'
})
export class CompeticaoAnoService {

  private resourceListar: string = "/competicao/ano/competicoes";
  private resourceListarCompeticoesDia: string = "/competicao/ano/competicoes/dia";
  private resourceRecuperar: string = "/competicao/ano";
  private resourceSalvar: string = "/competicao/ano/salvar";
  private resourceDeletar: string = "/competicao/ano/deletar";
  private resourceListarFormatos: string = "/competicao/ano/formato/formatos";
  private resourceRecuperarFormato: string = "/competicao/ano/formato";

  constructor(private http: HttpClient) { }

  public listar(): Observable<CompeticaoAnoModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListar)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }
  
  public listarPorCompeticao(idCompeticao: number): Observable<CompeticaoAnoModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListar + "/" + idCompeticao)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )
  }

  public listarCompeticoesDia(): Observable<CompeticaoAnoModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListarCompeticoesDia)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public recuperarPorId(id:number): Observable<CompeticaoAnoModel> {

    return this.http.get<any>(environment.apiUrl + this.resourceRecuperar + "/" + id)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public salvar(competicao: CompeticaoAnoModel): Observable<CompeticaoAnoModel> {

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

  public listarFormatos(): Observable<CompeticaoFormatoModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListarFormatos)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public recuperarFormatoPorId(id:number): Observable<CompeticaoFormatoModel> {

    return this.http.get<any>(environment.apiUrl + this.resourceRecuperarFormato + "/" + id)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

}
