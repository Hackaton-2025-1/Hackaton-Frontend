// ...existing code...
<script setup>
import NavBar from '@/componente/NavBar.vue';
import Footer from '@/componente/footer.vue';
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';

import sambaqui1 from '@/assets/imagens/imagensSambaqui/sambaqui1.jpg';
import sambaqui2 from '@/assets/imagens/imagensSambaqui/sambaqui2.jpg';
import sambaqui3 from '@/assets/imagens/imagensSambaqui/sambaqui3.jpg';
import sambaqui4 from '@/assets/imagens/imagensSambaqui/sambaqui4.jpg';
import sambaqui5 from '@/assets/imagens/imagensSambaqui/sambaqui5.jpg';
import sambaqui6 from '@/assets/imagens/imagensSambaqui/sambaqui6.jpg';

const busca = ref('');

/* CARROSSEL */
const imagensCarrosel = [
  'https://images.unsplash.com/photo-1622702146317-3b95dedf33dd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1614482298332-cfc98eabdb90?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1727560799075-9055b064a05b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fE1VU0VVJTIwQVJRVUVPTE9HSUNPfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1637096979782-8425e35517ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAwfHxmJUMzJTkzU1NFSVN8ZW58MHx8MHx8fDA%3D',
];

const imagemAtual = ref(0);
let carouselInterval = null;
const tempoTroca = 4000;

function proximaImagem() {
  imagemAtual.value = (imagemAtual.value + 1) % imagensCarrosel.length;
}
function anteriorImagem() {
  imagemAtual.value =
    (imagemAtual.value - 1 + imagensCarrosel.length) % imagensCarrosel.length;
}
function irParaImagem(i) {
  imagemAtual.value = i;
}

onMounted(() => {
  carouselInterval = setInterval(proximaImagem, tempoTroca);
});
onBeforeUnmount(() => {
  clearInterval(carouselInterval);
});

const acervos = [
  {
    nome: 'Morro Sambaqui',
    imagem: sambaqui1,
    descricao: 'Vaso cerâmico do período helenístico, utilizado em cerimônias religiosas e encontrado em escavações na Grécia.',
    categoria: 'Cerâmica',
    dataEntrada: '15/09/2025',
    localizacao: 'Sala 2 - Ala de Arte Antiga',
    conservacao: 'Excelente',
    historico: [
      { periodo: '2019 - 2020', local: 'Coleção Particular Silva', evento: 'Doação' },
      { periodo: '2020 - Atual', local: 'Museu Sambaqui', evento: 'Acervo Permanente' },
    ],
  },
  {
    nome: 'Principal sala do Museu do sambaqui',
    imagem: sambaqui2,
    descricao: 'Máscara ritualística da África Ocidental, feita de madeira e pigmentos naturais.',
    categoria: 'Escultura',
    dataEntrada: '10/08/2025',
    localizacao: 'Sala 1 - Culturas do Mundo',
    conservacao: 'Boa',
  },
  {
    nome: 'Fóssil de Peixe',
  imagem: sambaqui3,
    descricao: 'Fóssil de peixe pré-histórico encontrado em sambaquis brasileiros.',
    categoria: 'Fóssil',
    dataEntrada: '21/11/2025',
    localizacao: 'Sala 3 - Paleontologia',
    conservacao: 'Excelente',
    historico: [
      { periodo: 'Descoberta 2024', local: 'Sambaqui do litoral', evento: 'Escavação' },
      { periodo: '21/11/2025 - Atual', local: 'Museu Sambaqui', evento: 'Catalogado' },
    ],
  },
  {
    nome: 'Moeda Romana',
    imagem: sambaqui4,
    descricao: 'Esse fóssil pertence a uma espécie extinta de peixe que viveu durante o período Cretáceo, aproximadamente 100 milhões de anos atrás.',
    categoria: 'Fóssil',
    dataEntrada: '05/07/2023',
    localizacao: 'Sala 4 - História Antiga',
    conservacao: 'Regular',
    historico: [
      { periodo: 'Século II', local: 'Império Romano', evento: 'Produção' },
      { periodo: '05/07/2023 - Atual', local: 'Museu Sambaqui', evento: 'Aquisição' },
    ],
  },
  {
    nome: 'Parte de um Sambaqui',
    imagem: sambaqui5,
    descricao: 'Fragmento de arte rupestre encontrada em cavernas do Brasil.',
    categoria: 'Pintura',
    dataEntrada: '12/10/2025',
    localizacao: 'Sala 5 - Pré-História',
    conservacao: 'Boa',
    historico: [
      { periodo: 'Descoberta 2010', local: 'Caverna X', evento: 'Registro' },
      { periodo: '12/10/2025 - Atual', local: 'Museu Sambaqui', evento: 'Conservação' },
    ],
  },
  {
    nome: 'Sala localizada no Museu do Sambaqui',
    imagem: sambaqui6,
    descricao: 'Manuscrito iluminado do século XIII, escrito em latim.',
    categoria: 'Manuscrito',
    dataEntrada: '30/09/2025',
    localizacao: 'Sala 6 - Biblioteca Histórica',
    conservacao: 'Excelente',
    historico: [
      { periodo: 'Século XIII', local: 'Mosteiro Y', evento: 'Produção' },
      { periodo: '30/09/2025 - Atual', local: 'Museu Sambaqui', evento: 'Catalogado' },
    ],
  },
];

