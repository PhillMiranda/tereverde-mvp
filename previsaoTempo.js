const apiKey = "67a3a6c808d38b9776064da4cda09100";
    const city = "Teresopolis,BR";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const temp = Math.round(data.main.temp);
        const tempMin = Math.round(data.main.temp_min);
        const tempMax = Math.round(data.main.temp_max);
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;

        document.querySelector('.previsao-barra__frame--info__temperature--value').textContent = `${tempMax}° Máx.`;
        document.querySelector('.previsao-barra__frame--info__temperature--value-min').textContent = `${tempMin}° Mín.`;
        document.querySelector('.previsao-barra__frame--info__temperature--desc').textContent = desc;
        document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      })
      .catch(error => {
        console.error('Erro ao obter clima:', error);
        document.querySelector('.previsao-barra__frame--info__temperature--desc').textContent = "Não foi possível carregar o clima.";
      });