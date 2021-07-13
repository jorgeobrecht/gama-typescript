"use strict";
//Boolean
var contaPaga = false;
//Number
var idade = 23;
var avaliacao = 4.5;
//String
var nome = "Jorge Obrecht";
//Array
var idades = [23, 28, 45, 32];
var idades2 = [23, 28, 45, 32];
//Tuple
var jogadores;
jogadores = ["Vitor", 3, true];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
//Any
var retornoDaAPI = [123, 'Jorge', false];
var retornoDaAPI2 = {
//...................
};
//Void
function printTela(msg) {
    console.log(msg);
}
//Null e Undefined
var u = undefined;
var n = null;
//Object
function criar(objecto) {
    //..
}
criar({
    propriedade: 1.
});
//criar("Jorge") da erro
//Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
//Union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A note \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
//type Funcionario=Array<string>;
var funcionario = [{
        nome: "Jorge",
        sobrenome: "Obrecht",
        dataNascimento: new Date()
    }, {
        nome: "Alex",
        sobrenome: "Obrecht",
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario_1 = funcionarios_1[_i];
        console.log("Nome do funcionrio: " + funcionario_1.nome);
    }
}
var altura = 1.6;
altura = null;
var contato = {
    nome: "Jorge",
    telefone1: "1234560.."
};
//type Assertion
var minhaIdade = 25;
//(<number>minhaIdade).toString();
minhaIdade.toString(); //define o tipo
//const input=document.getElementById("numero1")as HTMLInputElement;
var input = document.getElementById("numero1");
console.log(input.value);
