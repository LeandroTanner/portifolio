function redirectTo(url) {
    window.location.href = url;
}

const text = "Clique Aqui";
const speed = 125; // Velocidade de digitação e apagar
const waitTime = 2000; // Tempo de espera antes de apagar o texto
let index = 0;
let isDeleting = false; // Flag para verificar se está apagando o texto

function typeWriter() {
    const element = document.getElementById('textoAnimado');

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

    // Acessa o botão pelo ID
    var button = document.getElementById('buttonRedirect');

    // Verifica se há texto no botão
    if (button.textContent.trim().length > 0) {
        console.log('O botão contém texto.');
    } else {
        console.log('O botão está vazio.');
        button.style.minHeight = '60px';
    }

}

// Chamar typeWriter() após o carregamento da página
window.onload = function() {
    typeWriter();
};


particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 500 },
    },
    color: { value: "#ffffff" },
    shape: {
      type: "star",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 4 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
