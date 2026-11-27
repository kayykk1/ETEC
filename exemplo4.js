function calculo(valor,porcentagem){
    return valor*(porcentagem/100);
}

function desconto(valor,porcentagem){
    return valor-(calculo(valor,porcentagem));
}

let valor = 100;
let desc = 15;

document.write("Valor da porcentagem: "+calculo(valor,desc));
document.write("<br>Valor com desconto: "+desconto(valor,desc));


