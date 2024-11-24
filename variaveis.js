const prompt = require('prompt-sync')({ sigint: true });

let nome = prompt("Digite o seu nome: ");
console.log("Olá ", nome);

let num = prompt("Digite um numero: ");
let number = parseInt(num);
console.log("O numero escolhido foi ", number);

let bool = prompt("Escolha entre verdadeiro ou falso (true ou false): ");
let boolean = (bool.toLowerCase() === 'true');
console.log("O valor escolido foi ", boolean);

console.log(typeof nome);
console.log(typeof number);
console.log(typeof boolean);