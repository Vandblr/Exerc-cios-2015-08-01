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


