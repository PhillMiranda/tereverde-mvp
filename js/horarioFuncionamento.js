// horarioFuncionamento.js

// === Função auxiliar para comparar horários ===
function dentroDoHorario(inicio, fim) {
  const agora = new Date();
  const horaAtual = agora.getHours() + agora.getMinutes() / 60;
  const [hIni, mIni] = inicio.split(":").map(Number);
  const [hFim, mFim] = fim.split(":").map(Number);
  const horaInicio = hIni + mIni / 60;
  const horaFim = hFim + mFim / 60;
  return horaAtual >= horaInicio && horaAtual <= horaFim;
}

// === Regras automáticas por trilha ===
const regrasTrilhas = {
  "pedra do sino": {
    parque: { inicio: "07:00", fim: "16:00" },
    horarios: [
      { nome: "entrada permitida (bate e volta)", inicio: "07:00", fim: "10:00", cor: "#27ae60", corLetra: "#fff" },
      { nome: "aguardando saída (bate e volta)", inicio: "10:00", fim: "18:30", cor: "#f1c40f", corLetra: "#000" },
      { nome: "permitido apenas para pernoite", inicio: "07:00", fim: "22:00", cor: "#2980b9", corLetra: "#fff" }
    ]
  },
  "cartão postal": {
    parque: { inicio: "07:00", fim: "16:00" },
    horarios: [
      { nome: "aberta para visitação", inicio: "07:00", fim: "16:00", cor: "#27ae60", corLetra: "#fff" }
    ]
  },
  "caminho das orquídeas": {
    parque: { inicio: "07:00", fim: "16:00" },
    horarios: [
      { nome: "em manutenção", inicio: "00:00", fim: "23:59", cor: "#e67e22", corLetra: "#fff" }
    ]
  },
  "caminho da casa do Rodolpho": {
    parque: { inicio: "07:00", fim: "16:00" },
    horarios: [
      { nome: "em manutenção", inicio: "00:00", fim: "23:59", cor: "#e67e22", corLetra: "#fff" }
    ]
  }
};

// === Função principal ===
function atualizarHorarios() {
  const trilhas = document.querySelectorAll(".trail-list li");

  trilhas.forEach(li => {
    const nomeTrilha = li.querySelector("strong")?.textContent?.trim().toLowerCase() || "";
    const textoTrilha = li.querySelector("#textoTrilha");
    const corStatus = li.querySelector(".status-trilha");

    if (!textoTrilha || !corStatus || !nomeTrilha) return;

    const regras = Object.entries(regrasTrilhas).find(([nome]) => nomeTrilha.includes(nome));
    if (!regras) {
      textoTrilha.textContent = "Sem informações disponíveis";
      corStatus.style.backgroundColor = "#7f8c8d";
      textoTrilha.style.color = "#fff";
      return;
    }

    const [, config] = regras;
    const { parque, horarios } = config;

    // Verifica se o parque está aberto
    const parqueAberto = dentroDoHorario(parque.inicio, parque.fim);
    let mensagem = "";
    let cor = "#27ae60";
    let corLetra = "#fff";

    // Regra de clima (vem do previsaoTempo.js)
    if (typeof trilhaStatus !== "undefined" && trilhaStatus === "fechada") {
      mensagem = "Trilha Fechada devido ao clima (chuva)";
      cor = "#c0392b";
      corLetra = "#fff";
    } else if (!parqueAberto) {
      mensagem = "Trilha Fechada (fora do horário do parque)";
      cor = "#c0392b";
    } else {
      // Busca horário correspondente dentro da faixa configurada
      const regraAtual = horarios.find(h => dentroDoHorario(h.inicio, h.fim));
      if (regraAtual) {
        mensagem = regraAtual.nome;
        cor = regraAtual.cor;
        corLetra = regraAtual.corLetra;
      } else {
        mensagem = "Trilha Fechada (fora do horário de entrada)";
        cor = "#c0392b";
      }
    }

    // Atualiza HTML
    textoTrilha.textContent = mensagem.charAt(0).toUpperCase() + mensagem.slice(1);
    textoTrilha.style.color = corLetra;
    corStatus.style.backgroundColor = cor;
  });
}

// Atualiza ao carregar
document.addEventListener("DOMContentLoaded", atualizarHorarios);

// Atualiza a cada 5 minutos
setInterval(atualizarHorarios, 5 * 60 * 1000);
