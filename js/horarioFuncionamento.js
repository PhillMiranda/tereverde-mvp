// === 1. Base de Dados Completa ===
const dadosParques = [
  {
      id: "parnaso",
      titulo: "Parque Nacional da Serra dos Órgãos (PARNASO)",
      horario: { inicio: "07:00", fim: "16:00" },
      descricao: `
          <p>O Parque Nacional da Serra dos Órgãos <strong>(PARNASO)</strong> é uma unidade de conservação
          de 19.855 hectares localizada na Região Serrana do Rio de Janeiro.</p>
          <br>
          <p>Os aspectos mais relevantes são:</p>
          <div style="text-indent: 20px;">
              <p><strong>Importância Histórica:</strong> Criado em 1939, terceiro parque mais antigo do Brasil.</p>
              <p><strong>Rede de Trilhas:</strong> Possui a maior rede de trilhas do Brasil (mais de 200km).</p>
              <p><strong>Biodiversidade:</strong> Abriga mais de 2.800 espécies de plantas.</p>
          </div>
      `,
      temSlider: true,
      imagens: [
          "img/parques/parque_nacional/PARNASO_1.jpg",
          "img/parques/parque_nacional/PARNASO_2.jpg",
          "img/parques/parque_nacional/PARNASO_3.jpg",
          "img/parques/parque_nacional/PARNASO_4.jpg",
          "img/parques/parque_nacional/PARNASO_5.jpg"
      ],
      trilhas: [
          {
              nome: "Trilha da Pedra do Sino",
              dificuldade: "Alta",
              regraHorarios: [
                  { nome: "Entrada permitida (bate e volta)", inicio: "07:00", fim: "10:00", cor: "#27ae60", corLetra: "#fff" },
                  { nome: "Aguardando saída", inicio: "10:00", fim: "18:30", cor: "#f1c40f", corLetra: "#000" },
                  { nome: "Permitido apenas para pernoite", inicio: "07:00", fim: "22:00", cor: "#2980b9", corLetra: "#fff" }
              ],
              textoExtra: "Entrada (07h às 10h), Saída (até 18h30)"
          },
          {
              nome: "Trilha Cartão Postal",
              dificuldade: "Média",
              regraHorarios: [{ nome: "Aberta para visitação", inicio: "07:00", fim: "16:00", cor: "#27ae60", corLetra: "#fff" }]
          },
          {
              nome: "Caminho das Orquídeas",
              dificuldade: "Baixa",
              regraHorarios: [{ nome: "Em manutenção", inicio: "00:00", fim: "23:59", cor: "#e67e22", corLetra: "#fff" }]
          }
      ]
  },
  {
      id: "tres_picos",
      titulo: "Parque Estadual dos Três Picos (PETP)",
      horario: { inicio: "08:00", fim: "17:00" },
      descricao: "<p>O maior parque estadual do Rio de Janeiro, com diversas formações rochosas impressionantes.</p>", 
  temSlider: true,
  imagens: [
    "img/parques/parque_tres_picos/3PICOS_1.jpg",
    "img/parques/parque_tres_picos/3PICOS_2.jpg",
    "img/parques/parque_tres_picos/3PICOS_3.jpg",
    "img/parques/parque_tres_picos/3PICOS_4.jpg",
    "img/parques/parque_tres_picos/3PICOS_5.jpg",
    "img/parques/parque_tres_picos/3PICOS_6.jpg"
  ],
      trilhas: [
          {
              nome: "Trilha da Caixa de Fósforo",
              dificuldade: "Média",
              regraHorarios: [{ nome: "Aberta para visitação", inicio: "08:00", fim: "17:00", cor: "#e67e22", corLetra: "#fff" }]
          },
          {
              nome: "Trilha Capacete",
              dificuldade: "Baixa",
              regraHorarios: [{ nome: "Aberta para visitação", inicio: "08:00", fim: "17:00", cor: "#27ae60", corLetra: "#fff" }]
          },
          {
              nome: "Trilha da Cabeça do Dragão",
              dificuldade: "Alta",
              regraHorarios: [{ nome: "Aberta para visitação", inicio: "08:00", fim: "17:00", cor: "#27ae60", corLetra: "#fff" }]
          },
          {
              nome: "Trilha Pico dos Três Municípios",
              dificuldade: "Média",
              regraHorarios: [{ nome: "Aberta para visitação", inicio: "08:00", fim: "17:00", cor: "#27ae60", corLetra: "#fff" }]
          }
      ]
  },
  {
      id: "montanhas",
      titulo: "Parque Natural Municipal Montanhas de Teresópolis",
      horario: { inicio: "08:00", fim: "17:00" },
      descricao: "<p>Unidade de conservação municipal que abriga a famosa Pedra da Tartaruga.</p>",
      temSlider: true,
      imagens: [
          "img/parques/parque_montanhas/MONTANHAS (1).png",
          "img/parques/parque_montanhas/MONTANHAS (2).png",
          "img/parques/parque_montanhas/MONTANHAS (3).png"
      ],
      trilhas: [
          {
              nome: "Trilha Pedra Alpina",
              dificuldade: "Alta",
              regraHorarios: [{ nome: "Aberta para visitação", inicio: "08:00", fim: "17:00", cor: "#e67e22", corLetra: "#fff" }]
          },
          {
              nome: "Trilha Jacu",
              dificuldade: "Baixa",
              regraHorarios: [{ nome: "Aberta para visitação", inicio: "08:00", fim: "17:00", cor: "#27ae60", corLetra: "#fff" }]
          },
          {
              nome: "Trilha Tangará",
              dificuldade: "Baixa",
              regraHorarios: [{ nome: "Aberta para visitação", inicio: "08:00", fim: "17:00", cor: "#27ae60", corLetra: "#fff" }]
          },
          {
              nome: "Trilha Pedra da Tartaruga",
              dificuldade: "Baixa",
              regraHorarios: [{ nome: "Aberta para visitação", inicio: "08:00", fim: "17:00", cor: "#27ae60", corLetra: "#fff" }]
          }
      ]
  }
];

