import { Injectable } from '@angular/core';
import { ListaMongeService } from './lista-monge.service';
import { IMonge } from '../Types/Monge';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  filteredMonges! : IMonge[];
  allMonges! : IMonge[];

  constructor(private listMongeService: ListaMongeService) {
    this.allMonges = listMongeService.getAllMonges();
    this.filteredMonges = this.allMonges;
  }

  filterResultsService(text : string) : IMonge[]{

    if (!text){
      this.filteredMonges = this.allMonges;
      return this.filteredMonges;
    }
  
    return this.filteredMonges = this.allMonges.filter(monge =>
      monge?.nome.toLowerCase().includes(text.toLowerCase())
      )
  }



}


