// Crie um array de objetos representando carros, cada um com propriedades nome e ano, e use filter para criar um novo array contendo apenas os carros fabricados após o ano 2010.

const cars = [
    { nome: "Toyota Corolla", ano: 2020 },
    { nome: "Honda Civic", ano: 2019 },
    { nome: "Ford Focus", ano: 2000 },
    { nome: "Chevrolet Cruze", ano: 2021 },
    { nome: "Volkswagen Golf", ano: 2010 }
];

const newCars = cars.filter((car) => car.ano > 2010);
console.log(newCars)