/* FILTRO (busca em tempo real) */
const acervosFiltrados = computed(() => {
  const termo = busca.value.trim().toLowerCase();
  if (!termo) return acervos;
  return acervos.filter(item =>
    item.nome.toLowerCase().includes(termo) ||
    item.descricao.toLowerCase().includes(termo) ||
    item.categoria.toLowerCase().includes(termo) ||
    item.localizacao.toLowerCase().includes(termo)
  );
});

/* MODAL */
const modalAberto = ref(false);
const acervoSelecionado = ref(null);

function abrirModal(item) {
  acervoSelecionado.value = item;
  modalAberto.value = true;
}
function fecharModal() {
  modalAberto.value = false;
  acervoSelecionado.value = null;
}

/* histórico atual mostrado no modal (retorna array vazio se não houver) */
const historicoAtual = computed(() => {
  return acervoSelecionado.value?.historico ?? [];
});

/* placeholder para submit do form (não realiza buscas adicionais porque usamos busca reativa) */
function buscarAcervo(e) {
  e?.preventDefault();
  // Intencionalmente vazio: a busca é responsiva via v-model
}

</script>

<template>
  <div class="menu-museu-container">
    <NavBar />
    <div class="main-content">
      <!-- Carrossel -->
      <div class="carousel" aria-roledescription="carousel">
        <img :src="imagensCarrosel[imagemAtual]" alt="Panorama do Museu" class="carousel-img" />
        <div class="carousel-title">Bem-vindo ao Museu Sambaqui</div>

        <!-- controles -->
        <button class="carousel-prev" @click="anteriorImagem" aria-label="Imagem anterior">‹</button>
        <button class="carousel-next" @click="proximaImagem" aria-label="Próxima imagem">›</button>

        <!-- indicadores -->
        <div class="carousel-indicators">
          <button v-for="(img, i) in imagensCarrosel" :key="i" :class="{ active: i === imagemAtual }" @click="irParaImagem(i)" :aria-label="`Ir para imagem ${i+1}`"></button>
        </div>
      </div>

      <div class="linha-decorativa"></div>

      <!-- Barra de busca (submit só previne reload) -->
      <form class="search-bar" @submit="buscarAcervo">
        <input v-model="busca" type="text" placeholder="Buscar acervo, sala, categoria..." aria-label="Buscar acervo" />
        <button type="submit" aria-label="Buscar">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="7" stroke="#fff" stroke-width="2" />
            <line x1="16" y1="16" x2="21" y2="21" stroke="#fff" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </form>

      <!-- Grid de cards -->
      <div class="cards-grid">
        <div v-for="(item) in acervosFiltrados" :key="item.nome" class="acervo-card"
          :class="{ selected: modalAberto && acervoSelecionado && acervoSelecionado.nome === item.nome }"
          @click="abrirModal(item)" role="button" tabindex="0" @keyup.enter="abrirModal(item)">
          <img :src="item.imagem" :alt="`Imagem de ${item.nome}`" class="acervo-img" />
          <div class="acervo-info">
            <h2>{{ item.nome }}</h2>
            <p class="acervo-descricao">{{ item.descricao }}</p>
            <div class="acervo-detalhes">
              <span><strong>Categoria:</strong> {{ item.categoria }}</span>
              <span><strong>Data de Entrada:</strong> {{ item.dataEntrada }}</span>
              <span><strong>Localização:</strong> {{ item.localizacao }}</span>
              <span><strong>Conservação:</strong> {{ item.conservacao }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
     
    
    </div>
    <Footer />
  </div>
</template>

<style scoped>
/* ===========================
   LAYOUT GERAL
=========================== */
.menu-museu-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f4f1ea;
  font-family: "Cinzel", "Georgia", serif;
  letter-spacing: 0.3px;
}

