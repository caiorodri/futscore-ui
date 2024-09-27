import { Component, OnInit } from '@angular/core';
import { PartidaService } from '../../_core/_service/partida.service';
import { Router } from '@angular/router';
import { PartidaModel } from '../../_core/_models/partida.model';
import { CompeticaoAnoModel } from '../../_core/_models/competicao.ano.model';
import { CompeticaoAnoService } from '../../_core/_service/competicao.ano.service';
import { ConversorData } from '../../_core/_utils/ConversorData';

@Component({
  selector: 'app-partida-container',
  templateUrl: './partida-container.component.html',
  styleUrl: './partida-container.component.css'
})
export class PartidaContainerComponent implements OnInit{

  public competicoesAno: CompeticaoAnoModel[];
  
  public imagemNaoEncontrada: String = "../../../assets/images/bd_images/logo-removebg-preview.png";


  constructor(
    private router: Router,
    private partidaService: PartidaService,
    private competicaoAnoService: CompeticaoAnoService
  ){

    this.competicaoAnoService.listar().subscribe(result => {

      this.competicoesAno = result;
      console.log(result);

    })

  }

  ngOnInit(): void {
    
  }

  public converterHora(data: Date): String{

    return ConversorData.converterHora(data);

  }


}
