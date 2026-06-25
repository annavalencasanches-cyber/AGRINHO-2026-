document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contato");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    form.addEventListener("submit", (event) => {
        // Impede o recarregamento padrão da página ao enviar o formulário
        event.preventDefault();

        // Pega os valores preenchidos (pode ser usado para enviar para uma API futuramente)
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // Validação simples extra (opcional, já que o HTML usa 'required')
        if (nome && email && mensagem) {
            // Esconde o formulário e mostra a mensagem de sucesso
            form.reset(); // Limpa os campos
            mensagemSucesso.classList.remove("hidden");

            // Remove a mensagem de sucesso após 5 segundos
            setTimeout(() => {
                mensagemSucesso.classList.add("hidden");
            }, 5000);
        }
    });
});
