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