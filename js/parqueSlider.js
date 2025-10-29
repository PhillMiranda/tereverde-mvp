/* -------------------------------------------------
   parqueSlider.js – controla sliders independentes
   dentro de cada .park-slider
   ------------------------------------------------- */

   (() => {
    // Guarda o índice atual de cada parque (chave = data-park)
    const parkIndices = {};
    const parkTimers  = {};

    // -------------------------------------------------
    // Inicializa todos os sliders que existirem
    // -------------------------------------------------
    const initAllParkSliders = (autoInterval = 5000) => {
        const parkContainers = document.querySelectorAll('.park-slider');

        parkContainers.forEach(container => {
            const parkId = container.dataset.park;          // "1", "2", "3", …
            if (!parkId) return;                           // segurança

            parkIndices[parkId] = 1;                        // começa no slide 1
            showParkSlide(parkId, 1);                      // exibe o primeiro slide
            startAutoSlide(parkId, autoInterval);          // autoplay
        });
    };

    // -------------------------------------------------
    // Funções de navegação (chamadas pelos botões)
    // -------------------------------------------------
    window.parkPlusSlides = (parkId, n) => {
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
    // Exibe o slide correto dentro do container do parque
    // -------------------------------------------------
    const showParkSlide = (parkId, n) => {
        const container = document.querySelector(`.park-slider[data-park="${parkId}"]`);
        if (!container) return;

        const slides = container.querySelectorAll('.park-slide');
        const dots   = container.querySelectorAll('.park-indicadores');

        if (n > slides.length) parkIndices[parkId] = 1;
        if (n < 1) parkIndices[parkId] = slides.length;

        slides.forEach(s => s.style.display = 'none');
        dots.forEach(d => d.classList.remove('active'));

        slides[parkIndices[parkId] - 1].style.display = 'block';
        dots[parkIndices[parkId] - 1].classList.add('active');
    };

    // -------------------------------------------------
    // Autoplay (setInterval) por parque
    // -------------------------------------------------
    const startAutoSlide = (parkId, interval) => {
        parkTimers[parkId] = setInterval(() => {
            parkPlusSlides(parkId, 1);
        }, interval);
    };

    const resetTimer = (parkId) => {
        clearInterval(parkTimers[parkId]);
        startAutoSlide(parkId, 5000);   // mesmo intervalo usado na inicialização
    };

    // -------------------------------------------------
    // Executa tudo quando o DOM estiver pronto
    // -------------------------------------------------
    document.addEventListener('DOMContentLoaded', () => {
        initAllParkSliders(5000);   // 5 s entre slides – ajuste se quiser
    });
})();