/* Letreiro reescrevendo texto welcome */

const text = document.getElementById('welcomeName').innerText;
const speed = 100; // Velocidade de digitação e apagar
const waitTime = 10000; // Tempo de espera antes de apagar o texto
let index = 0;
let isDeleting = false; // Flag para verificar se está apagando o texto

function typeWriter() {
    const element = document.getElementById('welcomeName');

    // Se está escrevendo ou apagando o texto
    if (!isDeleting && index <= text.length) {
        // Escreve o texto
        element.innerHTML = text.substring(0, index);
        index++;

        // Quando terminar de escrever, espera antes de apagar
        if (index > text.length) {
            isDeleting = true;
            setTimeout(typeWriter, waitTime);
        } else {
            setTimeout(typeWriter, speed);
        }
    } else if (isDeleting && index >= 0) {
        // Apaga o texto
        element.innerHTML = text.substring(0, index);
        index--;

        // Quando terminar de apagar, reinicia a escrita
        if (index < 0) {
            isDeleting = false;
            index = 0;
            setTimeout(typeWriter, speed); // Começa a escrever novamente
        } else {
            setTimeout(typeWriter, speed);
        }
    }
}

// Chamar typeWriter() após o carregamento da página
window.onload = function() {
    typeWriter();
};