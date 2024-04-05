import { Component, OnInit } from '@angular/core';
import { ListaMongeService } from '../../services/lista-monge.service';
import { ActivatedRoute } from '@angular/router';
import { IMonge } from '../../Types/Monge';

@Component({
  selector: 'app-detalhe-monges',
  templateUrl: './detalhe-monges.component.html',
  styleUrl: './detalhe-monges.component.css'
})
export class DetalheMongesComponent implements OnInit{
  
  id! : number;
  mongeEscolhido! : IMonge;


  constructor (
    private listaMonge : ListaMongeService,
    private activatedRoute : ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.mongeEscolhido = this.listaMonge.getMongeById(this.id);

    
  }




}
