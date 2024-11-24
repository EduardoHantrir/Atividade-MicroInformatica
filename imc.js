const prompt = require('prompt-sync')({ sigint: true });

let altura = prompt("Digite sua altura: ");
let peso = prompt("Digite seu peso: ");

let imc = peso / (altura ** 2)

console.log("Seu IMC é ", imc);