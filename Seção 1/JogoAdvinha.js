const prompt = require('prompt-sync')();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

let numeroSecreto = gerarNumeroAleatorio();
// console.log(numeroSecreto)

var entradaNumero = prompt('Qual é o numero Secreto? ');

while(entradaNumero != numeroSecreto){
console.log("Numero incorreto!")   
var entradaNumero = prompt('Qual é o numero Secreto? '); 
}

console.log("Voce acertou parabens!")    

