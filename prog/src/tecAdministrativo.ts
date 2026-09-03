import Pessoa from "./Pessoa";

export default class tecnicoAdm extends Pessoa{
    private siape:string
    private nivelInstrucao:string

    constructor(siape:string, nivelInstrucao:string, nome:string, idade:number, cpf:string){
        super(nome,idade,cpf)
        this.siape = siape
        this.nivelInstrucao = nivelInstrucao
    }

    getsiape():string{
        return this.siape
    }

    setsiape(siape:string):void{
        if (siape != ""){
            this.siape = siape
        }
    }

    imprimeinfo(): void {
        console.log(this.getnome(), this.getcpf(), this.getidade(), this.siape, this.nivelInstrucao)
    }
}