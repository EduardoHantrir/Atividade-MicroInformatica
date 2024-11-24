const prompt = require('prompt-sync')({ sigint: true });

let celsius = prompt("Digite a temperatura em ºC ");
let fah = (celsius * 9/5) + 32;

console.log("Esta fazendo º", celsius, "enquato em Fahrenheit esta fazendo ", fah, "º")