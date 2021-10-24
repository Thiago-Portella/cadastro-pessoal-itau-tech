function Enviar() {

    let nome = document.getElementById("nome");
    let cpf = document.getElementById("cpf");
    let endereco = document.getElementById("endereco");
    let numero = document.getElementById("numero");
    let telefone = document.getElementById("telefoneCelular");
    
    if (nome.value === "" || cpf.value === "" || endereco.value === "" || numero.value === "" || telefone.value === "") {
        alert('Opa, tem algo de errado. Nem todos os campos obrigatórios foram preenchidos. Verifique novamente, por gentileza.');
    } else {
        alert('Muito obrigado, ' + nome.value + '. Os seus dados foram encaminhados com sucesso!');
} 
}