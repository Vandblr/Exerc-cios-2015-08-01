function produtoDesconto() {
    let produto = parseFloat(prompt("Digite o valor do produto").replace("." , ","));
    if (produto > 100) {
        alert("Você ganhou um desconto")
    } else {
        alert("Sem desconto disponivel")
    }
}