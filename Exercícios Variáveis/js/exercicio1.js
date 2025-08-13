function cadastroSimples() {


let nome = prompt("Digite seu nome");
        let idade = parseFloat(prompt("Digite sua idade"));
        let altura = parseFloat(prompt("Digite sua altura"));

        console.log("Olá, meu nome é " + nome + ", tenho " + idade + " anos e minha altura é " + altura + " metros.");

 }

 function calculo() {

     let largura = parseFloat(prompt("Digite a largura do retângulo em metros"));
     let altura = parseFloat(prompt("Digite a altura do retângulo em metros"));

     let area = largura * altura;

        console.log("A área do retângulo é " + area + " metros quadrados ");
 }

 function conversaoMoeadas() {

      let valorReais =  parseFloat(prompt("Digite um valor em reais"));
      let TaxaDolar = 5;
      let valorDolares = valorReais / TaxaDolar;

        console.log("O valor em dólares é: US$" + valorDolares);
 }


 function descontoProduto() {

     let preco = parseFloat(prompt("Digite o preço do produto").replace("." , ","));
     let desconto = parseFloat(prompt("Digite a porcentagem de desconto ").replace("." , ","));

     let valorDesconto = preco * (desconto / 100);
     let valorFinal = preco - valorDesconto;

        console.log("O valor final com desconto é R$ " + valorFinal);
 }


 function idadeFutura() {

     let idadeAtual = parseInt(prompt("Qual sua idade atual?")); 
     let idadeFutura = idadeAtual + 5;                           
     console.log("Daqui a 5 anos você terá " + idadeFutura + " anos.");
 }


 function luzAcesa() {

     let luzAcesa = false;
     let escolha = parseInt(prompt("Digite 1 para acender a luz ou 0 para apagar."));

        if(escolha === 1) {
            luzAcesa = true;
        } else if (escolha === 0) {
            luzAcesa =  false;
        }

        if (luzAcesa) {
            console.log("A luz está acesa");
        } else {
            console.log("A luz está apagada");
        }
 }


 function notas() {

     let nota1 = parseFloat(prompt("Digite a nota 1"));
     let nota2 = parseFloat(prompt("Digite a nota 2"));
     let nota3 = parseFloat(prompt("Digite a nota 3"));

     let soma = nota1 * nota2 * nota3;
     let media = soma / 3;

        console.log("A média das notas é: " + media);
 }

 function somarMultiplicar() {

     let numero1 = parseInt(prompt("Digite o primero número inteiro"));
     let numero2 = parseInt(prompt("Digite o segundo número inteiro"));

     let soma = numero1 + numero2;
     let produto = numero1 * numero2;

         console.log("A soma é " + soma);
         console.log("o produto é " + produto);
 }

 function temperatura() {

     let celsius = parseFloat(prompt("Digite a temperatura em Celsius:").replace(",", "."));
     let fahrenheit = (celsius * 9/5) + 32;

        console.log("A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2));
 }

 function trocarValores() {

     let valor1 = prompt("Digite o primeiro valor:");
     let valor2 = prompt("Digite o segundo valor:");

        console.log("Antes da troca:");
        console.log("Valor 1: " + valor1);
        console.log("Valor 2: " + valor2);

        let temp = valor1;
        valor1 = valor2;
        valor2 = temp;

        console.log("Depois da troca:");
        console.log("Valor 1: " + valor1);
        console.log("Valor 2: " + valor2);

 }