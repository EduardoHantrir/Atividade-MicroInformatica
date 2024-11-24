const prompt = require('prompt-sync')({ sigint: true });

let idade = prompt("Quantos anos você tem? ");
let carta = prompt("Você possui CNH (sim ou não)? ");
let cnh = carta.toLowerCase();

if (idade >= 18 && cnh === "sim") {
    console.log("Você esta apto para dirigir.");
} else if (idade < 18 && cnh !="sim") {
    console.log("Você é muito jovem e não tem CNH.")
}else if (idade < 18 ){
    console.log("Você não tem idade para poder dirigir!");
} else {
    console.log("Você não possui uma CNH.")
};