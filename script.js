// Captura o formulário
const formulario = document.getElementById("formContato");

// Evento de envio
formulario.addEventListener("submit", function(event) {

    // Impede o envio real do formulário
    event.preventDefault();

    // Captura os valores
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Verifica se os campos estão vazios
    if(nome === "" || email === "" || mensagem === "") {

        alert("Preencha todos os campos.");

        return;
    }

    // Verificação simples de e-mail
    if(!email.includes("@") || !email.includes(".")) {

        alert("Digite um e-mail válido.");

        return;
    }

    // Mensagem de sucesso
    alert("Mensagem enviada com sucesso!");

    // Limpa os campos
    formulario.reset();

});