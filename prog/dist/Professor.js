"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Professor extends Pessoa_1.default {
    siape;
    nivelInstrucao;
    areaFormacao;
    constructor(siape, nivelInstrucao, areaFormacao, nome, idade, cpf) {
        super(nome, idade, cpf);
        this.siape = siape;
        this.nivelInstrucao = nivelInstrucao;
        this.areaFormacao = areaFormacao;
    }
    imprimeinfo() {
        console.log(this.getnome(), this.getcpf(), this.getidade(), this.siape, this.nivelInstrucao, this.areaFormacao);
    }
}
exports.default = Professor;
//# sourceMappingURL=Professor.js.map