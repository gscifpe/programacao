"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class tecnicoAdm extends Pessoa_1.default {
    siape;
    nivelInstrucao;
    constructor(siape, nivelInstrucao, nome, idade, cpf) {
        super(nome, idade, cpf);
        this.siape = siape;
        this.nivelInstrucao = nivelInstrucao;
    }
    getsiape() {
        return this.siape;
    }
    setsiape(siape) {
        if (siape != "") {
            this.siape = siape;
        }
    }
    imprimeinfo() {
        console.log(this.getnome(), this.getcpf(), this.getidade(), this.siape, this.nivelInstrucao);
    }
}
exports.default = tecnicoAdm;
//# sourceMappingURL=tecAdministrativo.js.map