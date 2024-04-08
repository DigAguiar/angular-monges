import { Component, Input, OnInit } from '@angular/core';
import { ListaMongeService } from '../services/lista-monge.service';
import { IMonge } from '../Types/Monge';
import { SearchBarService } from '../services/search-bar.service';

@Component({
  selector: 'app-monges',
  templateUrl: './monges.component.html',
  styleUrl: './monges.component.css'
})
export class MongesComponent implements OnInit{

  listaMonges : IMonge[] = [];
  
  constructor(
    private listService: ListaMongeService,
    private searchBarSerice : SearchBarService
  ) { }

  ngOnInit(): void {
    this.listaMonges = this.listService.getAllMonges();
  }

  apagarMonge (idMonge : number) : void {
    alert("ID do monge: " + idMonge + ", metodo de apagar ainda não existe")
  }


  filterResults(text: string) {
    this.listaMonges = this.searchBarSerice.filterResultsService(text);
  }

}
