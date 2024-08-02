import { adicionarFilme } from "./services/adicionarFilme";
import { exibirListaCompleta } from "./services/exibirListaCompleta";
import { marcarFilmeConcluido } from "./services/marcarFilmeConcluido";
import { ordenarFilmeAlfabetica } from "./services/ordenarFilmeAlfabetica";
import { ordenarFilmeDuracao } from "./services/ordenarFilmeDuracao";
import { ordenarFilmeLancamento } from "./services/ordenarFilmesLancamento";
import { removerFilme } from "./services/removerFilme";

export interface Filme {
    id: number;
    titulo: string;
    anoLancamento: number;
    duracao: number;
}

const arrayFilmes: Filme[] = [];
const arrayFilmeAssistidos: Filme[] = [];

while (true) {
    const escolha = prompt(
        "1 - adicionar novo filme.\n2 - ordenar filme em ordem alfabéfica.\n3 - ordenar filmes por duração.\n4 - ordenar filme por ano de lançamento.\n5 - exibir a lista completa\n6 - marcar filme como assistido\n7 - remover filme\n8 - pesquisar filme\n9 - encerrar programa\nDigite um numero que represente sua escolha:",
    )?.trim();

    if (escolha === "1") {
        adicionarFilme(arrayFilmes);
    } else if (escolha === "2") {
        ordenarFilmeAlfabetica(arrayFilmes);
    } else if (escolha === "3") {
        ordenarFilmeDuracao(arrayFilmes);
    } else if (escolha === "4") {
        ordenarFilmeLancamento(arrayFilmes);
    } else if (escolha === "5") {
        exibirListaCompleta(arrayFilmes, arrayFilmeAssistidos);
    } else if (escolha === "6") {
        marcarFilmeConcluido(arrayFilmes, arrayFilmeAssistidos);
    } else if (escolha === "7") {
        removerFilme(arrayFilmes, arrayFilmeAssistidos);
    } else if (escolha === "9") {
        console.log("encerrando programa...");
        break;
    } else {
        console.log("Digite um numero válido!");
    }
}
