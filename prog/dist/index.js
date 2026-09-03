"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Aluno_1 = __importDefault(require("./Aluno"));
const Professor_1 = __importDefault(require("./Professor"));
const tecAdministrativo_1 = __importDefault(require("./tecAdministrativo"));
let aluno1 = new Aluno_1.default("TDS-54553", "Escola do Tio Zezinho", "Maria da Silva", 16, "01234567890", "Técnico de desenvolvimento de sistemas");
let professor1 = new Professor_1.default('632tr76t', 'Mestrado', 'Engenharia de Software', 'João da Silva', 45, '12345678900');
let tecnico1 = new tecAdministrativo_1.default('789klm012', 'Doutorado', 'Administração', 35, 'ydg733r313');
let matricula = aluno1.getMatricula();
console.log(matricula);
aluno1.imprimeinfo();
professor1.imprimeinfo();
tecnico1.imprimeinfo();
//# sourceMappingURL=index.js.map