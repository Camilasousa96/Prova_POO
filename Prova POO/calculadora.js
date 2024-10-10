/*Crie uma calculadora que deve permitir apenas operações entre dois números.

O usuário deve fornecer uma expressão completa contendo os dois números e o operador, no formato: número1 operador número2 (por exemplo, 5 + 3 ou 10 / 2).

A entrada deve ser fornecida pelo usuário através de um prompt (pode ser adaptado para outros ambientes de execução, como linha de comando ou interface gráfica).

Deve existir uma função que realiza o cálculo (calcular) com base no operador digitado, que deve suportar as seguintes operações:

+ para soma. 

- para subtração.

* para multiplicação.

/ para divisão (com verificação para evitar divisão por zero).

A expressão fornecida pelo usuário deve ser analisada e dividida em três partes: o primeiro número (número1), o operador (operador) e o segundo número (número2).

O programa deve validar se a entrada é válida, verificando: Se os valores fornecidos para número1 e número2 são números válidos.

Se o operador é um dos operadores suportados (+, -, *, /).

Se a entrada não for válida, deve exibir uma mensagem informando o erro e solicitar que o usuário tente novamente.

O programa deve exibir o resultado da operação no formato número1 operador número2 = resultado (por exemplo, 5 + 3 = 8).*/

function calcular() {
    const expressao = prompt("Digite aqui: (ex: 5 + 3):");
  
    const partes = expressao.split(' ');
    const numero1 = parseFloat(partes[0]);
    const operador = partes[1];
    const numero2 = parseFloat(partes[2]);
  

    if (isNaN(numero1) || isNaN(numero2)) {
      console.log("Entrada invalida: os numeros devem ser validos.");
      return;
    }
  
    if (['+', '-', '*', '/'].indexOf(operador) === -1) {
      console.log("Operador invalido. Use +, -, * ou /.");
      return;
    }

    let resultado;
    switch (operador) {
      case '+':
        resultado = numero1 + numero2;
        break;
      case '-':
        resultado = numero1 - numero2;
        break;
      case '*':
        resultado = numero1 * numero2;
        break;
      case '/':
        if (numero2 === 0) {
          console.log("Divisao por zero nao e permitida.");
          return;
        }
        resultado = numero1 / numero2;
        break;
    }
  
    console.log(`${numero1} ${operador} ${numero2} = ${resultado}`);
  }
  
  calcular();
