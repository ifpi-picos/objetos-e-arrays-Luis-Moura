import { Filme } from "../main";
import { geradorDeId } from "../utils/geradorDeId";

export const adicionarFilme = (array: Filme[]) => {
    const id = geradorDeId(array);
    const titulo = prompt("Digite o titulo do filme:")?.trim();
    const anoLancamento = Number(
        prompt("Digite o ano de lançamento do filme em numero:")?.trim(),
    );
    const duracao = Number(prompt("Digite a duração do filme em minutos:")?.trim());

    if (id && titulo && anoLancamento && duracao) {
        const filme: Filme = {
            id,
            titulo,
            anoLancamento,
            duracao,
        };

        array.push(filme);
        console.log("Filme adicionado\n");
    }
    else {
        console.log('Digite valores válidos')
    }
};
