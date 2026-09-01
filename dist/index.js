"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
let p1 = new Pessoa_1.default(" ", 16, new Date("2009/11/03"), "O-");
console.log(p1.getNome());
console.log(p1.getIdade());
//# sourceMappingURL=index.js.map