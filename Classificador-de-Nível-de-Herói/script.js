const nomeHeroi = "Luan_Gameplays"

// Inserir xp do herói aqui:
let xpHeroi = 5000;

if (xpHeroi <= 1000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Ferro.`);
} else if (xpHeroi <= 2000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Bronze.`);
} else if (xpHeroi <= 5000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Prata.`);
} else if (xpHeroi <= 7000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Ouro.`);
} else if (xpHeroi <= 8000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Platina.`);
} else if (xpHeroi <= 9000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Ascendente.`);
} else if (xpHeroi <= 10000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Imortal.`);
} else {
    console.log(`O Herói de nome ${nomeHeroi} está no nível Radiante.`);
}

// Saída esperada, nesse caso que a variavel `xpHeroi` é igual a 5000, é "O Herói de nome Luan_Gameplays está no nível Prata."