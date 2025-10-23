// Aguarda o documento carregar para rodar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // Pega todos os cabeçalhos de parque
    const parkHeaders = document.querySelectorAll(".park-header");

    parkHeaders.forEach(header => {
        // Adiciona um evento de clique em cada cabeçalho
        header.addEventListener("click", () => {
            
            // Encontra a lista de trilhas "irmã" deste cabeçalho
            const trailList = header.nextElementSibling;

            // Adiciona ou remove a classe 'open' para mostrar/esconder
            if (trailList && trailList.classList.contains("trail-list")) {
                trailList.classList.toggle("open");
            }
        });
    });

    // Bônus: Deixar o primeiro parque aberto por padrão
    const firstTrailList = document.querySelector(".trail-list");
    if (firstTrailList) {
        firstTrailList.classList.add("open");
    }

});