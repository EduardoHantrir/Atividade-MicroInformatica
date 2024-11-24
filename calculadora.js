const prompt = require('prompt-sync')({ sigint: true });

let num1 = parseInt(prompt("Digite o primeiro numero: "));
let operador = prompt("Digite o operador matematico (+, -, /, *): ");
let num2 = parseInt(prompt("Digite o segundo numero: "));
let result = 0;

switch (operador) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    case "*":
        result = num1 * num2;
        break;
}

console.log(`O resultado da conta ${num1 + operador + num2} é ${result}`);