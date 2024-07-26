import { Compra } from "../main";

export const pesquisarItem = (array: Compra[]) => {
    console.error("\n====================================");
    console.log("3 - pesquisar item na lista");

    const nome = prompt("\nDigite o nome do produto para encontra-lo:")?.trim();
    const item = array.find((compra) => compra.nome === nome);

    if (item && array.includes(item)) {
        console.log("\nitem:");
        console.log(item);
    }

    console.error("====================================\n");
};
