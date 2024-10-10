/*Você deve criar um software em JavaScript que simule um sistema de cadastro e cálculo de salários para funcionários e gerentes de uma empresa. 

O exercício explora conceitos de herança e polimorfismo, aplicados ao cálculo de salários, onde gerentes recebem um bônus adicional. 

Siga as instruções abaixo para implementar o sistema.

Requisitos:

Criação das Classes:

Implemente uma classe chamada Funcionario com os seguintes atributos:

id: Identificador único do funcionário (número).

nome: Nome do funcionário (string).

alocacao: 

Área/departamento onde o funcionário trabalha (string).

Implemente uma classe chamada Gerente, que herda de Funcionario, com o seguinte atributo adicional:

quantidadeDeSubordinados: Quantidade de subordinados sob responsabilidade do gerente (número).

Métodos das Classes:

Implemente um método calculaSalario() na classe Funcionario que retorna um valor fixo de 2000 (representando o salário base de um funcionário).

Na classe Gerente, sobrescreva o método calculaSalario() para retornar o salário com uma bonificação de 40% sobre o valor base.

Adicione um método info() em ambas as classes que retorna uma string com as informações do funcionário/gerente.

Criação de Instâncias e Uso do Polimorfismo:

Crie um funcionário utilizando a classe Funcionario e defina os valores para id, nome e alocacao.

Crie um gerente utilizando a classe Gerente e defina os valores para id, nome, alocacao e quantidadeDeSubordinados.

Exiba as informações de ambos (funcionário e gerente) e o salário calculado por meio do método calculaSalario(), 
demonstrando como o método se comporta de maneira diferente para cada classe.

Validação do Polimorfismo:

O método calculaSalario() deve retornar 2000 para um funcionário comum.
O método calculaSalario() deve retornar 2800 para um gerente (considerando 40% de bonificação sobre o valor base de 2000).*/


class Funcionario {
    constructor(id, nome, alocacao) {
      this.id = id;
      this.nome = nome;
      this.alocacao = alocacao;
    }
  
    calculaSalario() {
      return 2500;
    }
  
    info() {
      return `Funcionário: ${this.nome} (ID: ${this.id}) - Alocação: ${this.alocacao} - Salário: R$ ${this.calculaSalario()}`;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(id, nome, alocacao, quantidadeDeSubordinados) {
      super(id, nome, alocacao);
      this.quantidadeDeSubordinados = quantidadeDeSubordinados;
    }
  
    calculaSalario() {
      return super.calculaSalario() * 1.4; 
    }
  }
  
  const funcionario = new Funcionario(1, 'Marina Gabriela', 'Enfermeira');
  const gerente = new Gerente(2, 'Davi Lucas', 'Enfermeiro Chefe', 8);
  

  console.log(funcionario.info());
  console.log(gerente.info());


