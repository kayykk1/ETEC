function somar(n1, n2){
    return n1+n2;

}
function subtrair(n1,n2){
    return n1-n2;
}

let n1 = Number(prompt("Insira n1: "));
let n2 = Number(prompt("Insira n2: "));

document.write("<br> Soma: "+somar(n1,n2));
document.write("<br> Subtração: "+subtrair(n1,n2));
