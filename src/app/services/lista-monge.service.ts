import { Injectable } from '@angular/core';
import { IMonge, listaMongesInterface } from '../Types/Monge';

@Injectable({
    providedIn: 'root'
})
export class ListaMongeService {
    listaMonges: IMonge[] = listaMongesInterface;

    constructor() { }

    getAllMonges(): IMonge[] {
        console.log(this.listaMonges);
        return this.listaMonges;
    }

    getTamanhoListaMonges(): number {
        return this.listaMonges.length;
    }

    getMongeById(mongeId: number): IMonge {
        return this.listaMonges.find(monge => monge.id === mongeId)!;

    }


    addNewMonge(novoMonge: IMonge): void {
        console.log(novoMonge);

        this.listaMonges.push(novoMonge);

    }

    deleteMongeById(idMongeDeletar: number): void {

    }






}
