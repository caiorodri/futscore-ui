import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JogadorModel } from '../_models/jogador.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environments';
import { PosicaoModel } from '../_models/posicao.model';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  private resourceListar: string = "/jogador/jogadores";
  private resourceListarPosicoes: string = "/jogador/posicoes";
  private resourceRecuperar: string = "/jogador/";
  private resourceSalvar: string = "/jogador/salvar";
  private resourceDeletar: string = "/jogador/deletar";

  constructor(private http: HttpClient) { }

  public listar(): Observable<JogadorModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListar)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public listarPosicoes(): Observable<PosicaoModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListarPosicoes)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public recuperarPorId(id:number): Observable<JogadorModel> {

    return this.http.get<any>(environment.apiUrl + this.resourceRecuperar + id)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public salvar(jogador: JogadorModel): Observable<JogadorModel> {

    return this.http.post<any>(environment.apiUrl + this.resourceSalvar, jogador)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public deletar(idJogador: number): Observable<Boolean> {

    return this.http.delete<any>(environment.apiUrl + this.resourceDeletar + "/" + idJogador)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }
}
