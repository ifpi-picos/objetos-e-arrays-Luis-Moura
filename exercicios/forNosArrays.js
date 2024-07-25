// Utilize a lista de filmes do exercício anterior e exiba no console cada um dos filmes informados usando um for tradicional.

const arrayFilmes = []

arrayFilmes.push(prompt('Digite o nome de um filme: '))
arrayFilmes.push(prompt('Digite o nome de um filme: '))
arrayFilmes.push(prompt('Digite o nome de um filme: '))
arrayFilmes.push(prompt('Digite o nome de um filme: '))
arrayFilmes.push(prompt('Digite o nome de um filme: '))

for (let i = 0; i < arrayFilmes.length; i++) {
    console.log(`filme ${i + 1} - ${arrayFilmes[i]}`)
}