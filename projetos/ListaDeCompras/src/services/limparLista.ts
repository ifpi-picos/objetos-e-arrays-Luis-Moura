import { Compra } from "../main";

export const limparLista = (array: Compra[]) => {
    console.error("\n====================================");
    console.log("6 - limpar lista");

    console.log("removendo itens...");
    array.splice(0, array.length);
    console.log("lista limpa");

    console.error("====================================\n");
};
