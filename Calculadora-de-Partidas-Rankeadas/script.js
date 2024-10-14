let saldoVitorias = vitorias_derrotas(106, 5);

function vitorias_derrotas(vitorias, derrotas) {
    let saldoDaRankeada = vitorias - derrotas;
    return saldoDaRankeada;
}

if(saldoVitorias <= 10){
    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de Ferro.`);  
} else if(saldoVitorias <= 20){
    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de Bronze.`);
} else if(saldoVitorias <= 50){
    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de Prata.`);
} else if(saldoVitorias <= 80){
    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de Ouro.`);
} else if(saldoVitorias <= 90){
    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de Diamante.`);
} else if(saldoVitorias <= 100){
    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de Lendário.`);
} else {
    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de Imortal.`);
}