// === 2. Função Auxiliar de Tempo ===
function dentroDoHorario(inicio, fim) {
  const agora = new Date();
  const horaAtual = agora.getHours() + agora.getMinutes() / 60;
  const [hIni, mIni] = inicio.split(":").map(Number);
  const [hFim, mFim] = fim.split(":").map(Number);
  const horaInicio = hIni + mIni / 60;
  const horaFim = hFim + mFim / 60;
  return horaAtual >= horaInicio && horaAtual <= horaFim;
}

// === 3. Gerar HTML Dinamicamente ===
function renderizarParques() {
  const container = document.getElementById("container-parques-dinamico");
  if (!container) return;

  let htmlCompleto = "";

  dadosParques.forEach(parque => {
      // Slider
      let htmlSlider = "";
      if (parque.temSlider && parque.imagens && parque.imagens.length > 0) {
          const slides = parque.imagens.map(img => `
              <div class="park-slide fade">
                  <img src="${img}" alt="Imagem do parque">
              </div>
          `).join("");
          htmlSlider = `
              <section class="park-slider" data-park="${parque.id}">
                  <div class="slideshow-container">
                      ${slides}
                      <a class="prev" onclick="event.stopPropagation(); parkPlusSlides('${parque.id}', -1)">&#10094;</a>
                      <a class="next" onclick="event.stopPropagation(); parkPlusSlides('${parque.id}', 1)">&#10095;</a>
                  </div>
              </section>
          `;
      }

      // Descrição
      let htmlDescricao = "";
      if (parque.descricao) {
          htmlDescricao = `
              <div class="col trail-list" style="color:var(--text-black); text-indent: 20px; border-bottom: none;">
                  ${parque.descricao}
              </div>
          `;
      }

      // Trilhas
      let listaTrilhasHtml = "";
      if (parque.trilhas) {
          listaTrilhasHtml = parque.trilhas.map(trilha => {
              const extra = trilha.textoExtra ? `<br><small>${trilha.textoExtra}</small>` : "";
              const infoDificuldade = trilha.dificuldade ? ` <span style="font-weight:normal; font-size:0.9em">(Nível: ${trilha.dificuldade})</span>` : "";

              return `
                  <li data-trilha-nome="${trilha.nome}">
                      <span><strong>${trilha.nome}</strong>${infoDificuldade}${extra}</span>
                      <div class="status-trilha">
                          <span class="textoTrilha">Carregando...</span>
                      </div>
                  </li>
              `;
          }).join("");
      }

      // Card
      htmlCompleto += `
          <div class="park-card" id="card-${parque.id}">
              <div class="park-header" onclick="toggleAccordion('${parque.id}')">
                  <h3>${parque.titulo} <span style="float:right; font-size:0.8em;">&#9660;</span></h3>
              </div>
              ${htmlSlider}
              ${htmlDescricao}
              <div class="horario-trilha" style="color:var(--text-black);">
                  <p><strong>Horário do Parque:</strong> ${parque.horario.inicio} às ${parque.horario.fim}</p>
              </div>
              <ul class="trail-list" style="color:var(--text-black);">
                  ${listaTrilhasHtml}
              </ul>
          </div>
      `;
  });

  container.innerHTML = htmlCompleto;
  atualizarStatusTrilhas();
  if (window.initAllParkSliders) window.initAllParkSliders();
}

// === 4. Accordion ===
function toggleAccordion(idParque) {
  const card = document.getElementById(`card-${idParque}`);
  if (card) card.classList.toggle("open");
}

// === 5. Atualização de Status (TORNADA GLOBAL) ===
window.atualizarStatusTrilhas = function() {
  dadosParques.forEach(parque => {
      const parqueAberto = dentroDoHorario(parque.horario.inicio, parque.horario.fim);

      if (parque.trilhas) {
          parque.trilhas.forEach(trilha => {
              const li = document.querySelector(`li[data-trilha-nome="${trilha.nome}"]`);
              if (!li) return;

              const elTexto = li.querySelector(".textoTrilha");
              const elStatus = li.querySelector(".status-trilha");

              let mensagem = "Fechada";
              let cor = "#c0392b";
              let corLetra = "#fff";

              // Verifica a variável global vinda do previsaoTempo.js
              if (window.trilhaStatus === "fechada") {
                  mensagem = "Fechada (Chuva)";
                  cor = "#c0392b";
              } 
              else if (!parqueAberto) {
                  mensagem = "Fechado (Horário)";
                  cor = "#c0392b";
              } 
              else {
                  const regra = trilha.regraHorarios.find(h => dentroDoHorario(h.inicio, h.fim));
                  if (regra) {
                      mensagem = regra.nome;
                      cor = regra.cor;
                      corLetra = regra.corLetra;
                  }
              }

              if (elTexto) {
                  elTexto.textContent = mensagem.charAt(0).toUpperCase() + mensagem.slice(1);
                  elTexto.style.color = corLetra;
              }
              if (elStatus) {
                  elStatus.style.backgroundColor = cor;
              }
          });
      }
  });
};

// Inicialização
document.addEventListener("DOMContentLoaded", renderizarParques);
setInterval(window.atualizarStatusTrilhas, 60 * 1000);