import { Filme } from "../main";
import { exibirListaCompleta } from "./exibirListaCompleta";

export const marcarFilmeConcluido = (
    array: Filme[],
    arrayFilmeAssistidos: Filme[],
) => {
    exibirListaCompleta(array, arrayFilmeAssistidos);

    const escolha = Number(
        prompt(
            "Digite o numero do filme que você deseja marcar como concluído:",
        )?.trim(),
    );

    if (escolha) {
        const filmeEscolhido = array.find((filme: Filme) => {
            return filme.id === escolha;
        });

        if (filmeEscolhido) {
            arrayFilmeAssistidos.push(filmeEscolhido);
        } else {
            console.log("Filme não existente!");
        }

        const IdfilmeEscolhido = array.findIndex((filme: Filme) => {
            return Number(filme.id) === Number(escolha);
        });

        if (IdfilmeEscolhido >= 0) {
            array.splice(IdfilmeEscolhido, 1);

            console.log("Filme marcado como assistido e adicionado à lista de filmes assistidos!");
        } else {
            console.log("teste 2");
            console.log("Filme não existente!");
        }
    } else {
        console.log(
            "Você precisa digitar o numero de um filme para marcar ele como assistido!",
        );
    }
};
