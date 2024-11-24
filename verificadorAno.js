const prompt = require('prompt-sync')({ sigint: true });

let ano = prompt("Escolha um ano: ");

if ((ano % 4 === 0 && ano % 100 !== 0 ) || (ano % 400 === 0 )) {
    console.log("O ano ", ano ," é bissexto.")
} else {
    console.log("O ano ", ano ," não é bissexto.")
}