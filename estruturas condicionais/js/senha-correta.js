function senhaCorreta() { 

let senha = parseFloat(prompt("Digite a sua senha"));
if (senha === 1234 ) {
    alert("Acesso permitido");
} else{
    alert("Senha incorreta");
}

}