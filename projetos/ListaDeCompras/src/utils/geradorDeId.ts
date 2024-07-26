import { Compra } from "../main";

export const geradorDeId = (array: Compra[]): number => {
    if (array.length < 1) {
        return 1;
    }

    const idUltimo = array[array.length - 1].id;

    const novoId = idUltimo + 1;

    return novoId;
};
