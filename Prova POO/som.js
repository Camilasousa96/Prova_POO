/*Implemente uma classe chamada Animal com um método fazerSom(). 
Em seguida, crie uma classe Cachorro que herde da classe Animal e sobrescreva o método fazerSom() para retornar o som "Au Au". 
Demonstre o uso das classes criando uma instância de Cachorro e chamando o método fazerSom(). */

class Animal {
    fazerSom() {
        return 'Som de Animal';
    }
}
class Cachorro extends Animal {
    fazerSom() {
        return 'Au Au';
    }
}
const meuCachorro = new Cachorro();

console.log(meuCachorro.fazerSom())