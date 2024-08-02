import { Filme } from "../main";

export const ordenarFilmeLancamento = (array: Filme[]) => {
    array.sort((a: Filme, b: Filme) => a.anoLancamento - b.anoLancamento)
    console.log("Lista de filmes atualizada\n");
}