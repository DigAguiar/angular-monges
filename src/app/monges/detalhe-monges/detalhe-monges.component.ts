import { Component, OnInit } from '@angular/core';
import { ListaMongeService } from '../../services/lista-monge.service';
import { ActivatedRoute } from '@angular/router';
import { IMonge } from '../../Types/Monge';

@Component({
  selector: 'app-detalhe-monges',
  templateUrl: './detalhe-monges.component.html',
  styleUrl: './detalhe-monges.component.css'
})
export class DetalheMongesComponent {
  id! : number;
  mongeEscolhido! : IMonge;


  constructor (
    private listaMongeService : ListaMongeService,
    private activatedRoute : ActivatedRoute
  ) {

    const mongeId = parseInt(this.activatedRoute.snapshot.params['id']);

    this.listaMongeService.getMongeById(mongeId).then(monge => {
      console.log(monge)
      this.mongeEscolhido = monge;
    });


   }





}
