import Pessoa from "./Pessoa";

export default class Aluno extends Pessoa{
    private matricula:string;
    private escolaOrigem:string;
    private curso:string;

    constructor(matricula:string, escolaOrigem:string, nome:string, idade:number,cpf:string, curso:string){
        super(nome,idade,cpf)
        this.matricula = matricula;
        this.escolaOrigem = escolaOrigem;
        this.curso = curso;
    }

    getMatricula():string{
        return this.matricula;
    }
    setMatricula(matricula:string):void{
        this.matricula = matricula;
    }
    imprimeinfo(): void {
        
        console.log(this.getnome(), this.getcpf(), this.getidade(), this.matricula, this.curso, this.escolaOrigem)
    }
}