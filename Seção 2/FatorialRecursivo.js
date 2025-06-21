const prompt = require('prompt-sync')();
 
function Fatorial(numero){
    if(numero === 0){
        return 1
    }
    return numero * Fatorial(numero - 1)
}

let entradaNumero = prompt('Qual o numero para calcular op fatorial? '); 
let resultado = Fatorial(entradaNumero)
console.log(resultado)
