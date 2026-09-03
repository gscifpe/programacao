"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    idade;
    cpf;
    tipoSanguineo;
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    getnome() {
        return this.nome;
    }
    setnome(Nome) {
        if (Nome != "") {
            this.nome = Nome;
        }
        else {
            console.log("não aceitamos nome vazio!");
        }
    }
    getidade() {
        return this.idade;
    }
    setidade(idade) {
        if (idade > 0) {
            this.idade = idade;
        }
        else {
            console.log("não aceitamos idade nula ou negativa!");
        }
    }
    getcpf() {
        return this.cpf;
    }
    setcpf(cpf) {
        if (cpf != "") {
            this.cpf = cpf;
        }
        else {
            console.log("não aceitamos cpf vazio!");
        }
    }
}
exports.default = Pessoa;
//# sourceMappingURL=Pessoa.js.map