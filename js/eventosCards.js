// 1. Base de Dados dos Eventos
const dadosEventos = [
    {
        titulo: "Festival de Inverno",
        data: "12 a 28 de Julho",
        local: "Praça do Alto e Sesc",
        imagem: "img/eventos/festival-inverno.jpg", 
        descricao: "O evento mais charmoso da serra! Gastronomia, shows e muita cultura no frio de Terê.",
        link: "https://festivalsescdeinverno.com.br/programacoes/?localidade=TERES%C3%93POLIS" 
    },
    {
        titulo: "Feira do Produtor Rural",
        data: "Todos os Sábados",
        local: "Galpão do Vale",
        imagem: "img/eventos/feira-produtor.jpg",
        descricao: "Produtos frescos, orgânicos e artesanato local direto da roça para sua mesa.",
        link: "https://www.teresopolis.rj.gov.br/feport-2025-a-maior-feira-agropecuaria-de-teresopolis-retorna-com-shows-nacionais-valorizacao-da-cultura-local-e-do-produtor-rural-local/"
    },
    {
        titulo: "Serveja Teresópolis",
        data: "15 a 17 de Setembro",
        local: "Parque Regadas",
        imagem: "img/eventos/serveja.jpg",
        descricao: "O melhor das cervejas artesanais da região serrana, com food trucks e música ao vivo.",
        link: "https://teretotal.com.br/de-14-a-16-07-serveja-teresopolis-festival-da-cerveja/"
    },
    {
        titulo: "Jazz & Blues Festival",
        data: "Outubro/2025",
        local: "Vários locais",
        imagem: "img/eventos/jazz-blues.jpg",
        descricao: "Artistas nacionais e internacionais trazendo o melhor do instrumental para a cidade.",
        link: "https://www.sympla.com.br/evento/festival-jazz-e-blues-4-edicao/1928404?referrer=www.google.com&referrer=www.google.com&share_id=copiarlink"
    }
];

// 2. Função para criar o Card HTML
function criarCardEvento(evento) {
    // Se não tiver imagem, usa uma cinza padrão
    const imagem = evento.imagem || "https://via.placeholder.com/400x250?text=Evento+TereVerde";

    return `
        <div class="evento-card">
            <div class="evento-img-box">
                <img src="${imagem}" alt="${evento.titulo}">
                <div class="evento-data-badge">${evento.data}</div>
            </div>
            
            <div class="evento-info">
                <h3>${evento.titulo}</h3>
                <p class="evento-local"><i class="fa fa-map-marker"></i> ${evento.local}</p>
                <p class="evento-desc">${evento.descricao}</p>
                
                <a href="${evento.link}" class="btn-evento">Saiba Mais</a>
            </div>
        </div>
    `;
}

// 3. Renderização
function renderizarEventos() {
    const container = document.getElementById('eventos-container');
    if (container) {
        const html = dadosEventos.map(ev => criarCardEvento(ev)).join('');
        container.innerHTML = html;
    }
}

document.addEventListener('DOMContentLoaded', renderizarEventos);