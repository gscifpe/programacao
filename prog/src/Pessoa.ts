export default abstract class Pessoa{
    private nome:string
    private idade:number 
    private cpf:string 
    private emailpesooal:string
    private emailinstitucional:string
    private senha:string

    constructor(nome:string, idade:number, cpf:string, emailpesooal:string, emailinstitucional:string, senha:string){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.emailpesooal = emailpesooal
        this.emailinstitucional = emailinstitucional
        this.senha = senha
    }

    getnome():string{
        return this.nome
    }

    setnome(Nome:string):void{
        if (Nome != ""){
        this.nome=Nome
        }else{
            console.log ("não aceitamos nome vazio!")
        }
    }

    getidade():number{
        return this.idade
    }

    setidade(idade:number):void{
        if (idade > 0){
        this.idade = idade
        }else{
            console.log ("não aceitamos idade nula ou negativa!")
        }
    }

    getcpf():string{
        return this.cpf
    }

    setcpf(cpf:string):void{
        if (cpf != ""){
        this.cpf= cpf
        }else{
            console.log ("não aceitamos cpf vazio!")
        }
    }

   abstract imprimeinfo():void
}