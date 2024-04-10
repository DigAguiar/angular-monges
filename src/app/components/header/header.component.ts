import { Component, OnInit } from '@angular/core';
import { ListaMongeService } from '../../services/lista-monge.service';
import { Router } from '@angular/router';
import { IMonge } from '../../Types/Monge';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  qtdeMonges! : number;
  listaMonges! : IMonge[];
  
  constructor(
    private listaMongeService: ListaMongeService,
    private router : Router
  ) {
    this.listaMongeService.getTamanhoListaMonges().then(qtde => {
      this.qtdeMonges = qtde;
    })


   }


  atualizarPagina () {
    this.router.navigate(['/']);
  }


}
