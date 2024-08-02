import { Filme } from "../main";

export const ordenarFilmeDuracao = (array: Filme[]) => {
    array.sort((a: Filme, b: Filme) => a.duracao - b.duracao);
    console.log("Lista de filmes atualizada\n");
};
