import { ILivro } from "./Livro";

export interface IMonge {
    id: number | string;
    nome: string;
    idade: number | undefined;
    ocupacao : string
    dataNascimento : Date;
    livros: ILivro[];
    
}

