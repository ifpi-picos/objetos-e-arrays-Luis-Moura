import { Filme } from "../main";

export const pesquisarFilme = (array: Filme[]) => {
    const filmeEscolhido = prompt(
        "Digite o nome do filme que você deseja pesquisar:",
    );

    if (filmeEscolhido) {
        console.log(
            `Filme:\n${array.find(
                (filme: Filme) => filme.titulo === filmeEscolhido,
            )}`,
        );
    }
};
