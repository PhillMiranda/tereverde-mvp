// URL do endpoint
const url = "https://tereverde-mvp.vercel.app/api/clima?city=Teresopolis,BR";

// Define a variável GLOBALMENTE para que o outro arquivo consiga ler
window.trilhaStatus = "aberta"; 

fetch(url)
    .then(response => response.json())
    .then(data => {
        const tempMax = Math.round(data.main.temp_max);
        const tempMin = Math.round(data.main.temp_min);
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;
        const condicao = data.weather[0].main.toLowerCase();

        // 1. Atualiza apenas o cabeçalho do clima (Isso continua igual)
        const elMax = document.querySelector(".temp-max");
        const elMin = document.querySelector(".temp-min");
        const elDesc = document.querySelector(".descricao");
        const elIcon = document.querySelector(".weather-icon");

        if(elMax) elMax.textContent = `${tempMax}° Máx.`;
        if(elMin) elMin.textContent = `${tempMin}° Mín.`;
        if(elDesc) elDesc.textContent = desc;
        if(elIcon) elIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        // 2. Define status GLOBAL da trilha
        if (condicao.includes("rain") || condicao.includes("storm") || condicao.includes("drizzle")) {
            window.trilhaStatus = "fechada";            
        } else {
            window.trilhaStatus = "aberta";            
        }

        console.log(`Clima carregado. Status global: ${window.trilhaStatus}`);

        // 3. AVISA o outro script para atualizar as cores das trilhas IMEDIATAMENTE
        if (window.atualizarStatusTrilhas) {
            window.atualizarStatusTrilhas();
        }
    })
    .catch(error => {
        console.error("Erro ao obter clima:", error);
        const elDesc = document.querySelector(".descricao");
        if(elDesc) elDesc.textContent = "Não foi possível carregar o clima.";
    });