// 1. Dados dos guias
const dadosGuias = [
    {
        nome: "Romulo Miranda",
        tipo: "Guia alpinista",
        imagem: "img/romulo-miranda.jpg",
        links: {
            dribbble: "#",
            twitter: "#",
            linkedin: "#",
            facebook: "#"
        },
        contato: "#"
    },
    {
        nome: "Rudolfo Irmão",
        tipo: "Guia alpinista",
        imagem: "img/rudolfo-irmao.jpg",
        links: {
            dribbble: "#",
            twitter: "#",
            linkedin: "#",
            facebook: "#"
        },
        contato: "#"
    },
    {
        nome: "Senhor das Trilhas",
        tipo: "Guia de trilhas",
        imagem: "img/senhor-trilhas.jpg",
        links: {
            dribbble: "#",
            twitter: "#",
            linkedin: "#",
            facebook: "#"
        },
        contato: "#"
    }    
    // Adicione mais guias aqui
];

// 2. Função para criar o HTML do cartão
function criarCardGuia(guia) {
    return `
        <div class="cardguia">
            <img src="${guia.imagem}" alt="${guia.nome}" style="width:100%">
            <h1>${guia.nome}</h1>
            <p class="tipoguia">${guia.tipo}</p>
            <div style="margin: 24px 0;">
                <a href="${guia.links.dribbble}"><i class="fa fa-dribbble iconesguia"></i></a>
                <a href="${guia.links.twitter}"><i class="fa fa-twitter iconesguia"></i></a>
                <a href="${guia.links.linkedin}"><i class="fa fa-linkedin iconesguia"></i></a>
                <a href="${guia.links.facebook}"><i class="fa fa-facebook iconesguia"></i></a>
            </div>
            <p>
                <button class="contatobtn" onclick="window.location.href='${guia.contato}'">Entre em contato</button>
            </p>
        </div>
    `;
}

// 3. Função principal para renderizar os cartões
function renderizarGuias() {
    const container = document.getElementById('guia-cards-container');
    if (container) {
        // Mapeia o array de dados para um array de strings HTML e junta tudo
        const html = dadosGuias.map(criarCardGuia).join('');
        container.innerHTML = html;
    } else {
        console.error("Contêiner de guias não encontrado (ID: guia-cards-container)");
    }
}

// 4. Executa a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', renderizarGuias);