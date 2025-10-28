const url = "https://tereverde-mvp.vercel.app/api/clima?city=Teresopolis,BR";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Clima:", data);
    const tempMax = Math.round(data.main.temp_max);
    const tempMin = Math.round(data.main.temp_min);
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;

    document.querySelector(".temp-max").textContent = `${tempMax}° Máx.`;
    document.querySelector(".temp-min").textContent = `${tempMin}° Mín.`;
    document.querySelector(".descricao").textContent = desc;
    document.querySelector(".weather-icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  })
  .catch(error => {
    console.error("Erro ao obter clima:", error);
    document.querySelector(".descricao").textContent = "Não foi possível carregar o clima.";
  });