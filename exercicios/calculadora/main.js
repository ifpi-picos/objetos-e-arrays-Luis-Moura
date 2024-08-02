const divid = require("./divid");
const mult = require("./mult");
const potencia = require("./potencia");
const soma = require("./soma");
const sub = require("./sub");

const usoSoma = soma(2, 3);

const usoSub = sub(10, 5);

const usoMult = mult(1, 5);

const usoDivi = divid(10, 2);

const usoPot = potencia(2, 2);

console.log(`${usoSoma}\n${usoSub}\n${usoMult}\n${usoDivi}\n${usoPot}`)