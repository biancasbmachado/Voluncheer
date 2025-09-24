const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nome.value.trim().length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return; 
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert("Digite um formato de e-mail válido.");
        return;
    }

    if (telefone.value.replace(/\D/g, "").length < 10) {
        alert("Digite um telefone válido (com DDD).");
        return; 
    }

    if (mensagem.value.trim().length < 1) {
        alert("O campo de mensagem não pode estar em branco.");
        return;
    }

    alert("Formulário enviado com sucesso!");
    form.reset();
});

// Máscara para telefone
telefone.addEventListener("input", e => {
    let valor = e.target.value.replace(/\D/g, "");
    valor = valor.length <= 10
        ? valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
        : valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    e.target.value = valor;
});
