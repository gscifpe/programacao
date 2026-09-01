export default class Pessoa{
    nome:string
    idade:number
    dataNascimento:Date
    tipoSangue: string

    constructor(nome:string, idade:number, dataNascimento: Date, tipoSangue:string){
        
        this.dataNascimento = dataNascimento
        this.tipoSangue = tipoSangue
        this.nome = nome
        this.idade = idade

        this.setNome(nome)
        this.setIdade(idade)
    }

    public getNome():string{
        return this.nome
    }

    setNome(nome:string):void {
        if (nome != ""){
            this.nome = nome
        }
    }

    public getIdade():number{
        return this.idade
    }

    setIdade(idade:number):void{
        if(idade >= 0){
            this.idade = idade
        }
    }
}