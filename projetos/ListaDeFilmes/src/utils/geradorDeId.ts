import { Filme } from "../main";

export const geradorDeId = (array : Filme[]) : number => {
    if (array.length < 1) {
        return 1
    }

    const indexUltimoFilme = array[array.length - 1].id

    return indexUltimoFilme + 1
}