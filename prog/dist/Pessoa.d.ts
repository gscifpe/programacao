export default abstract class Pessoa {
    private nome;
    private idade;
    private cpf;
    private tipoSanguineo?;
    constructor(nome: string, idade: number, cpf: string);
    getnome(): string;
    setnome(Nome: string): void;
    getidade(): number;
    setidade(idade: number): void;
    getcpf(): string;
    setcpf(cpf: string): void;
    abstract imprimeinfo(): void;
}
//# sourceMappingURL=Pessoa.d.ts.map