.main-content {
  flex: 1;
  padding: 2.5rem 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* CARROSSEL */
.carousel {
  width: 100%;
  max-width: 1100px;
  height: 320px;
  border-radius: 22px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.18);
}
.carousel-img { width:100%; height:100%; object-fit:cover; filter:brightness(.75); }
.carousel-title {
  position: absolute; bottom:20px; width:100%; text-align:center;
  font-size:2.4rem; font-weight:600; color:#fff; text-shadow:0 4px 8px #000a;
}

/* controles */
.carousel-prev, .carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.45);
  border: none;
  color: #fff;
  font-size: 2.2rem;
  width: 40px; height: 48px;
  border-radius: 8px;
  cursor: pointer;
}
.carousel-prev { left: 14px; }
.carousel-next { right: 14px; }

/* indicadores */
.carousel-indicators {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display:flex;
  gap:8px;
}
.carousel-indicators button {
  width:10px; height:10px; border-radius:50%; border:none; background:rgba(255,255,255,0.45); cursor:pointer;
}
.carousel-indicators button.active { background:#fff; }

/* LINHA */
.linha-decorativa {
  width: 100%;
  max-width: 1300px;
  height: 3px;
  background: linear-gradient(90deg, #caa76c, #7b5e34);
  margin: 2rem 0;
}

/* BUSCA */
.search-bar {
  max-width: 600px;
  width: 100%;
  background: #ffffff;
  border: 1.5px solid #c6a574;
  border-radius: 14px;
  display: flex;
  padding: 0.9rem 1.1rem;
  align-items: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}
.search-bar input {
  flex: 1; border: none; background: transparent; font-size:1.15rem; outline:none; font-family:"Cinzel",serif; color:#483d2e;
}
.search-bar button { background:#4a3e2e; border:none; border-radius:9px; padding:0.6rem 1rem; cursor:pointer; }

/* GRID */
.cards-grid {
  width: 100%;
  max-width: 1400px;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  margin: 3rem 0;
}
.acervo-card { background:#faf7f1; border:1px solid #e5dbc9; overflow:hidden; transition:0.25s; cursor:pointer; box-shadow:0 4px 14px rgba(0,0,0,0.08); }
.acervo-card.selected { transform: scale(1.01); box-shadow:0 8px 26px rgba(0,0,0,0.12); }
.acervo-img { width:100%; height:220px; object-fit:cover; filter:brightness(.9); }
.acervo-info { padding: 1.3rem 1.6rem; }
.acervo-info h2 { text-align:center; font-size:1.4rem; color:#5b422b; font-weight:600; margin-bottom:0.5rem; }
.acervo-descricao { color:#3d372f; font-size:1rem; margin-bottom:1rem; font-family:"Georgia"; }
.acervo-detalhes { border-top:1px solid #d7ccb7; padding-top:0.8rem; font-size:0.94rem; color:#6b6355; display:flex; flex-direction:column; gap:6px; }

/* MODAL */
.modal-overlay {
  position: fixed; inset:0; backdrop-filter: blur(4px); background: rgba(0,0,0,.45);
  display:flex; align-items:center; justify-content:center; z-index:9999;
}
.modal-content {
  background:#fffdf6; max-width:680px; width:95%; padding:2.4rem; box-shadow:0 15px 40px rgba(0,0,0,0.22);
}
.modal-close { border:none; margin-bottom:20px; font-size:30px; cursor:pointer; border-radius:40px; width:40px; }
.modal-img-wrap { width:100%; height:300px; overflow:hidden; margin-bottom:1.4rem; }
.modal-img { width:100%; height:100%; object-fit:cover; }
.modal-title { text-align:center; font-size:1.7rem; color:#644828; margin-bottom:1rem; }
.modal-detalhes { background:#f7f2e8; padding:1.1rem; border-radius:10px; font-size:1rem; margin-top:1rem; color:#42392b; }

/* ===========================
   TIMELINE COM 4 TIPOS DE TEMPO
=========================== */
.historico-timeline {
  margin-top: 2.5rem;
  width: 100%;
}

.timeline-title {
  margin-bottom: 2rem;
  font-size: 1.7rem;
  color: #5a442e;
  font-weight: 700;
  text-align: center;
}

/* Layout principal */
.timeline-list {
  display: flex;
  gap: 3rem;
  padding: 1rem 0;
  position: relative;
  list-style: none;
  justify-content: space-between;
  overflow: hidden;
}

/* Linha horizontal contínua */
.timeline-list::before {
  content: "";
  position: absolute;
  top: 32px;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #e6d2a9, #b79050);
  z-index: 1;
}

/* Cada item */
.timeline-list li {
  position: relative;
  flex: 1;
  text-align: center;
  padding-top: 2rem;
  z-index: 2;
}

/* Bolinhas de cada marco */
.timeline-point {
  width: 22px;
  height: 22px;
  background: #9c7a42;
  border-radius: 50%;
  border: 3px solid #fffaf0;
  margin: 0 auto;
  position: relative;
  z-index: 3;
  box-shadow: 0 0 10px rgba(80, 60, 30, 0.3);
}

/* Cartão */
.timeline-box {
  margin-top: 1.3rem;
  background: #fffaf0;
  border: 1px solid #e2d5b7;
  padding: 1rem 1rem;
  border-radius: 12px;
  font-size: 1rem;
  color: #4b4030;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.08);
  transition: 0.25s;
}

/* Título de cada etapa */
.timeline-box h4 {
  margin-bottom: 0.4rem;
  font-size: 1.05rem;
  color: #6b4e32;
  font-weight: 600;
}

/* Diferencia os tipos de tempo */
.timeline-box .tipo-tempo {
  font-size: 0.85rem;
  text-transform: uppercase;
  font-weight: 700;
  color: #8e6f2f;
  margin-bottom: 0.8rem;
}

/* Tipos de tempo */
.timeline-box .tipo-tempo.Ano {
  color: #ba8e4a;
}

.timeline-box .tipo-tempo.Mês {
  color: #768e3f;
}

.timeline-box .tipo-tempo.Dia {
  color: #3e5773;
}

.timeline-box .tipo-tempo.Evento {
  color: #5e3a3e;
}

/* Último item (mais recente) */
.timeline-list li.atual .timeline-point {
  background: #60451e;
  box-shadow: 0 0 12px #60451e;
  border-color: #fff7e2;
}

.timeline-list li.atual .timeline-box {
  border-color: #b58b50;
  box-shadow: 0 5px 16px rgba(96, 69, 30, 0.22);
}

/* ===========================
   RESPONSIVO
=========================== */
@media (max-width: 780px) {
  .timeline-list {
    flex-direction: column;
    gap: 2rem;
    padding-left: 1.5rem;
  }

  .timeline-list::before {
    width: 4px;
    height: 100%;
    left: 14px;
    top: 0;
  }

  .timeline-list li {
    text-align: left;
  }

  .timeline-point {
    margin-left: -2px;
  }

  .timeline-box {
    margin-left: 2.1rem;
  }
}


/* RESPONSIVO */
@media (max-width: 750px) {
  .carousel { height:170px; }
  .acervo-img { height:150px; }
  .modal-content { padding:1.5rem; }
}
@media (max-width:700px) {
  .timeline-list { flex-direction:column; gap:2.5rem; }
  .timeline-list li { width:100%; }
  .timeline-list li::after { width:0; }
}
</style>
