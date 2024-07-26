import { Compra } from "../main";

export const ordemAlfabetica = (array: Compra[]) => {
    console.error("\n====================================");
    console.log("4 - ordenar lista");

    array.sort((a, b) => a.nome.localeCompare(b.nome));
    console.log("LISTA ORGANIZADA");
    console.error("====================================\n");
};
