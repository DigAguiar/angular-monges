import { Injectable } from '@angular/core';
import { IMonge } from '../Types/Monge';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListaMongeService {
    url: string = 'http://localhost:3000/monges';
    listaMonges!: IMonge[];
    qtde: number = 0;

    constructor(
        private http : HttpClient
    ) { }

    async getAllMonges(): Promise<IMonge[]> {
        const data = await fetch(this.url);

        return await data.json() ?? {};
    }

    async getMongeById(mongeId: number): Promise<IMonge> {
        const data = await fetch(`${this.url}/${mongeId}`);
        return await data.json() ?? {};
    }


    async getTamanhoListaMonges(): Promise<number> {
        const listaMonges = await this.getAllMonges();
        this.listaMonges = listaMonges;
        this.qtde = this.listaMonges.length;
        return this.qtde;

        
    }

    addNewMonge(novoMonge: IMonge): void {
        this.http.post(this.url,novoMonge).subscribe(data => {
            console.log("Monge adicionado com sucesso!");
        });

    }

    apagarMonge(id: number | string): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
      }



}
