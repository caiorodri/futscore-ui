import { Component, OnInit } from '@angular/core';
import { menu, menuAdmin } from '../../../environments/environments';

@Component({
  selector: 'app-layout-padrao',
  templateUrl: './layout-padrao.component.html',
  styleUrl: './layout-padrao.component.css'
})
export class LayoutPadraoComponent implements OnInit {

  public isAdmin = true;
  public itensMenu: any;
  
  constructor(){

    if(this.isAdmin){

      this.itensMenu = menuAdmin;

    } else {

      this.itensMenu = menu;

    }

  }

  ngOnInit(): void {
    
  }

}
