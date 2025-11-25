// Variável global para armazenar o telefone do guia selecionado
let telefoneAtualGuia = "";

// 1. Dados dos guias (Agora com lista de imagens)
const dadosGuias = [
    {
        nome: "Romulo Miranda",
        tipo: "Guia alpinista",
        status: "Ativo",
        // Coloque aqui todas as fotos desse guia
        imagens: [
            "img/guias/guia1/romulo-miranda.png",
            "img/guias/guia1/guia-romulo-1.png", 
            "img/guias/guia1/guia-romulo-2.png",
            "img/guias/guia1/guia-romulo-3.png",
            "img/guias/guia1/guia-romulo-4.png",
            "img/guias/guia1/guia-romulo-5.png"
        ],
        links: {
            instagram: "https://www.instagram.com/romulomiranda2025/",
            linkedin: "https://www.linkedin.com/in/romulo-miranda-39b197275/",
            facebook: "https://www.facebook.com/perrfilassessoria0"
        },
        telefone: "5521987161707",
        servico: "Guias de Trilhas e Aulas de Escalada",
        emailLead: "romulo@example.com"
    },
    {
        nome: "Leo Rodrigues",
        tipo: "Guia alpinista e de trilhas",
        status: "Inativo",
        imagens: [
            "img/guias/guia2/leo-aventureiro.png",
            "img/guias/guia2/guia-leo-1.png",
            "img/guias/guia2/guia-leo-2.png",
            "img/guias/guia2/guia-leo-3.png"
        ],
        links: {
            instagram: "https://www.instagram.com/leo_rodriguesxt/",
            linkedin: "https://www.linkedin.com/in/leo_rodriguesxt/",
            facebook: "https://www.facebook.com/leo_rodriguesxt0"
        },
        telefone: "5521987161707",
        servico: "Aulas de Escalada e Guias de Trilhas",
        emailLead: "leoridrig@example.com"
    },
    {
        nome: "Matheus Edgard",
        tipo: "Guia de trilhas",
        status: "Ativo",
        imagens: [
            "img/guias/guia3/matheusedgard.png",
            "img/guias/guia3/guia-matheusedgard-1.png",
            "img/guias/guia3/guia-matheusedgard-2.png",
            "img/guias/guia3/guia-matheusedgard-3.png",
            "img/guias/guia3/guia-matheusedgard-4.png"            
        ],
        links: {
            instagram: "https://www.instagram.com/matheusedgard/",
            linkedin: "https://www.linkedin.com/in/matheusedgard/",
            facebook: "https://www.facebook.com/matheusedgard"
        },
        telefone: "5521987161707",
        servico: "Guia de Trilhas e Aventuras",
        emailLead: "matheusedgard@example.com"
    }    
];

// 2. Função para criar o HTML do cartão (Versão FINAL: Carrossel + Clique na Imagem)
function criarCardGuia(guia, index) {
    // 1. Gera as tags <img> para cada imagem do array
    const imagensHTML = guia.imagens.map((imgSrc, i) => {
        // A primeira imagem ganha a classe 'ativa' para aparecer por padrão
        const classe = i === 0 ? 'guia-img ativa' : 'guia-img';
        return `<img src="${imgSrc}" class="${classe}" alt="${guia.nome}">`;
    }).join('');

    return `
        <div class="cardguia" 
             onmouseenter="iniciarCarrossel(this)" 
             onmouseleave="pararCarrossel(this)">
            
            <div class="img-container-guia">
                <a href="#" onclick="abrirModalImagem(event, '${guia.imagens[0]}')">
                    ${imagensHTML}
                </a>
            </div>

            <h1>${guia.nome}</h1>
            <p class="tipoguia">${guia.tipo}</p>
            <p style="color: white; font-size: 16px;">${guia.servico}</p>
            <p style="color: ${guia.status === 'Ativo' ? 'var(--status-green)' : 'var(--status-red)'}; font-weight: bold;">Status: ${guia.status}</p>

            <div style="margin: 24px 0;">
                <a href="${guia.links.instagram}"><i class="fa fa-instagram iconesguia"></i></a>
                <a href="${guia.links.linkedin}"><i class="fa fa-linkedin iconesguia"></i></a>
                <a href="${guia.links.facebook}"><i class="fa fa-facebook iconesguia"></i></a>
            </div>
            <p>
                <button class="contatobtn" onclick="abrirModalContato('${guia.telefone}')">Entre em contato</button>
            </p>
        </div>
    `;
}

// 3. Função para abrir o modal
function abrirModalContato(telefone) {
    telefoneAtualGuia = telefone;
    document.getElementById('modal-contato').style.display = 'block';
}

// 4. Função para enviar Whatsapp
function enviarWhatsapp(event) {
    event.preventDefault(); 
    const nome = document.getElementById('form-nome').value;
    const parque = document.getElementById('form-parque').value;
    const mensagem = document.getElementById('form-mensagem').value;
    const textoFinal = `Olá! Me chamo *${nome}*.%0ATenho interesse no parque: *${parque}*.%0A%0A${mensagem}`;
    const linkWhatsapp = `https://wa.me/${telefoneAtualGuia}?text=${textoFinal}`;
    window.open(linkWhatsapp, '_blank');
    document.getElementById('modal-contato').style.display = 'none';
}

function renderizarGuias() {
    const container = document.getElementById('guia-cards-container');
    if (container) {
        // Passamos o index também caso precise no futuro
        const html = dadosGuias.map((guia, index) => criarCardGuia(guia, index)).join('');
        container.innerHTML = html;
    }
}

document.addEventListener('DOMContentLoaded', renderizarGuias);

// Modal fecha ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('modal-contato');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const modalImagem = document.getElementById("modal-imagem");
const imgModal = document.getElementById("img01");
const legendaModal = document.getElementById("legenda");

// Função para abrir o modal
function abrirModalImagem(event, imgSrc) {
    // Impede que o link vá para a próxima página ou recarregue
    event.preventDefault(); 
    
    modalImagem.style.display = "block";
    
    // Define a fonte da imagem para o caminho completo
    imgModal.src = imgSrc; 
    
    // Opcional: define a legenda com o nome da imagem
    const nomeGuia = imgSrc.split('/').pop().split('.')[0]; 
    legendaModal.innerHTML = nomeGuia.replace(/-/g, ' ');
}

// Função para fechar o modal
function fecharModalImagem() {
    modalImagem.style.display = "none";
}

// Fechar modal ao clicar fora (reutilizando a lógica global)
window.onclick = function(event) {
    const modalContato = document.getElementById('modal-contato');
    
    if (event.target == modalContato) {
        modalContato.style.display = "none";
    }
    
    if (event.target == modalImagem) {
        fecharModalImagem();
    }
}