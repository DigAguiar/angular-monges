import { ILivro } from "./Livro";

export interface IMonge {
    id : number;
    nome : string;
    idade : number;
    livro : ILivro;

}

export const staticListMongesTS : IMonge[] = [
    { id: 1, nome: "Monge 1", idade: 20, livro: {titulo: "Livro 1", autor: "Autor X", anoLancamento: 1899, assuntoLivro: "Historia Brasil"}},
    { id: 2, nome: "Monge 2", idade : 30, livro: {titulo: "Livro 3", autor: "Autor Z", anoLancamento: 1899, assuntoLivro: "Historia Pedro Alvares"} },
    { id: 3, nome: "Monge 3", idade : 40, livro: {titulo: "Livro 9", autor: "Autor C", anoLancamento: 1849, assuntoLivro: "Não categorizado"} },
    { id: 4, nome: "Monge 4", idade : 50, livro: {titulo: "Doença do Seculo 20", autor: "Autor A", anoLancamento: 1902, assuntoLivro: "Doenças da epoca"} },
    { id: 5, nome: "Monge 5", idade : 60, livro: {titulo: "Livro Registros Hotel", autor: "Autor H", anoLancamento: 1900, assuntoLivro: "Registro de hospedes"} },
    { id: 6, nome: "Monge 6", idade : 52, livro: {titulo: "Livro 2", autor: "Autor X", anoLancamento: 1920, assuntoLivro: "Historia Brasil 2.0"} },
    { id: 7, nome: "Monge 7", idade : 23, livro: {titulo: "End of Beginning", autor: "Autor R", anoLancamento: 1821, assuntoLivro: "Livro de romance"} },
    { id: 8, nome: "Monge 8", idade : 47, livro: {titulo: "Filosofos Antigos e Modernos", autor: "Autor F", anoLancamento: 1949, assuntoLivro: "Filosofia e Sociolgia"} },
    { id: 9, nome: "Monge 9", idade : 12, livro: {titulo: "Livro de Receitas", autor: "Desconhecido", anoLancamento: 1979, assuntoLivro: "Receitas exoticas"} },
    { id: 10, nome: "Monge 10", idade : 9, livro: {titulo: "Psicologia", autor: "Autor P", anoLancamento: 1899, assuntoLivro: "Historia Brasil"} },
        
]



