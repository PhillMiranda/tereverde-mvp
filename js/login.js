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

/* Função para abrir/fechar o menu mobile */
function toggleMenuMobile() {
    var menu = document.getElementById("mobileMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Fechar o menu se clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.hamburger-icon') && !event.target.matches('.fa-bars')) {
        var dropdowns = document.getElementsByClassName("mobile-menu-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
    // Mantém a lógica do modal de login existente
    if (event.target == document.getElementById('id_auth')) {
        document.getElementById('id_auth').style.display = "none";
    }
}