// Crie um array de objetos representando pessoas com nome e idade, e use find para encontrar a primeira pessoa com idade maior que 18.


const pessoas = [
    { nome: "Ana", idade: 10 },
    { nome: "Carlos", idade: 14 },
    { nome: "Maria", idade: 22 },
    { nome: "João", idade: 35 },
    { nome: "Fernanda", idade: 28 }
];

console.log(pessoas.find((pessoa) => pessoa.idade >= 18))
