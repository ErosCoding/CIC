$(document).ready(function () {
    const inputs = document.querySelectorAll('.input input');

    // Acrescentar classe que identifica se o campo tem texto
    inputs.forEach(input => {
        if (input.value) 
            input.classList.add('tem-texto');

        input.addEventListener('input', function () {
            if (this.value)
                this.classList.add('tem-texto');
            else 
                this.classList.remove('tem-texto');
        });
    });

    // Resetar os botões quando o formulário for enviado
    $('form').on('reset', function () {
        inputs.forEach(input => {
            input.classList.remove('tem-texto');
        });
    });
});
