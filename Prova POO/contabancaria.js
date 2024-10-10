/*Implemente um sistema de gerenciamento de contas bancárias em JavaScript. 
O exercício consiste na criação de uma classe ContaBancaria que gerencia o titular da conta e o saldo. 
Siga as instruções abaixo para implementar a classe conforme os requisitos.

Requisitos:

Classe ContaBancaria:

Crie uma classe ContaBancaria que contenha os seguintes atributos:titular: Nome do titular da conta (string).saldo: Saldo da conta (número), 
que deve ser inicializado em 0 e protegido contra acesso direto.

Métodos da Classe:

Adicione um método depositar(valor) que permita adicionar um valor ao saldo da conta. 
O valor deve ser um número positivo.Adicione um método sacar(valor) que permita retirar um valor do saldo. 
O valor deve ser um número positivo e não pode exceder o saldo atual. Se o saldo for insuficiente, o método deve exibir uma mensagem de erro.

Proteção do Atributo saldo:

O atributo saldo deve ser protegido para que não possa ser acessado diretamente de fora da classe. 
Utilize a convenção de nomenclatura com um caractere underscore (_) para indicar que o atributo é privado.

Demonstração:

Crie uma instância da classe ContaBancaria, defina um titular e faça algumas operações de depósito e saque, exibindo o saldo após cada operação.*/

class ContaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this._saldo = saldoInicial;
    }

    verSaldo(){
        console.log(`Saldo atual de ${this.titular}: R$ ${this._saldo.toFixed(2)}`);
    }

    depositar(valor){
        if(valor <=0){
            console.log(`O valor do depósito deve ser positivo`);
                return;
        }
        this._saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso`);
    }

    sacar(valor) {
        if(valor<= 0){
            console.log(`O valor do saque deve ser positivo!`);
            return;
        }
        if(valor > this._saldo){
            console.log(`Saldo insuficiente para saque`);
            return;
        }
        this._saldo -= valor;
        console.log(`Saldo atualizado ${this._saldo.toFixed(2)}`)
    }
}

let minhaConta = new ContaBancaria("Pedro", 2900);

minhaConta.verSaldo();
minhaConta.depositar(580);
minhaConta.verSaldo();
minhaConta.sacar(0);