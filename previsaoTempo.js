// URL do seu endpoint proxy hospedado na Vercel
const url = "https://tereverde-mvp.vercel.app/api/clima?city=Teresopolis,BR";

// Variável global para status de trilha
let trilhaStatus = "aberta";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const tempMax = Math.round(data.main.temp_max);
        const tempMin = Math.round(data.main.temp_min);
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;
        const condicao = data.weather[0].main.toLowerCase();

        // Atualiza elementos na tela
        document.querySelector(".temp-max").textContent = `${tempMax}° Máx.`;
        document.querySelector(".temp-min").textContent = `${tempMin}° Mín.`;
        document.querySelector(".descricao").textContent = desc;
        document.querySelector(".weather-icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        // Define status da trilha conforme condição
        if (condicao.includes("rain") || condicao.includes("storm") || condicao.includes("drizzle")) {
            trilhaStatus = "fechada";
        } else if (condicao.includes("snow")) {
            trilhaStatus = "parcial";
        } else {
            trilhaStatus = "aberta";
        }

        // Exemplo: exibir no console ou usar no site
        console.log(`Status da trilha: ${trilhaStatus}`);
        const textoTrilha = document.getElementById("textoTrilha");

        if (trilhaStatus === "fechada") {
            textoTrilha.textContent = "Trilha Fechada devido às condições climáticas";
            textoTrilha.style.color = "#c0392b";
        } else if (trilhaStatus === "parcial") {
            textoTrilha.textContent = "Trilha Parcialmente Acessível";
            textoTrilha.style.color = "#f1c40f";
        } else {
            textoTrilha.textContent = "Trilha Aberta para visitação";
            textoTrilha.style.color = "#27ae60";
        }
    })
    .catch(error => {
        console.error("Erro ao obter clima:", error);
        document.querySelector(".descricao").textContent = "Não foi possível carregar o clima.";
    });
