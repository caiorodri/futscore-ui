import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArtilhariaModel } from '../_models/artilharia.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ArtilhariaService {


  private resourceListar: string = "/artilharia/artilharias";
  private resourceRecuperar: string = "/artilharia";
  private resourceSalvar: string = "/artilharia/salvar";
  private resourceDeletar: string = "/artilharia/deletar";

  constructor(private http: HttpClient) { }

  public listar(): Observable<ArtilhariaModel[]> {

    return this.http.get<any>(environment.apiUrl + this.resourceListar)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public recuperarPorId(id:number): Observable<ArtilhariaModel> {

    return this.http.get<any>(environment.apiUrl + this.resourceRecuperar + "/" + id)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public salvar(artilharia: ArtilhariaModel): Observable<ArtilhariaModel> {

    return this.http.post<any>(environment.apiUrl + this.resourceSalvar, artilharia)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

  public deletar(idArtilharia: number): Observable<Boolean> {

    return this.http.delete<any>(environment.apiUrl + this.resourceDeletar + "/" + idArtilharia)
      .pipe(
        map(result => result),
        catchError(err => {
          console.log("err", err);
          return throwError(err);
        })
      )

  }

}
