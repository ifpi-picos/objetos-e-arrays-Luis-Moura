import { Filme } from "../main";
import { exibirListaCompleta } from "./exibirListaCompleta";

export const removerFilme = (array: Filme[], arrayFilmeAssistidos: Filme[]) => {
    exibirListaCompleta(array, arrayFilmeAssistidos)
    if (array.length < 1) {
        console.log("A sua lista esta vazia!");
    }

    const escolha = Number(
        prompt("Digite o numero do filme que você deseja remover:")?.trim(),
    );

    if (!escolha) {
        console.log("Digite o numero do filme!");
    }

    const idFilmeEscolhido = array.findIndex(
        (filme: Filme) => filme.id === escolha,
    );

    array.splice(idFilmeEscolhido, 1);

    console.log("Filme removido com sucesso\n");
};
