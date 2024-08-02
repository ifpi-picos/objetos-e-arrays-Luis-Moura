import { Filme } from "../main";

export const ordenarFilmeAlfabetica = (array: Filme[]) => {
    array.sort((a: Filme, b: Filme) => a.titulo.localeCompare(b.titulo))
    console.log('Lista de filmes atualizada\n')
}