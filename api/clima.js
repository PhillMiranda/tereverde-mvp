export default async function handler(req, res) {
    const apiKey = "67a3a6c808d38b9776064da4cda09100"; // key da OpenWeatherMap
    const city = req.query.city || "Teresopolis,BR";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=pt_br`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Erro ao obter clima" });
    }
  }  