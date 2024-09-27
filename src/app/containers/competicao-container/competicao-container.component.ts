import { Component, OnInit } from '@angular/core';
import { CompeticaoModel } from '../../_core/_models/competicao.model';
import { CompeticaoService } from '../../_core/_service/competicao.service';
import { ContinenteService } from '../../_core/_service/continente.service';
import { ContinenteModel } from '../../_core/_models/continente.model';
import { PaisModel } from '../../_core/_models/pais.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campeonato-container',
  templateUrl: './competicao-container.component.html',
  styleUrl: './competicao-container.component.css'
})
export class CompeticaoContainerComponent implements OnInit{

  public competicoes: CompeticaoModel[];
  public continentes: ContinenteModel[];
  public continenteSelecionado: ContinenteModel;
  public paisSelecionado: PaisModel;

  constructor(
    private competicaoService: CompeticaoService,
    private continenteService: ContinenteService,
    private router: Router
  ){
   
    this.competicaoService.listar().subscribe(result => {

      this.competicoes = result;

    });

    this.continenteService.listar().subscribe(result => {

      this.continentes = result;

    })

    this.continenteSelecionado = new ContinenteModel();
    this.paisSelecionado = new PaisModel();

  }

  ngOnInit(): void {
    
  }

  public alterarContinenteSelecionado(continente: ContinenteModel): void{

    if(continente.id == this.continenteSelecionado.id){
    
      this.continenteSelecionado = new ContinenteModel();
    
    } else {

      this.continenteSelecionado = continente;
    
    }

  }

  public alterarPaisSelecionado(pais: PaisModel): void{

    if(pais.id == this.paisSelecionado.id){
    
      this.paisSelecionado = new PaisModel();
    
    } else {

      this.paisSelecionado = pais;
    
    }

  }

  public redirecionarCompeticao(idCompeticao: Number){

    this.router.navigate(['competicao', idCompeticao]);

  }

}
