// Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.

const nome = 'Luis Henrique de Moura Santos';

const nomeSlipt = nome.split(' ');

console.log(`Primeiro nome: ${nomeSlipt[0]} e Ultimo nome: ${nomeSlipt[nomeSlipt.length - 1]}`)