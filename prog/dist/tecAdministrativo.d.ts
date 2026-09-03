import Pessoa from "./Pessoa";
export default class tecnicoAdm extends Pessoa {
    private siape;
    private nivelInstrucao;
    constructor(siape: string, nivelInstrucao: string, nome: string, idade: number, cpf: string);
    getsiape(): string;
    setsiape(siape: string): void;
    imprimeinfo(): void;
}
//# sourceMappingURL=tecAdministrativo.d.ts.map