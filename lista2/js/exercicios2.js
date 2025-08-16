function solicitarNumeros() {
    let numero = parseFloat(prompt("Digite um número"));
    let  imparParNeutro, negativoPositivo,maiorQue10,MenorQue50,menorQue10,maiorQueOuIgual30,diferente1;

   if (numero === 0) {
    imparParNeutro = "O número é neutro"
    } else if(numero % 2 !== 0) {
        imparParNeutro = "O número é impar";
    } else {
       imparParNeutro = "O número é par" ; 
    } 

    if (numero >= 0) {
        negativoPositivo = "Número positivo";
    } else {
        negativoPositivo = "Número negativo";
    } 

    if (numero > 10) {
        maiorQue10 = "Maior que 10";
    } else if (numero === 10) {
     maiorQue10 = "Igual a 10";
    } else {
     maiorQue10 = "Menor que 10";
    }

    if (numero >= 50) {
        MenorQue50 = "Maior ou igual a 50";
    } else {
      MenorQue50 = "Menor que 50";
    }

    if (numero < 10) {
        menorQue10 = "Menor que 10";
    } else {
        menorQue10 = "Maior que 10"

    }

    if (numero >= 30) {
        maiorQueOuIgual30 = "Maior ou igual a 30";
    } else {
     maiorQueOuIgual30 = "Menor que 30";
    }

    if (numero != 1) {
        diferente1 = "Diferente de 1";
    } else { diferente1 = "Igual a 1"

    }
    
    console.log(imparParNeutro + "\n" + negativoPositivo + "\n" + maiorQue10 + "\n" + MenorQue50 + "\n" + menorQue10  +"\n" + maiorQueOuIgual30 + "\n" + diferente1);
    alert(imparParNeutro + "\n" + negativoPositivo + "\n" + maiorQue10 + "\n" + MenorQue50 + "\n" + menorQue10  +"\n" + maiorQueOuIgual30 + "\n" + diferente1);


}

function solicitarQuatroNumeoros() {

    let numero1 = parseFloat(prompt("Digite um número").replace(",","."));
    let numero2 = parseFloat(prompt("Digite um número").replace(",", "."));
    let numero3 = parseFloat(prompt("Digite um número").replace(",","."));
    let numero4 = parseFloat(prompt("Digite um número").replace(",","."));
  
    if (numero1 === numero2 && numero3 === numero4 && numero1 === numero4){
        alert("é um quadrado");
    } else {
        alert("não é um quadrado");
    }

}

function verificarRetangulo() {

    let numero1 = parseFloat(prompt("Digite um numero").replace(",","."));
    let numero2 = parseFloat(prompt("Digite um numero").replace(",","."));
    let numero3 = parseFloat(prompt("Digite um numero").replace(",","."));
    let numero4 = parseFloat(prompt("Digite um numero").replace(",","."));

    if (numero1 === numero2 && numero3 === numero4 && numero1 != numero4 || numero1 === numero3 && numero2 === numero4 && numero3 != numero2 || numero1 === numero4 && numero2 === numero3 && numero4 != numero2){
        alert("é um retangulo");
    } else {
        alert("não é retangulo");
    }
    
}

function ordemCrescente() {
    let numero1 = parseFloat(prompt("Digite um número").replace("," , "."));
    let numero2 = parseFloat(prompt("Digite um número").replace("," , "."));
    let numero3 = parseFloat(prompt("Digite um número").replace("," , "."));

    if (numero1 <= numero2 && numero2 <= numero3) {
        alert(numero1 + 
            "\n" + numero2 + 
            "\n" + numero3
        )
    } else if (numero1 <= numero3 && numero3  <= numero2) {
        alert(numero1 +
            "\n" + numero3 +
            "\n" + numero2
         );
    } else if ( numero2 <= numero1 && numero1 <= numero3) {
        alert(numero2 +
            "\n" + numero1 +
            "\n" + numero3
        );
    } else if (numero2 <= numero3 && numero3 <= numero1) {
        alert(numero2 +
            "\n" + numero3 +
            "n" + numero1
        );
    } else if (numero3 <= numero1 && numero1 <= numero2) {
        alert(numero3 +
            "\n" + numero1 +
            "\n" + numero2
        );
    } else if (numero3 <= numero2 && numero2 <= numero1) {
        alert(numero3 +
            "\n" + numero2 +
            "\n" + numero1
        );
    }
}


function anoNascimento() {
    let ano = prompt("Digite um ano de nascimento").trim();
    let partesAno = ano.split("");
    let milhar = parseInt(ano[0]);
    let centena = parseInt(ano[1]);
    let dezena = parseInt(ano[2]);
    let unidade = parseInt(ano[3]);
    let milharString,centenaString,dezenaString,UnidadeString;

    if (milhar === 1) {
        milharString = "mil, " 
    } else if (milhar === 2) {
        milharString = "dois mil, "
    } else if (milhar === 3) {
        milharString = "tres mil, "
    } else if (milhar )
}


