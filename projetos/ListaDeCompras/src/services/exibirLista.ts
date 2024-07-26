import { Compra } from "../main";

export const exibirLista = (array: Compra[]) => {
    console.error("\n====================================");
    console.log("5 - exibir a lista completa\n");

    if (array.length >= 1) {
        array.forEach((produto) => {
            console.log(`${produto.id} - ${produto.nome}`);
        });
    }
    else {
        console.error('Lista Vazia!')
    }

    console.error("====================================\n");
};
