import { Compra } from "../main";
import { geradorDeId } from "../utils/geradorDeId";

export const adicionarNovoItem = (array: Compra[]) => {
    console.error("\n====================================");
    console.log("1 - adicionar novo item\n");

    const id: number = geradorDeId(array);
    const nome: string | undefined = prompt(
        "Digite o nome do produto:",
    )?.trim();

    if (id && nome) {
        const novoItem = {
            id,
            nome,
        };

        array.push(novoItem);

        console.log(`\nNOVO ITEM ADICIONADO!`);
    }
    else {
        console.error('Nome ou ID inválido!')
    }

    console.error("====================================\n");
};
