
class Heroi {
    constructor(tipo, nome, idade) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
        if (this.tipo === "Mago" || this.tipo === "mago") {
            console.log(`${this.tipo} atacou usando magia`);
        } else if (this.tipo === "Guerreiro" || this.tipo === "guerreiro") {
            console.log(`${this.tipo} atacou usando espada`);
        } else if (this.tipo === "Monge" || this.tipo === "monge") {
            console.log(`${this.tipo} atacou usando artes marciais`);
        } else if (this.tipo === "Ninja" || this.tipo === "ninja") {
            console.log(`${this.tipo} atacou usando shuriken`);
        } else {
            console.log("Esse tipo de herói não é um mago, guerreiro, monge ou ninja.");
        }
    }
}

let play = new Heroi("Mago")
play.atacar()
play = new Heroi("mago")
play.atacar()

play = new Heroi("Guerreiro")
play.atacar()

play = new Heroi("Monge") 
play.atacar()

play = new Heroi("Ninja") 
play.atacar()

play = new Heroi("Cavaleiro") 
play.atacar()
