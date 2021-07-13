class Data{
    /* public dia:number;
    mes:number;
    ano:number; */

    constructor(public dia:number,public mes:number,public ano:number = 1970){
        /* this.dia=dia;
        this.mes=mes;
        this.ano=ano; */
    }
}

const data=new Data(1,1,2020);
console.log(data.dia);

const data2=new Data(1,1);


class Carro{
    private velocidadeAtual: number=0;

    constructor(
        public marca: string,
        public modelo:string,
        private velocidadeMax:number=220

    ){}

    private alterarVelocidade(delta:number){
        if(this.velocidadeAtual+delta<this.velocidadeMax && (this.velocidadeAtual+delta>=0))
        this.velocidadeAtual+=delta;
    }

    acelerar(){
        this.alterarVelocidade(5);
        }
    

    frear(){
        this.alterarVelocidade(-5);
    }
        
}

const carro=new Carro('Fiat','Uno',250);
carro.acelerar();
