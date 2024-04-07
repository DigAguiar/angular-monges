import { ILivro } from "./Livro";

export interface IMonge {
    id: number;
    nome: string;
    idade: number;
    ocupacao : string
    dataNascimento : Date;
    livros: ILivro[];



}

export const staticListMongesTS: IMonge[] = [
    {
        id: 1, nome: "Diogo Monge", idade: 20, ocupacao: "Estudante", dataNascimento: new Date("2004-2-29") , livros: [
            { titulo: "Livro 1", autor: "Autor X", anoLancamento: 1899, assuntoLivro: "Historia Brasil" },
            { titulo: "Livro 2", autor: "Autor X", anoLancamento: 1920, assuntoLivro: "Historia Brasil 2.0" }
        ]
    },
    // {
    //     id: 2, nome: "Monge 2", idade: 30, livros: [
    //         { titulo: "Livro 3", autor: "Autor Z", anoLancamento: 1899, assuntoLivro: "Historia Pedro Alvares" }
    //     ]
    // },
    // {
    //     id: 3, nome: "Monge 3", idade: 40, livros: [
    //         { titulo: "Livro 9", autor: "Autor C", anoLancamento: 1849, assuntoLivro: "Não categorizado" }
    //     ]
    // },
    // {
    //     id: 4, nome: "Monge 4", idade: 50, livros: [
    //         { titulo: "Doença do Seculo 20", autor: "Autor A", anoLancamento: 1902, assuntoLivro: "Doenças da epoca" }
    //     ]
    // },
    // {
    //     id: 5, nome: "Monge 5", idade: 60, livros: [
    //         { titulo: "Livro Registros Hotel", autor: "Autor H", anoLancamento: 1900, assuntoLivro: "Registro de hospedes" }
    //     ]
    // },
    // {
    //     id: 6, nome: "Monge 6", idade: 52, livros: [
    //         { titulo: "Livro 2", autor: "Autor X", anoLancamento: 1920, assuntoLivro: "Historia Brasil 2.0" }
    //     ]
    // },
    // {
    //     id: 7, nome: "Monge 7", idade: 23, livros: [
    //         { titulo: "End of Beginning", autor: "Autor R", anoLancamento: 1821, assuntoLivro: "Livro de romance" }
    //     ]
    // },
    // {
    //     id: 8, nome: "Monge 8", idade: 47, livros: [
    //         { titulo: "Filosofos Antigos e Modernos", autor: "Autor F", anoLancamento: 1949, assuntoLivro: "Filosofia e Sociolgia" }
    //     ]
    // },
    // {
    //     id: 9, nome: "Monge 9", idade: 12, livros: [
    //         { titulo: "Livro de Receitas", autor: "Desconhecido", anoLancamento: 1979, assuntoLivro: "Receitas exoticas" }
    //     ]
    // },
    // {
    //     id: 10, nome: "Monge 10", idade: 9, livros: [
    //         { titulo: "Psicologia", autor: "Autor P", anoLancamento: 1899, assuntoLivro: "Historia Brasil" }
    //     ]
    // },

]

