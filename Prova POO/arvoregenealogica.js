/*Faça uma programa para representar a árvore genealógica de uma família. 
Para tal, crie uma classe Pessoa que permita indicar, além de nome e idade, o pai e a mãe. 
Tenha em mente que pai e mãe também são do tipo Pessoa.*/

class Pessoa {
    constructor(nome, idade, pai, mae){
        this.nome = nome;
        this.idade = idade;
        this.pai = pai;
        this.mae = mae;
    }
}