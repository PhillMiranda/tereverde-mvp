// horarioFuncionamento.js
// Função auxiliar para comparar horários
function dentroDoHorario(inicio, fim) {
    const agora = new Date();
    const horaAtual = agora.getHours() + agora.getMinutes() / 60;
    const [hIni, mIni] = inicio.split(":").map(Number);
    const [hFim, mFim] = fim.split(":").map(Number);
    const horaInicio = hIni + mIni / 60;
    const horaFim = hFim + mFim / 60;
    return horaAtual >= horaInicio && horaAtual <= horaFim;
  }
  
  // Função principal
  function atualizarHorarios() {
    // Verifica horário geral do parque (07h às 16h)
    let statusParque = "fechado";
    if (dentroDoHorario("07:00", "16:00")) {
      statusParque = "aberto";
    }
  
    // Verifica horários específicos da Trilha do Sino
    let statusSino = "fora do horário";
    if (dentroDoHorario("07:00", "10:00")) {
      statusSino = "entrada permitida (bate e volta)";
    } else if (dentroDoHorario("10:00", "18:30")) {
      statusSino = "aguardando saída (bate e volta)";
    } else if (dentroDoHorario("07:00", "22:00")) {
      statusSino = "permitido apenas para pernoite";
    }
  
    // Atualiza o HTML com as informações
    const statusEl = document.getElementById("statusHorario");
    if (statusEl) {
      if (statusParque === "fechado") {
        statusEl.textContent = "Parque Fechado";
        statusEl.style.color = "#c0392b";
      } else {
        statusEl.textContent = `Parque Aberto — ${statusSino}`;
        statusEl.style.color = "#27ae60";
      }
    }
  
    // Integração com clima: se o clima indicar trilha fechada
    // (trilhaStatus vem do previsaoTempo.js)
    if (typeof trilhaStatus !== "undefined") {
      if (trilhaStatus === "fechada") {
        statusEl.textContent = "Trilha Fechada (chuva)";
        statusEl.style.color = "#c0392b";
      }
    }
  }
  
  // Executa ao carregar a página
  document.addEventListener("DOMContentLoaded", atualizarHorarios);
  
  // Atualiza a cada 5 minutos
  setInterval(atualizarHorarios, 5 * 60 * 1000);  