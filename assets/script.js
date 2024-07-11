  // Função para importar o navbar
  $(document).ready(function(){
    $.get("../assets/nav/index.html", function(navbar){
      var nav = $(navbar);
      $("#navbar").replaceWith(nav);
    });
  });
  
  // Função para importar o footer
  $(document).ready(function(){
    $.get("../assets/footer/index.html", function(footer){
      var footer = $(footer);
      $("#footer").replaceWith(footer);
    }); 
  });

/* Cria observer para fazer animação de elementos */   
const observer = new IntersectionObserver((entries) => { 
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
        } else {
        entry.target.classList.remove('show');
        }
    });
});
  
const hiddenElements = document.querySelectorAll('.hidden'); 
hiddenElements.forEach((el) => observer.observe(el));

  // Função para importar o tradutor
  // $(document).ready(function(){
  //   $.get("../assets/translate/index..html", function(translate){
  //     var translate = $(translate);
  //     $("#translate").replaceWith(translate);
  //   });
  // });
  

  // Função para importar o libras

  // $(document).ready(function(){
  //   $.get("../assets/libras/index.html", function(libras){
  //     var libras = $(libras);
  //     $("#libras").replaceWith(libras);
  //   });
  // });

/* Abre o menu full screen */
function abrirMenu() {
  const menu = document.querySelector('.menuFullScreen');
  menu.style.display = 'flex'; // Exibe o menu
  setTimeout(() => {
      menu.classList.add('showMenu');
  }, 50); // Pequeno atraso para garantir que a transição CSS seja aplicada corretamente
}

/* Fecha o menu full screen */
function fecharMenu() {
  const menu = document.querySelector('.menuFullScreen');
  menu.classList.remove('showMenu');
  // Aguarda a transição de 500ms antes de ocultar completamente o menu
  setTimeout(() => {
      menu.style.display = 'none';
  }, 800); // Deve corresponder à duração da transição CSS
}
