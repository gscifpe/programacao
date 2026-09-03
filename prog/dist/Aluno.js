"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Aluno extends Pessoa_1.default {
    matricula;
    escolaOrigem;
    curso;
    constructor(matricula, escolaOrigem, nome, idade, cpf, curso) {
        super(nome, idade, cpf);
        this.matricula = matricula;
        this.escolaOrigem = escolaOrigem;
        this.curso = curso;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    imprimeinfo() {
        console.log(this.getnome(), this.getcpf(), this.getidade(), this.matricula, this.curso, this.escolaOrigem);
    }
}
exports.default = Aluno;
//# sourceMappingURL=Aluno.js.map