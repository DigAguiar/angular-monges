import { Component } from '@angular/core';
import { IMonge } from '../../Types/Monge';
import { ListaMongeService } from '../../services/lista-monge.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-add-monge',
  templateUrl: './add-monge.component.html',
  styleUrl: './add-monge.component.css'
})
export class AddMongeComponent {
  verificador : boolean = false;
  idTemp! : number;
  allMonges! : IMonge[];


  constructor(
    private listaService: ListaMongeService
  ) {
    this.pegarListaMonges();
   }

  mongeAdicionado: IMonge = {
    id: 0,
    nome: "",
    idade: undefined,
    ocupacao: "",
    dataNascimento: new Date("0000-00-00"),
    livros: []

  };


  adicionarMonge() : void {
    if(this.verificarPreencherMonge()) {
      this.listaService.addNewMonge(this.mongeAdicionado);
      this.limparFormulario();
      
    }else {
      alert("Informações no formulario estão faltando!");
    }
  
  }
  
  verificarPreencherMonge () : boolean {
    if (this.mongeAdicionado.nome != null && this.mongeAdicionado.idade != 0 && this.mongeAdicionado.ocupacao != "" && this.mongeAdicionado.dataNascimento != null) {
      this.mongeAdicionado.nome = this.mongeAdicionado.nome.toUpperCase();
      this.mongeAdicionado.ocupacao = this.mongeAdicionado.ocupacao.toUpperCase();
      console .log("length: "+this.allMonges.length);
      this.mongeAdicionado.id = String(this.allMonges.length + 1);

      // this.mongeAdicionado.id = this.listaService.getTamanhoListaMonges();
      this.verificador = true;
      return this.verificador;

    } else {
      return this.verificador;
    }

  }
  
  
  
  limparFormulario() : void {
    this.mongeAdicionado = {
      id: 0,
      nome: "",
      idade: undefined,
      ocupacao: "",
      dataNascimento: new Date("0000-00-00"),
      livros: []

    };
  }

   atribuirID () : number {
     this.listaService.getTamanhoListaMonges().then(data => {
      this.idTemp = data;
      console.log("dentro do then "+this.idTemp);
      return this.idTemp;
    });

    console.log("dps do async "+this.idTemp);
    return this.idTemp;


  }

  pegarListaMonges () {
    this.listaService.getAllMonges().then(data => {
      console.log(data);
      this.allMonges = data;
      return;
    });
  }


}
