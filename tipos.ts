//Boolean
const contaPaga: boolean = false;

//Number
const idade: number=23;
const avaliacao: number = 4.5;

//String
const nome: string="Jorge Obrecht"

//Array
const idades:number[]=[23,28,45,32];
const idades2:Array<number>=[23,28,45,32];

//Tuple
let jogadores:[string,number,boolean];
jogadores=["Vitor",3,true];

//Enum
enum StatusAprovacao{
    Aprovado ='001',
    Pendente ='002',
    Rejeitado ='003'
}
const statusDaAprovacao:StatusAprovacao=StatusAprovacao.Aprovado;

//Any
const retornoDaAPI:any=[123,'Jorge',false];
const retornoDaAPI2: any={
    //...................
};

//Void
function printTela(msg:string): void{
    console.log(msg);
}

//Null e Undefined
const u : undefined=undefined;
const n: null=null;

//Object
function criar(objecto:object){
    //..
}
criar({
    propriedade:1.
})
//criar("Jorge") da erro

//Never
function loopInfinito():never{
    while(true){}
}

function erro(mensagem:string):never{
    throw new Error(mensagem);
}

function falha():never{
    return erro('Algo falhou')
}

//Union Types
const nota: string|number=5;
function exibirNota(nota:number | string){
    console.log(`A note é ${nota}`);
}

exibirNota('10');
exibirNota(10);

//Alias
type Funcionario={
    nome:string;
    sobrenome:string;
    dataNascimento:Date;
}

//type Funcionario=Array<string>;
const funcionario: Funcionario[]=[{
    nome:"Jorge",
    sobrenome: "Obrecht",
    dataNascimento:new Date()
},{
    nome:"Alex",
    sobrenome: "Obrecht",
    dataNascimento:new Date()
}];

function tratarFuncionarios(funcionarios:Funcionario[]){
    for(let funcionario of funcionarios){
        console.log(`Nome do funcionrio: ${funcionario.nome}`)
    }
}