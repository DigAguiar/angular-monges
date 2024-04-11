import { Component, OnInit } from '@angular/core';
import { ListaMongeService } from '../services/lista-monge.service';
import { IMonge } from '../Types/Monge';
import { SearchBarService } from '../services/search-bar.service';

@Component({
  selector: 'app-monges',
  templateUrl: './monges.component.html',
  styleUrl: './monges.component.css'
})
export class MongesComponent implements OnInit{

  listaMonges! : IMonge[];
  
  constructor(
    private listService: ListaMongeService,
    private searchBarService : SearchBarService
  ) {
    this.listService.getAllMonges().then((listaMonges : IMonge[]) => {
      this.listaMonges = listaMonges;
       
    });
    
  }
  
  ngOnInit(): void {
    console.log("init");
  }

  apagarMonge (idMonge : number | string) : void {
    alert("ID do monge: " + idMonge + ", metodo de apagar ainda não existe")
  }


  filterResults(text: string) {
    this.listaMonges = this.searchBarService.filterResultsService(text);
  }

}
