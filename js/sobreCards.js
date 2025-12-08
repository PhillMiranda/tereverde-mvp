// js/sobreCards.js

// 1. Dados da equipe
const dadosEquipe = [
    {
        nome: "Phillip Miranda",
        cargo: "Programador Front-end",
        especialista: "Designer UI",
        foto: "img/quem_somos/phill.png", 
        contato: "phillipmiranda@outlook.com",
        telefone: "21 98716-1707"
    },
    {
        nome: "Pedro Ventura",
        cargo: "Analista de requisitos",
        especialista: "Designer UX",
        foto: "img/quem_somos/pedro.png",
        contato: "pedro@gmail.com",
        telefone: "21 98719-0607"
    },
    {
        nome: "Gustavo Toledo",
        cargo: "Expert em Pitch de Vendas",
        especialista: "Marketing Digital",
        foto: "img/quem_somos/gustavo.png",
        contato: "gustavo@gmail.com",
        telefone: "21 97690-8729"
    },
    {
        nome: "Rodolpho Macario",
        cargo: "QA",
        especialista: "Testes Automatizados",
        foto: "img/quem_somos/rodolpho.png",
        contato: "rodolpho@gmail.com",
        telefone: "21 99238-1692"
    }    
];

// 2. Função para criar o HTML do cartão
function criarCardEquipe(membro) {
    // AQUI MUDEI O ONCLICK PARA UMA NOVA FUNÇÃO EXCLUSIVA 'abrirModalEquipe'
    return `
        <div class="sobre-card">
            <div class="sobre-img-box">
                <img src="${membro.foto}" class="sobre-img" alt="${membro.nome}" onclick="abrirModalEquipe(event, '${membro.foto}')">
            </div>

            <div class="sobre-info">
                <h3 class="sobre-nome">${membro.nome}</h3>
                <p class="sobre-cargo">${membro.cargo}<br>
                ${membro.especialista}</p>
                
                <div class="sobre-contato">
                    <p><i class="fa fa-envelope"></i> ${membro.contato}</p>
                    <p><i class="fa fa-whatsapp"></i> ${membro.telefone}</p>
                </div>
            </div>
        </div>
    `;
}

// 3. Renderização
function renderizarEquipe() {
    const container = document.getElementById('equipe-cards-container');
    if (container) {
        const html = dadosEquipe.map(membro => criarCardEquipe(membro)).join('');
        container.innerHTML = html;
    } else {
        console.warn("Atenção: Container 'equipe-cards-container' não encontrado na aba Sobre.");
    }
}

// Inicializa quando a tela carregar
document.addEventListener('DOMContentLoaded', renderizarEquipe);

function abrirModalEquipe(event, imgSrc) {
    if(event) event.preventDefault(); 
    
    const modal = document.getElementById("modal-imagem");
    const imgElement = document.getElementById("img01");
    
    if(modal && imgElement) {
        modal.style.display = "block";
        imgElement.src = imgSrc; 
    }
}