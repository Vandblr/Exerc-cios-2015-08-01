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
    let milhar = parseInt(partesAno[0]);
    let centena = parseInt(partesAno[1]);
    let dezena = parseInt(partesAno[2]);
    let unidade = parseInt(partesAno[3]);
    let milharString,centenaString,dezenaString,unidadeString;


    if (milhar === 1) {
        milharString = "Mil " 
    } else if (milhar === 2) {
        milharString = "Dois mil "
    } else if (milhar === 3) {
        milharString = "Tres mil "
    } else if (milhar === 4) {
        milharString = "Quatro mil "
    } else if (milhar === 5) {
        milharString = "Cinco mil "
    } else if (milhar === 6) {
        milharString = "Seis mil "
    } else if ( milhar === 7) {
        milharString = "Sete milhar "
    } else if (milhar === 8) {
        milharString = "Oito mil "
    } else if (milhar === 9) {
        milharString = "Nove mil "
    }
    
    if (centena === 1 && dezena === 0 && unidadeString === 0) {
        centenaString = "Cem "
    } else if ( centena === 2) {
        centenaString = "Duzentos "
    } else if ( centena === 3) {
        centenaString = "Trezentos "
    } else if ( centena === 4) {
        centenaString = "Quatrocentos "
    } else if ( centena === 5) {
        centenaString = "Quinhentos "
    } else if ( centena === 6) {
        centenaString = "Seicentos "
    } else if ( centena === 7) {
        centenaString = "Setecentos "
    } else if ( centena === 8) {
        centenaString =  "Oitocentos "
    } else if ( centena === 9) {
        centenaString = "Novecentos "
    } else if (centena === 1) {
    centenaString = "Cento "
   } else  (centenaString = "")

   if (dezena === 1 && unidadeString === 0) {
    dezenaString = "e Dez"
   } else if (dezena === 1 && unidadeString === 1) {
    dezenaString = "e Onze"
   } else if (dezena === 1 && unidadeString === 3) {
    dezenaString = "e Treze"
   } else if (dezena === 1 && unidadeString === 4) {
    dezenaString = "e Quatorze" 
   } else if (dezena === 1 && unidadeString === 5) {
    dezenaString = "e Quinze"
   } else if (dezena  === 1 && unidadeString === 6) {
    dezenaString = "e Dezesseis"
   } else if (dezena === 1 && unidadeString === 7) {
    dezenaString = "e Dezessete"
   } else if (dezena === 1 && unidadeString === 8) {
    dezenaString = " e Dezoito"
   } else if (dezena === 1 && unidadeString === 9) {
    dezenaString = "e Dezenove "
   } else if (dezena === 2) {
    dezenaString = "e Vinte"
   } else if (dezena === 3) {
    dezenaString = "e Trinta"
   } else if (dezena === 4) {
    dezenaString = "e Quarenta"
   } else if (dezena === 5) {
    dezenaString = "e Cinquenta"
   } else if (dezena === 6) {
    dezenaString = "e Sessenta"
   } else if (dezena === 7) {
    dezenaString = "e Setenta"
   } else if (dezena === 8) {
    dezenaString = "e Oitenta"
   } else if (dezena === 9) {
    dezenaString = "e Noventa"
   } else (dezenaString = "")
  
   if (unidade === 1 && dezena !== 1) {
     unidadeString = " e Um"
   } else if (unidade  === 2) {
    unidadeString = " e Dois"
   }else if (unidade === 3) {
    unidadeString = " e Tres"
   } else if (unidade === 4) {
    unidadeString = " e Quatro"
   }else if (unidade === 5) {
    unidadeString = " e Cinco"
   } else if (unidade === 6) {
    unidadeString = " e Seis"
   } else if (unidade === 7) {
    unidadeString = " e Sete"
   } else if (unidade === 8) {
    unidadeString = " e oito"
   } else if (unidade === 9) {
    unidadeString = " e Nove"
   } else if (unidade === 0) {
    unidadeString = ""
   } 

   alert(milharString + centenaString + dezenaString + unidadeString)

   
}


