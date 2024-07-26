import { adicionarNovoItem } from "./services/adicionarNovoItem";
import { exibirLista } from "./services/exibirLista";
import { limparLista } from "./services/limparLista";
import { ordemAlfabetica } from "./services/ordemAlfabetica";
import { pesquisarItem } from "./services/pesquisarItem";
import { removerItemPorId } from "./services/removerItemPorId";

export interface Compra {
    id: number;
    nome: string;
}

const arrayCompras: Compra[] = [];

while (true) {
    const escolha = prompt(
        "1 - adicionar novo item.\n2 - remover item.\n3 - pesquisar item na lista.\n4 - ordenar lista por ordem alfabética.\n5 - exibir a lista completa\n6 - limpar a lista\n7 - encerrar programa\nDigite um numero que represente sua escolha:",
    )?.trim();

    if (escolha === "1") {
        adicionarNovoItem(arrayCompras);
    } else if (escolha === "2") {
        removerItemPorId(arrayCompras);
    } else if (escolha === "3") {
        pesquisarItem(arrayCompras);
    } else if (escolha === "4") {
        ordemAlfabetica(arrayCompras);
    } else if (escolha === "5") {
        exibirLista(arrayCompras);
    } else if (escolha === "6") {
        limparLista(arrayCompras);
    } else if (escolha === "7") {
        break;
    } else {
        console.error("\nDIGITE UM NUMERO VÁLIDO");
    }
}
