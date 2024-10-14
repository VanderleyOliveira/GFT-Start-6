
// Passe nesses argumentos/parametros os valores de Vitórias e Derrotas, nesta ordem, para ver o algoritmo funcionando.
let saldoVitorias = vitorias_derrotas(106, 5);

function vitorias_derrotas(vitorias, derrotas) {
    let saldoDaRankeada = vitorias - derrotas;
    return saldoDaRankeada;
}

function determinarClassificacao(vitorias) {
    switch (true) {
        case (vitorias < 10):
            return `O Herói tem de saldo de ${vitorias} e está no nível de Ferro.`

        case (vitorias >= 11 && vitorias <= 20):
            return `O Herói tem de saldo de ${vitorias} e está no nível de Bronze.`

        case (vitorias >= 21 && vitorias <= 50):
            return `O Herói tem de saldo de ${vitorias} e está no nível de Prata.`

        case (vitorias >= 51 && vitorias <= 80):
            return `O Herói tem de saldo de ${vitorias} e está no nível de Ouro.`

        case (vitorias >= 81 && vitorias <= 90):
            return `O Herói tem de saldo de ${vitorias} e está no nível de Diamante.`

        case (vitorias >= 91 && vitorias <= 100):
            return `O Herói tem de saldo de ${vitorias} e está no nível de Lendário.`

        default:
            return `O Herói tem de saldo de ${vitorias} e está no nível de Imortal.`
    }
}
console.log(determinarClassificacao(saldoVitorias));


/*
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
*/