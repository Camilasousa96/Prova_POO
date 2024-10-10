/*Crie uma classe Produto com um construtor que aceite dois ou três parâmetros (nome, preco, categoria). 
Se categoria não for informado, defina como "Indefinido".*/


class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        if (categoria) {
            this.categoria = categoria;
        } else {
            this.categoria = "Indefinido";
        }
    }
}
const meuProduto = new Produto('Azeitona', 4.50);
console.log(meuProduto)