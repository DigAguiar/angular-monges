import { Component } from '@angular/core';
import { ListaMongeService } from '../services/lista-monge.service';
import { IMonge } from '../Types/Monge';
import { SearchBarService } from '../services/search-bar.service';

@Component({
  selector: 'app-monges',
  templateUrl: './monges.component.html',
  styleUrl: './monges.component.css'
})
export class MongesComponent {

  listaMonges! : IMonge[];
  
  constructor(
    private listService: ListaMongeService,
    private searchBarService : SearchBarService
  ) {
    this.listService.getAllMonges().then((listaMonges : IMonge[]) => {
      this.listaMonges = listaMonges;
       
    });
    
  }
  


  apagarMonge (idMonge : number | string) : void {
    this.listService.apagarMonge(idMonge).subscribe(() => {
      this.listaMonges = this.listaMonges.filter(monge => monge.id !== idMonge);
    });
  }


  filterResults(text: string) {
    this.listaMonges = this.searchBarService.filterResultsService(text);
  }

}
