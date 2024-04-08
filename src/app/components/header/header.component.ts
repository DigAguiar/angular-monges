import { Component } from '@angular/core';
import { ListaMongeService } from '../../services/lista-monge.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private listaMongeService: ListaMongeService,
    private router : Router
  ) { }

  qtdeMonges!: number;


  ngOnInit() {
    this.qtdeMonges = this.listaMongeService.getTamanhoListaMonges();
  }

  atualizarPagina () {
    this.router.navigate(['/']);
  }


}
