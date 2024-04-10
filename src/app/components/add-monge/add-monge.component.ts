import { Component } from '@angular/core';
import { IMonge } from '../../Types/Monge';
import { ListaMongeService } from '../../services/lista-monge.service';

@Component({
  selector: 'app-add-monge',
  templateUrl: './add-monge.component.html',
  styleUrl: './add-monge.component.css'
})
export class AddMongeComponent {
  verificador : boolean = false;
  
  constructor(
    private listaService: ListaMongeService
  ) { }

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
      this.atribuirID();

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

  async atribuirID () {
    this.mongeAdicionado.id = await this.listaService.getTamanhoListaMonges();
  }




}
