
class heroi {
    constructor(tipoClasse, ataque) {
    this.tipoClasse = tipoClasse;
    this.ataque = ataque;
    }

    escrever(){
    console.log(`o ${this.tipoClasse} atacou usando ${this.ataque}`);
    }
}

let mago = new heroi("mago", "usou magia");
let guerreiro = new heroi("guerreiro", "usou espada");
let monge = new heroi ("monge", "usou artes marciais");
let ninja = new heroi ("ninja", "usou shuriken");

mago.escrever();
guerreiro.escrever();
monge.escrever();
ninja.escrever();