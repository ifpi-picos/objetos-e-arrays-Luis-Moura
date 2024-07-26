import { Compra } from "../main";

export const removerItemPorId = (array: Compra[]) => {
    console.error("\n====================================");
    console.log("2 - remover item\n");

    if (array.length > 0) {
        array.forEach((item) => console.log(`${item.id} - ${item.nome}`));

        const idItem = Number(
            prompt("\nDigite o numero do item que deseja remover:")?.trim(),
        );

        const indexItem = array.findIndex((item) => item.id === idItem);

        array.splice(indexItem, 1);
        console.log(`\nITEM REMOVIDO!`);
    } else {
        console.error("A SUA LISTA DE COMPRAS ESTA VAZIA");
    }

    console.error("====================================\n");
};
