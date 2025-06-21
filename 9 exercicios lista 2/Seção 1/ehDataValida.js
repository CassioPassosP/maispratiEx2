const prompt = require('prompt-sync')();

function ehDataValida(dia, mes, ano){

    if(mes == 12 || mes == 10 || mes == 8 || mes == 7 | mes == 5  || mes == 3 || mes == 1 ){
        if(dia > 0 && dia < 32){
            return true;
        }else{
            return false
        }
    }
    
    if(mes == 11 || mes == 9 || mes == 6 || mes == 4 ){
        if(dia > 0 && dia < 31){
            return true;
        }else{
            return false
        }
    }

    if (ano % 4 == 0){

    if(mes == 2){
        if(dia > 0 && dia < 30){
            return true;
        }else{
            return false
        }
    }

    }else{
    if(mes == 2){
        if(dia > 0 && dia < 29){
            return true;
        }else{
            return false
        }
    }
    }

    return false;
}

var entradaDia = prompt('Insira um dia: '); 
var entradaMes = prompt('Insira um mes: '); 
var entradaAno = prompt('Insira um ano: '); 

ehDataValida(entradaDia,entradaMes,entradaAno)

console.log(ehDataValida(entradaDia,entradaMes,entradaAno))

