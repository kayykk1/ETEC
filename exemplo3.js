function media(n1,n2,n3){
    return(n1+n2+n3)/3;
}
function situacao(m){
    if(m>=6&&m<=10){
        return "Aprovado!";
    }
    else if(m>=4&&m<6){
        return "Recuperação!";
    }
    else if(m>=0&&m<4){
        return "Reprovado!";
    }
    else{
        return "Valor inválido!";
    }

}
let n1,n2,n3,m;

n1 = Number(prompt("Insira nota 1: "));
n2 = Number(prompt("Insira nota 2: "));
n3 = Number(prompt("Insira nota 3: "));
m = media = media(n1,n2,n3);

document.write("Media:"+m);
document.write("<br>Situação: "+situacao(m));