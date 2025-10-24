let slideIndex = 1;
// Guarda o ID do intervalo para poder limpar depois, se necessário
let slideInterval;

// Função inicial para mostrar o primeiro slide
showSlides(slideIndex);
// Inicia o ciclo automático
startSlideshow();

// Função para avançar/retroceder slides (usada pelos botões)
function plusSlides(n) {
  showSlides(slideIndex += n);
  // Reinicia o timer do intervalo automático ao navegar manualmente
  resetInterval();
}

// Função para ir para um slide específico (usada pelos indicadores)
function currentSlide(n) {
  showSlides(slideIndex = n);
  // Reinicia o timer do intervalo automático ao navegar manualmente
  resetInterval();
}

// Função principal que exibe o slide correto
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-box");
  // Certifique-se que a classe dos indicadores está correta
  let dots = document.getElementsByClassName("indicadores");

  // Lógica para voltar ao primeiro slide depois do último
  if (n > slides.length) { slideIndex = 1 }
  // Lógica para ir ao último slide antes do primeiro
  if (n < 1) { slideIndex = slides.length }

  // Esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove a classe 'active' de todos os indicadores (se existirem)
  if (dots.length > 0) {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Adiciona a classe 'active' ao indicador correspondente
    dots[slideIndex - 1].className += " active";
  }

  // Mostra o slide atual
  slides[slideIndex - 1].style.display = "block";
}

// --- NOVIDADE: Funções para o ciclo automático ---

// Função para iniciar o slideshow automático
function startSlideshow() {
  // Define o intervalo para chamar plusSlides(1) a cada X milissegundos
  // 5000ms = 5 segundos. Ajuste este valor como desejar.
  slideInterval = setInterval(function() {
    plusSlides(1); // Avança para o próximo slide
  }, 5000); // <-- Altere aqui o tempo entre os slides (em milissegundos)
}

// Função para limpar e reiniciar o intervalo (útil após interação do usuário)
function resetInterval() {
    clearInterval(slideInterval); // Limpa o intervalo atual
    startSlideshow(); // Inicia um novo intervalo
}

// --- FIM DA NOVIDADE ---