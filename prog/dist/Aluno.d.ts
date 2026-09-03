import Pessoa from "./Pessoa";
export default class Aluno extends Pessoa {
    private matricula;
    private escolaOrigem;
    private curso;
    constructor(matricula: string, escolaOrigem: string, nome: string, idade: number, cpf: string, curso: string);
    getMatricula(): string;
    setMatricula(matricula: string): void;
    imprimeinfo(): void;
}
//# sourceMappingURL=Aluno.d.ts.map