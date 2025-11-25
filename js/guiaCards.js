// 1. Dados dos guias
const dadosGuias = [
    {
        nome: "Romulo Miranda",
        tipo: "Guia alpinista",
        status: "Ativo",
        imagem: "img/guias/guia1/romulo-miranda.png",
        links: {
            instagram: "https://www.instagram.com/romulomiranda2025/",
            linkedin: "https://www.linkedin.com/in/romulo-miranda-39b197275/",
            facebook: "https://www.facebook.com/perrfilassessoria0"
        },
        contato: "https://wa.me/5521987161707?text=Queria%20agendar%20um%20dia%20para%20realizar%20uma%20trilha.%20Voc%C3%AA%20teria%20disponibilidade%3F",
        servico: "Guias de Trilhas e Aulas de Escalada",
        emailLead: "romulo@example.com"
    },
    {
        nome: "Leo Rodrigues",
        tipo: "Guia alpinista e de trilhas",
        status: "Inativo",
        imagem: "img/guias/guia2/leo-aventureiro.png",
        links: {
            instagram: "https://www.instagram.com/leo_rodriguesxt/",
            linkedin: "https://www.linkedin.com/in/leo_rodriguesxt/",
            facebook: "https://www.facebook.com/leo_rodriguesxt0"
        },
        contato: "https://wa.me/5521987161707?text=Queria%20agendar%20um%20dia%20para%20realizar%20uma%20trilha.%20Voc%C3%AA%20teria%20disponibilidade%3F",
        servico: "Aulas de Escalada e Guias de Trilhas",
        emailLead: "leoridrig@example.com"
    },
    {
        nome: "Matheus Edgard",
        tipo: "Guia de trilhas",
        status: "Ativo",
        imagem: "img/guias/guia3/matheusedgard.png",
        links: {
            instagram: "https://www.instagram.com/matheusedgard/",
            linkedin: "https://www.linkedin.com/in/matheusedgard/",
            facebook: "https://www.facebook.com/matheusedgard"
        },
        contato: "https://wa.me/5521987161707?text=Queria%20agendar%20um%20dia%20para%20realizar%20uma%20trilha.%20Voc%C3%AA%20teria%20disponibilidade%3F",
        servico: "Guia de Trilhas e Aventuras",
        emailLead: "matheusedgard@example.com"
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
            <p style="color: white; fontSize: "16px" }}>${guia.servico}</p>
            <p style="color: ${guia.status === 'Ativo' ? 'var(--status-green)' : 'var(--status-red)'}; font-weight: bold;">Status: ${guia.status}</p>

            <div style="margin: 24px 0;">
                <a href="${guia.links.instagram}"><i class="fa fa-instagram iconesguia"></i></a>
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