function horaNascimento() {
    let pedirHora = prompt("Digite uma hora").trim();
    let horaPartes = pedirHora.split(":");
    let hora = parseInt(horaPartes[0]);
    let minuto = parseInt(horaPartes[1]);
    let segundo = parseInt(horaPartes[2]);
    let horaString,minutoString,segundoString;

    if (hora === 0) {
        horaString = "Meia noite"
    } else if (hora === 1) {
        horaString = "Uma hora"
    } else if (hora === 2) {
        horaString = "Duas horas"
    } else if (hora === 3) {
        horaString = "três horas"
    } else if (hora === 4) {
        horaString = "Quatro horas"
    } else if (hora === 5) {
        horaString = "Cinco horas"
    } else if (hora === 6) {
        horaString = "Seis horas"
    } else if (hora === 7) {
        horaString = "Sete horas"
    } else if (hora === 8) {
        horaString ="Oito horas"
    } else if (hora === 9) {
        horaString = "Nove horas"
    } else if (hora === 10) {
        horaString = "Dez horas"
    } else if (hora === 11) {
        horaString = "Onze horas"
    } else if (hora === 12) {
        horaString = "Doze horas"
    } else if (hora === 13) {
        horaString = "treze horas"
    } else if (hora === 14) {
        horaString = " Quatorze horas"
    } else if (hora === 15) {
        horaString = "Quinze horas"
    } else if (hora === 16) {
        horaString = "Dezesseis horas" 
    } else if (hora === 17) {
        horaString = "Dezessete horas"
    } else if (hora === 18) {
        horaString = "Dezoito horas"
    } else if (hora === 19) {
        horaString = "Dezenove horas"
    } else if (hora === 20) {
        horaString = "Vinte horas"
    } else if (hora === 21) {
        horaString = "Vinte e uma hora"
    } else if (hora === 22) {
        horaString = "Vinte e duas horas"
    } else if (hora === 23) {
        horaString = "Vinte e três horas"
    }

    if (minuto === 0) {
        minutoString = "Zero minutos"
    } else if (minuto === 1) {
        minutoString = "Um minuto"
    } else if (minuto === 2) {
        minutoString = "Dois minutos"
    } else if (minuto === 3) {
        minutoString = "Três minutos"
    } else if (minuto === 4) {
        minutoString = "Quatro minutos"
    } else if (minuto === 5) {
        minutoString = "Cinco minutos"
    } else if (minuto === 6) {
        minutoString = "Seis minutos"
    } else if (minuto === 7) {
        minutoString = "Sete minutos"
    } else if (minuto === 8) {
        minutoString = "Oito minutos"
    } else if (minuto === 9) {
        minutoString = "Nove minutos"
    } else if (minuto === 10) {
        minutoString = "Dez minutos"
    } else if (minuto === 11) {
        minutoString = "Onze minutos"
    } else if (minuto === 12) {
        minutoString = " Doze minutos"
    } else if (minuto === 13) {
        minutoString = "Treze minutos"
    } else if (minuto === 14) {
        minutoString = "Quatorze minutos"
    } else if (minuto === 15) {
        minutoString = "Quinze minutos"
    } else if (minuto === 16) {
        minutoString = "Dezesseis minutos"
    } else if (minuto === 17) {
        minutoString = "Dezessete minutos"
    } else if (minuto === 18) {
        minutoString = "Dezoito minutos"
    } else if (minuto === 19) {
        minutoString = "Dezenove minutos"
    } else if (minuto === 20) {
        minutoString = "Vinte minutos"
    } else if (minuto === 21) {
        minutoString = "Vinte e um minutos"
    } else if (minuto === 22) {
        minutoString = "Vinte e dois minutos"
    } else if (minuto === 23) {
        minutoString = "Vinte e três minutos"
    } else if (minuto === 24) {
        minutoString = "Vinte e quatro minutos"
    } else if (minuto === 25) {
        minutoString = "Vinte e cinco minutos"
    } else if (minuto === 26) {
        minutoString = "Vinte e seis minutos"
    } else if (minuto === 27) {
        minutoString = "Vinte e sete minutos"
    } else if (minuto === 28) {
        minutoString = "Vinte e oito minutos"
    } else if (minuto === 29) {
        minutoString = "Vinte e nove minutos"
    } else if (minuto === 30) {
        minutoString = "Trinta minutos"
    } else if (minuto === 31) {
        minutoString = "Trinta e um minutos"
    } else if (minuto === 32) {
        minutoString = "Trinta e dois minutos"
    } else if (minuto === 33) {
        minutoString = "Trinta e tês minutos"
    } else if (minuto === 34) {
        minutoString = "Trinta e quatro minutos"
    } else if (minuto === 35) {
        minutoString = "Trinta e cinco minutos"
    } else if (minuto === 36) {
        minutoString = "Trinta e seis minutos"
    } else if (minuto === 37) {
        minutoString = "Trinta e sete minutos"
    } else if (minuto === 38) {
        minutoString = "Trinta e oito minutos"
    } else if (minuto === 39) {
        minutoString = "Trinta e nove minutos"
    } else if (minuto === 40) {
        minutoString = "Quarenta minutos"
    } else if (minuto === 41) {
        minutoString = "Quarenta e um minutos"
    } else if (minuto === 42) {
        minutoString = "Quarenta e dois minutos"
    } else if (minuto === 43) {
        minutoString = "Quarenta e três minutos"
    } else if (minuto === 44) {
        minutoString = "Quarenta e quatro minutos"
    } else if (minuto === 45) {
        minutoString = "Qaurenta e cinco minutos"
    } else if (minuto === 46) {
        minutoString = "Quarenta e seis minutos" 
    } else if (minuto === 47) {
        minutoString = "Quarenta e sete minutos"
    } else if (minuto === 48) {
        minutoString = "Quarenta e oito minutos"
    } else if (minuto === 49) {
        minutoString = "Quarenta e nove minutos"
    } else if (minuto === 50) {
        minutoString = "Cinquenta minutos"
    } else if (minuto === 51) {
        minutoString = "Cinquenta e um minutos"
    } else if (minuto === 52) {
        minutoString = "Cinquenta e dois minutos"
    } else if (minuto === 53) {
        minutoString = "Cinquenta e três minutos"
    } else if (minuto === 54) {
        minutoString = "Cinquenta e quatro minutos"
    } else if (minuto === 55) {
        minutoString = "Cinquenta e cinco minutos"
    } else if (minuto === 56) {
        minutoString = "Cinquenta e seis minutos"
    } else if (minuto === 57) {
        minutoString = "Cinquenta e sete minutos"
    } else if (minuto === 58) {
        minutoString = "Cinquenta e oito minutos"
    } else if (minuto === 59) {
        minutoString = "Cinquenta e nove minutos"
    }


     if (segundo === 0) {
        segundoString = "Zero segundos"
    } else if (segundo === 1) {
        segundoString = "Um segundo"
    } else if (segundo === 2) {
        segundoString = "Dois segundos"
    } else if (segundo === 3) {
        segundoString = "Três segundos"
    } else if (segundo === 4) {
        segundoString = "Quatro segundos"
    } else if (segundo === 5) {
        segundoString = "Cinco segundos"
    } else if (segundo === 6) {
        segundoString = "Seis segundos"
    } else if (segundo === 7) {
        segundoString = "Sete segundos"
    } else if (segundo === 8) {
        segundoString = "Oito segundos"
    } else if (segundo === 9) {
        segundoString = "Nove segundos"
    } else if (segundo === 10) {
        segundoString = "Dez segundos"
    } else if (segundo === 11) {
        segundoString = "Onze segundos"
    } else if (segundo === 12) {
        segundoString = " Doze segundos"
    } else if (segundo === 13) {
        segundoString = "Treze segundos"
    } else if (segundo === 14) {
        segundoString = "Quatorze segundos"
    } else if (segundo === 15) {
        segundoString = "Quinze segundos"
    } else if (segundo === 16) {
        segundoString = "Dezesseis segundos"
    } else if (segundo === 17) {
        segundoString = "Dezessete segundos"
    } else if (segundo === 18) {
        segundoString = "Dezoito segundos"
    } else if (segundo === 19) {
        segundoString = "Dezenove segundos"
    } else if (segundo === 20) {
        segundoString = "Vinte segundos"
    } else if (segundo === 21) {
        segundoString = "Vinte e um segundos"
    } else if (segundo === 22) {
        segundoString = "Vinte e dois segundos"
    } else if (segundo === 23) {
        segundoString = "Vinte e três segundos"
    } else if (segundo === 24) {
        segundoString = "Vinte e quatro segundos"
    } else if (segundo === 25) {
        segundoString = "Vinte e cinco segundos"
    } else if (segundo === 26) {
        segundoString = "Vinte e seis segundos"
    } else if (segundo === 27) {
        segundoString = "Vinte e sete segundos"
    } else if (segundo === 28) {
        segundoString = "Vinte e oito segundos"
    } else if (segundo === 29) {
        segundoString = "Vinte e nove segundos"
    } else if (segundo === 30) {
        segundoString = "Trinta segundos"
    } else if (segundo === 31) {
        segundoString = "Trinta e um segundos"
    } else if (segundo === 32) {
        segundoString = "Trinta e dois segundos"
    } else if (segundo === 33) {
        segundoString = "Trinta e tês segundos"
    } else if (segundo === 34) {
        segundoString = "Trinta e quatro segundos"
    } else if (segundo === 35) {
        segundoString = "Trinta e cinco segundos"
    } else if (segundo === 36) {
        segundoString = "Trinta e seis segundos"
    } else if (segundo === 37) {
        segundoString = "Trinta e sete segundos"
    } else if (segundo === 38) {
        segundoString = "Trinta e oito segundos"
    } else if (segundo === 39) {
        segundoString = "Trinta e nove segundos"
    } else if (segundo === 40) {
        segundoString = "Quarenta segundos"
    } else if (segundo === 41) {
        segundoString = "Quarenta e um segundos"
    } else if (segundo === 42) {
        segundoString = "Quarenta e dois segundos"
    } else if (segundo === 43) {
        segundoString = "Quarenta e três segundos"
    } else if (segundo === 44) {
        segundoString = "Quarenta e quatro segundos"
    } else if (segundo === 45) {
        segundoString = "Qaurenta e cinco segundos"
    } else if (segundo === 46) {
        segundoString = "Quarenta e seis segundos" 
    } else if (segundo === 47) {
        segundoString = "Quarenta e sete segundos"
    } else if (segundo === 48) {
        segundoString = "Quarenta e oito segundos"
    } else if (segundo === 49) {
        segundoString = "Quarenta e nove segundos"
    } else if (segundo === 50) {
        segundoString = "Cinquenta segundos"
    } else if (segundo === 51) {
        segundoString = "Cinquenta e um segundos"
    } else if (segundo === 52) {
        segundoString = "Cinquenta e dois segundos"
    } else if (segundo === 53) {
        segundoString = "Cinquenta e três segundos"
    } else if (segundo === 54) {
        segundoString = "Cinquenta e quatro segundos"
    } else if (segundo === 55) {
        segundoString = "Cinquenta e cinco segundos"
    } else if (segundo === 56) {
        segundoString = "Cinquenta e seis segundos"
    } else if (segundo === 57) {
        segundoString = "Cinquenta e sete segundos"
    } else if (segundo === 58) {
        segundoString = "Cinquenta e oito segundos"
    } else if (segundo === 59) {
        segundoString = "Cinquenta e nove segundos"
    }

    alert( horaString + minutoString + segundoString)
}

