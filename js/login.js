// Variáveis
var modalAuth = document.getElementById('id_auth');
var slider = document.getElementById('sliderAuth');

// --- Funções de Abertura ---

// Abre o modal já na tela de Login (Posição 0)
function abrirModalLogin() {
    modalAuth.style.display = "block";
    animarParaLogin(); // Garante que está na esquerda
}

// Abre o modal já na tela de Cadastro (Posição -50%)
function abrirModalCadastro() {
    modalAuth.style.display = "block";
    animarParaCadastro(); // Garante que está na direita
}

// Fecha o modal
function fecharModalAuth() {
    modalAuth.style.display = "none";
}

// --- Funções de Animação (Slide) ---

// Desliza para a Esquerda (Mostra Cadastro)
function animarParaCadastro() {
    slider.classList.add("slide-active");
}

// Desliza para a Direita (Mostra Login)
function animarParaLogin() {
    slider.classList.remove("slide-active");
}

// --- Fechar ao clicar fora ---
window.onclick = function(event) {
    if (event.target == modalAuth) {
        fecharModalAuth();
    }
}