/* -------------------------------------------------
   parqueSlider.js – (Refatorado para uso dinâmico)
   ------------------------------------------------- */

   (() => {
    // Guarda o índice atual de cada parque (chave = data-park)
    const parkIndices = {};
    const parkTimers  = {};

    // -------------------------------------------------
    // 1. Tornamos essa função GLOBAL (window)
    // para poder chamá-la do outro arquivo
    // -------------------------------------------------
    window.initAllParkSliders = (autoInterval = 5000) => {
        // Seleciona todos os sliders presentes na tela no momento
        const parkContainers = document.querySelectorAll('.park-slider');

        parkContainers.forEach(container => {
            const parkId = container.dataset.park;
            if (!parkId) return;

            // Se já foi iniciado, não reseta (opcional, evita bugs se chamar 2x)
            if (parkIndices[parkId] !== undefined) return;

            parkIndices[parkId] = 1;              // começa no slide 1
            showParkSlide(parkId, 1);             // exibe o primeiro slide
            startAutoSlide(parkId, autoInterval); // autoplay
        });
    };

    // -------------------------------------------------
    // Funções de navegação (chamadas pelos botões)
    // -------------------------------------------------
    window.parkPlusSlides = (parkId, n) => {
        if (parkIndices[parkId] === undefined) parkIndices[parkId] = 1;
        parkIndices[parkId] += n;
        showParkSlide(parkId, parkIndices[parkId]);
        resetTimer(parkId);
    };

    window.parkCurrentSlide = (parkId, n) => {
        parkIndices[parkId] = n;
        showParkSlide(parkId, n);
        resetTimer(parkId);
    };

    // -------------------------------------------------
    // Exibe o slide correto
    // -------------------------------------------------
    const showParkSlide = (parkId, n) => {
        const container = document.querySelector(`.park-slider[data-park="${parkId}"]`);
        if (!container) return;

        const slides = container.querySelectorAll('.park-slide');
        const dots   = container.querySelectorAll('.park-indicadores'); // Pode não existir no HTML dinâmico

        if (slides.length === 0) return; // Segurança

        if (n > slides.length) parkIndices[parkId] = 1;
        if (n < 1) parkIndices[parkId] = slides.length;

        // Esconde todos
        slides.forEach(s => s.style.display = 'none');
        
        // Remove active dos dots (se existirem)
        if (dots.length > 0) {
            dots.forEach(d => d.classList.remove('active'));
        }

        // Mostra o atual
        // Verifica se o elemento existe antes de tentar acessar style
        if (slides[parkIndices[parkId] - 1]) {
            slides[parkIndices[parkId] - 1].style.display = 'block';
        }

        // Ativa o dot atual (se existir)
        if (dots.length > 0 && dots[parkIndices[parkId] - 1]) {
            dots[parkIndices[parkId] - 1].classList.add('active');
        }
    };

    // -------------------------------------------------
    // Autoplay
    // -------------------------------------------------
    const startAutoSlide = (parkId, interval) => {
        // Limpa anterior se houver para evitar duplicidade
        if (parkTimers[parkId]) clearInterval(parkTimers[parkId]);

        parkTimers[parkId] = setInterval(() => {
            window.parkPlusSlides(parkId, 1);
        }, interval);
    };

    const resetTimer = (parkId) => {
        clearInterval(parkTimers[parkId]);
        startAutoSlide(parkId, 5000);
    };

    // Não precisamos mais do DOMContentLoaded aqui, 
    // pois o HTML é gerado dinamicamente depois.
})();