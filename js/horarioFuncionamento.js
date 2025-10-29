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
  // Pega o container da trilha do Sino
  const trilhaSino = document.querySelector('.trail-list li strong');
  const textoTrilha = document.getElementById("textoTrilha");
  const corStatus = document.querySelector('.status-trilha');
  if (!textoTrilha || !trilhaSino) return;

  // Verifica se estamos lidando com a trilha do Sino
  const nomeTrilha = trilhaSino.textContent.trim().toLowerCase();
  if (!nomeTrilha.includes("pedra do sino")) {
    // Para as outras trilhas, não faz nada (mantém status estático)
    return;
  }

  // ------------------------
  // Lógica exclusiva da Trilha da Pedra do Sino
  // ------------------------

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
  } else {
    statusSino = "fora do horário de entrada";
  }

  // Integra clima + horário
  let mensagem = "";
  let cor = "#27ae60"; // verde padrão
  let corLetra = "#fff"; // branco padrão

  if (typeof trilhaStatus !== "undefined" && trilhaStatus === "fechada") {
    mensagem = "Trilha Fechada devido ao clima (chuva)";
    cor = "#c0392b";
  } else if (statusParque === "fechado") {
    mensagem = "Trilha Fechada (fora do horário do parque)";
    cor = "#c0392b";
  } else if (statusSino.includes("entrada permitida")) {
    mensagem = "Trilha Aberta (entrada permitida até 10h)";
    cor = "#27ae60";
  } else if (statusSino.includes("aguardando saída")) {
    mensagem = "Trilha em andamento (aguardando saída até 18h30)";
    cor = "#f1c40f";
    corLetra = "#000";
  } else if (statusSino.includes("pernoite")) {
    mensagem = "Acesso apenas para pernoite";
    cor = "#2980b9";
  } else {
    mensagem = "Trilha Fechada (fora do horário de entrada)";
    cor = "#c0392b";
  }

  // Atualiza o HTML apenas da trilha do Sino
  textoTrilha.textContent = mensagem;
  textoTrilha.style.color = corLetra;
  corStatus.style.backgroundColor = cor;
}

// Atualiza ao carregar
document.addEventListener("DOMContentLoaded", atualizarHorarios);

// Atualiza a cada 5 minutos
setInterval(atualizarHorarios, 5 * 60 * 1000);