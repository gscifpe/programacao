import Pessoa from "./Pessoa";

export default class Professor extends Pessoa{
    private siape:string
    private nivelInstrucao:string
    private areaFormacao:string

    constructor(siape:string, nivelInstrucao:string, areaFormacao:string, nome:string, idade:number, cpf:string){
        super(siape, nivelInstrucao, areaFormacao, nome, idade, cpf)
        this.siape = siape
        this.nivelInstrucao = nivelInstrucao
        this.areaFormacao = areaFormacao
    }

    imprimeinfo(): void {
        console.log(this.getnome(), this.getcpf(), this.getidade(), this.siape, this.nivelInstrucao, this.areaFormacao)
    }

}

