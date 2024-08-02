import { Filme } from "../main";

export const exibirListaCompleta = (
    array: Filme[],
    arrayFilmeAssistidos: Filme[],
) => {

    if (array.length < 1) {
        console.log("Sua lista esta vazia!");
    } else {
        console.log("\n---------------------------------");
        console.log("Lista de Filmes:");
        array.forEach((filme: Filme, index) => {
            console.log(
                `${index + 1} - ${filme.titulo} de ${
                    filme.anoLancamento
                } com duração de ${filme.duracao}`,
            );
        });
        console.log("---------------------------------\n");

        console.log("---------------------------------");
        console.log("Lista de Filmes assistidos:");
        arrayFilmeAssistidos.forEach((filme: Filme, index) => {
            console.log(
                `${index + 1} - ${filme.titulo} de ${
                    filme.anoLancamento
                } com duração de ${filme.duracao}`,
            );
        });

        console.log("---------------------------------\n");
    }
};
