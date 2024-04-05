import { Injectable } from '@angular/core';
import { IMonge, staticListMongesTS } from '../Types/Monge';

@Injectable({
  providedIn: 'root'
})
export class ListaMongeService {
  listaMonges : IMonge[] = staticListMongesTS;

  constructor() { }

  getAllMonges () : IMonge[] {
    return this.listaMonges;
  }

  getTamanhoListaMonges () : number {
    return this.listaMonges.length;
  }

  getMongeById (mongeId : number) : IMonge {
    return this.listaMonges.find(monge => monge.id === mongeId)!;

  }


  addNewMonge (novoMonge : IMonge) : void {
    this.listaMonges.push(novoMonge);

  }

  deleteMongeById (idMongeDeletar : number) : void {
    
  }






}
