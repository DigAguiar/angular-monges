import { Component } from '@angular/core';
import { ListaMongeService } from '../../services/lista-monge.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private listaMongeService: ListaMongeService
  ) { }

  qtdeMonges!: number;


  ngOnInit() {
    this.qtdeMonges = this.listaMongeService.getTamanhoListaMonges();
  }


}
