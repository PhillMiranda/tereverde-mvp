// Aguarda o documento carregar para rodar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // Pega todos os cabeçalhos de parque
    const parkHeaders = document.querySelectorAll(".park-header");

    parkHeaders.forEach(header => {
        // Adiciona um evento de clique em cada cabeçalho
        header.addEventListener("click", () => {
            
            // O card que contém o header (e, portanto, a lista + o slider)
            const card = header.closest(".park-card");
            if (card) {
                card.classList.toggle("open");   // abre ou fecha tudo de uma vez
            }
        });
    });

    // Bônus: Deixar o primeiro parque aberto por padrão
    const firstTrailList = document.querySelector(".park-card");
    if (firstTrailList) {
        firstTrailList.classList.add("open");
    }

});