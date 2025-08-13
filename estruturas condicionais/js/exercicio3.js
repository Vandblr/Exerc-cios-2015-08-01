function AprovadoReprovado() {

    let nota = parseFloat(prompt("Dogite a nota de uma prova"));
    if (nota >=7) {
        alert("Aprovado");
    } else {
        alert("Reprovado");
    }
}

function maiorIdade() {
    let idade = parseInt(prompt("Digite a sua idade"));
    if (idade >= 18) {
        alert("Voce é maior de idade ");
    } else {
        alert("Você é menor de idade");
    }


}


function parImpar() {

    let numero = parseInt(prompt("Digite um número inteiro"));
    if (numero % 2 !== 0) {
        alert("O número é impar");
    } else {
        alert("O número é par")
    }
}


function produtoDesconto() {
    let produto = parseFloat(prompt("Digite o valor do produto").replace("." , ","));
    if (produto > 100) {
        alert("Você ganhou um desconto")
    } else {
        alert("Sem desconto disponivel")
    }
}


function senhaCorreta() { 

let senha = parseFloat(prompt("Digite a sua senha"));
if (senha === 1234 ) {
    alert("Acesso permitido");
} else{
    alert("Senha incorreta");
}

}

