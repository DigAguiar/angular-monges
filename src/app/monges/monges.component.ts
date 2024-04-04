import { Component, OnInit } from '@angular/core';
import { ListaMongeService } from '../services/lista-monge.service';
import { IMonge } from '../Types/Monge';

@Component({
  selector: 'app-monges',
  templateUrl: './monges.component.html',
  styleUrl: './monges.component.css'
})
export class MongesComponent implements OnInit{

  listaMonges! : IMonge[];
  constructor(
    private listService: ListaMongeService
  ) { }

  ngOnInit(): void {
    this.listaMonges = this.listService.getAllMonges();
  }




}
