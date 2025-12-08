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

function enviarDadosGuia() {
    // 1. Pega os valores que o usuário digitou
    const nome = document.getElementById("guia-nome").value;
    const email = document.getElementById("guia-email").value;
    const telefone = document.getElementById("guia-telefone").value;
    const senha = document.getElementById("guia-senha").value;

    // 2. Validação simples (impede envio se faltar dados)
    if (nome === "" || email === "" || telefone === "") {
        alert("Por favor, preencha Nome, E-mail e Telefone para continuarmos.");
        return;
    }

    // 3. Monta o corpo da mensagem do e-mail
    // O %0D%0A é o código para pular linha em links de e-mail
    const assunto = "Solicitação de Novo Guia - " + nome;
    
    const mensagem = `Olá, gostaria de me cadastrar como guia no TerêVerde.%0D%0A%0D%0A` +
        `--- MEUS DADOS ---%0D%0A` +
        `Nome: ${nome}%0D%0A` +
        `E-mail: ${email}%0D%0A` +
        `WhatsApp: ${telefone}%0D%0A` +
        `Senha: ${senha || "Não informado"}%0D%0A%0D%0A` +
        `Aguardo o retorno para finalizar meu cadastro.`;

    // 4. Seu e-mail de destino
    const emailDestino = "phillipmiranda@outlook.com"; // <--- COLOQUE SEU E-MAIL AQUI

    // 5. Abre o cliente de e-mail
    window.location.href = `mailto:${emailDestino}?subject=${assunto}&body=${mensagem}`;

    // 6. Feedback para o usuário (Aviso visual)
    alert("Pronto Guia! Recebemos sua solicitação e em breve entraremos em contato pelo WhatsApp!");
    
    // Opcional: Limpar os campos e fechar o modal
    fecharModalAuth();
}