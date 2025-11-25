/**
 * Lógica do Carrossel de Guias
 * Funciona trocando a classe 'ativa' entre as imagens dentro do card
 */

let intervaloCarrossel = null;

function iniciarCarrossel(cardElement) {
    const imagens = cardElement.querySelectorAll('.guia-img');
    
    // Se tiver apenas 1 imagem, não faz nada
    if (imagens.length <= 1) return;

    let indiceAtual = 0;

    // Descobre qual imagem está ativa no momento (geralmente a 0)
    imagens.forEach((img, index) => {
        if (img.classList.contains('ativa')) {
            indiceAtual = index;
        }
    });

    // Inicia o loop para trocar a imagem a cada 1.2 segundos
    intervaloCarrossel = setInterval(() => {
        // Remove a classe da imagem atual
        imagens[indiceAtual].classList.remove('ativa');

        // Calcula a próxima (volta para 0 se chegar no fim)
        indiceAtual = (indiceAtual + 1) % imagens.length;

        // Adiciona a classe na próxima
        imagens[indiceAtual].classList.add('ativa');
    }, 1200); // Tempo em milissegundos (1.2s)
}

function pararCarrossel(cardElement) {
    // Para o temporizador
    if (intervaloCarrossel) {
        clearInterval(intervaloCarrossel);
        intervaloCarrossel = null;
    }

    // Voltar para a primeira foto quando tirar o mouse
    
    const imagens = cardElement.querySelectorAll('.guia-img');
    imagens.forEach(img => img.classList.remove('ativa'));
    if(imagens.length > 0) imagens[0].classList.add('ativa');
}

// =======================================================
// ARQUIVO: js/carouselGuias.js
// LÓGICA DO CARROSSEL E CLIQUE DINÂMICO
// =======================================================

let carrosselIntervalos = {}; // Armazena os IDs dos intervalos de tempo

// --- 1. Lógica do Carrossel ---
function mostrarProximoSlide(cardElement) {
    // Procura por todas as imagens dentro do container de carrossel do card
    const slides = cardElement.querySelectorAll('.img-container-guia .guia-img');
    if (slides.length <= 1) return;

    let currentIndex = -1;
    let nextIndex = 0;

    // Encontra o slide atualmente ativo
    slides.forEach((slide, index) => {
        if (slide.classList.contains('ativa')) {
            currentIndex = index;
            slide.classList.remove('ativa'); // Esconde o slide atual
        }
    });

    // Calcula o próximo índice (volta para o 0 se chegar no fim)
    nextIndex = (currentIndex + 1) % slides.length;
    
    // Mostra o próximo slide
    slides[nextIndex].classList.add('ativa');
}

function iniciarCarrossel(cardElement) {
    const cardIndex = Array.from(document.querySelectorAll('.cardguia')).indexOf(cardElement);
    if (cardIndex === -1) return;

    // Para qualquer carrossel ativo antes de iniciar um novo
    pararCarrossel(cardElement); 
    
    // Inicia a transição a cada 2000ms (2 segundos)
    carrosselIntervalos[cardIndex] = setInterval(() => {
        mostrarProximoSlide(cardElement);
    }, 2000); 
}

function pararCarrossel(cardElement) {
    const cardIndex = Array.from(document.querySelectorAll('.cardguia')).indexOf(cardElement);
    
    // Limpa o intervalo
    if (carrosselIntervalos[cardIndex]) {
        clearInterval(carrosselIntervalos[cardIndex]);
        delete carrosselIntervalos[cardIndex];
    }

    // Volta para a primeira imagem instantaneamente
    const slides = cardElement.querySelectorAll('.img-container-guia .guia-img');
    if (slides.length > 0) {
        slides.forEach((slide, index) => {
            slide.classList.remove('ativa');
            if (index === 0) {
                slide.classList.add('ativa');
            }
        });
    }
}

// --- 2. Lógica do Clique Dinâmico (Modal) ---
document.addEventListener('DOMContentLoaded', () => {
    // Usamos um ouvinte na div principal para capturar cliques nas imagens internas
    const guiaContainer = document.getElementById('guia-cards-container');

    if (guiaContainer) {
        guiaContainer.addEventListener('click', (event) => {
            // Verifica se o clique foi em um container de imagem
            const imgContainer = event.target.closest('.img-container-guia');
            if (!imgContainer) return;

            // Encontra a imagem que está visível (que tem a classe 'ativa')
            const imagemAtiva = imgContainer.querySelector('.guia-img.ativa');
            
            if (imagemAtiva) {
                const imgSrc = imagemAtiva.getAttribute('src');
                
                // IMPORTANTE: Chama a função do modal que está no guiaCards.js
                // O event.preventDefault() precisa estar dentro da função de modal.
                abrirModalImagem(event, imgSrc); 
            }
        });
    }
});