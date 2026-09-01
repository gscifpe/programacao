"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    idade;
    dataNascimento;
    tipoSangue;
    constructor(nome, idade, dataNascimento, tipoSangue) {
        this.dataNascimento = dataNascimento;
        this.tipoSangue = tipoSangue;
        this.nome = nome;
        this.idade = idade;
        this.setNome(nome);
        this.setIdade(idade);
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        if (nome != "") {
            this.nome = nome;
        }
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        if (idade >= 0) {
            this.idade = idade;
        }
    }
}
exports.default = Pessoa;
//# sourceMappingURL=Pessoa.js.map