import { Component } from '@angular/core';
import { IMonge } from '../../Types/Monge';
import { ListaMongeService } from '../../services/lista-monge.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {


  filteredMonges : IMonge[];
  allMonges! : IMonge[];

  constructor(private listMongeService: ListaMongeService) {
    this.allMonges = listMongeService.getAllMonges();
    this.filteredMonges = this.allMonges;
  }

  filterResults(text: string) : IMonge[]{
    if (!text){
      this.filteredMonges = this.allMonges;
      return this.filteredMonges;
    }

    return this.filteredMonges = this.allMonges.filter(monge => {
      monge?.nome.toLowerCase().includes(text.toLowerCase());
    });



  }


}
