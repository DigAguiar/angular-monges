import { ILivro } from "./Livro";

export interface IMonge {
    id: number | undefined;
    nome: string;
    idade: number | undefined;
    ocupacao : string
    dataNascimento : Date;
    livros: ILivro[];
    
}

