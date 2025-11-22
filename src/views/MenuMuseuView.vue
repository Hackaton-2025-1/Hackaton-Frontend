<script setup>
import NavBar from '@/componente/NavBar.vue';
 import Footer from '@/componente/footer.vue';
import { computed, ref } from 'vue';

import sambaqui1 from '@/assets/imagens/imagensSambaqui/sambaqui1.jpg';
import sambaqui2 from '@/assets/imagens/imagensSambaqui/sambaqui2.jpg';
import sambaqui3 from '@/assets/imagens/imagensSambaqui/sambaqui3.jpg';
import sambaqui4 from '@/assets/imagens/imagensSambaqui/sambaqui4.jpg';
import sambaqui5 from '@/assets/imagens/imagensSambaqui/sambaqui5.jpg';
import sambaqui6 from '@/assets/imagens/imagensSambaqui/sambaqui6.jpg';

const busca = ref('');
function buscarAcervo() {
}

const imagensCarrosel = [
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=900&q=80',
];
const imagemAtual = ref(0);

const acervos = [
  {
    nome: 'Vaso Grego Antigo',
    imagem: sambaqui1,
    descricao: 'Vaso cerâmico do período helenístico, utilizado em cerimônias religiosas e encontrado em escavações na Grécia.',
    categoria: 'Cerâmica',
    dataEntrada: '15/09/2025',
    localizacao: 'Sala 2 - Ala de Arte Antiga',
    conservacao: 'Excelente',
  },
  {
    nome: 'Máscara Africana',
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
  },
  {
    nome: 'Moeda Romana',
    imagem: sambaqui4,
    descricao: 'Moeda de prata do Império Romano, datada do século II.',
    categoria: 'Numismática',
    dataEntrada: '05/07/2025',
    localizacao: 'Sala 4 - História Antiga',
    conservacao: 'Regular',
  },
  {
    nome: 'Arte Rupestre',
    imagem: sambaqui5,
    descricao: 'Fragmento de arte rupestre encontrada em cavernas do Brasil.',
    categoria: 'Pintura',
    dataEntrada: '12/10/2025',
    localizacao: 'Sala 5 - Pré-História',
    conservacao: 'Boa',
  },
  {
    nome: 'Livro Medieval',
    imagem: sambaqui6,
    descricao: 'Manuscrito iluminado do século XIII, escrito em latim.',
    categoria: 'Manuscrito',
    dataEntrada: '30/09/2025',
    localizacao: 'Sala 6 - Biblioteca Histórica',
    conservacao: 'Excelente',
  },
];

const acervosFiltrados = computed(() => {
  if (!busca.value.trim()) return acervos;
  const termo = busca.value.trim().toLowerCase();
  return acervos.filter(item =>
    item.nome.toLowerCase().includes(termo) ||
    item.descricao.toLowerCase().includes(termo) ||
    item.categoria.toLowerCase().includes(termo) ||
    item.localizacao.toLowerCase().includes(termo)
  );
});

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

const mousePos = ref({ x: 0, y: 0 });
const zoomAtivo = ref(false);

function mouseMoveZoom(e) {
  const rect = e.target.getBoundingClientRect();
  mousePos.value = {
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100,
  };
  zoomAtivo.value = true;
}
function mouseLeaveZoom() {
  zoomAtivo.value = false;
}

const historicoExemplo = [
  { local: 'Museu Nacional', dataEntrada: '10/01/2023', dataSaida: '12/03/2024', evento: 'Aquisição' },
  { local: 'Museu de Arte Antiga', dataEntrada: '15/03/2024', dataSaida: '20/10/2025', evento: 'Exposição Temporária' },
  { local: 'Museu Sambaqui', dataEntrada: '21/11/2025', dataSaida: '', evento: 'Acervo Atual' },
];
</script>

<template>
  <div class="menu-museu-container">
    <NavBar />
    <div class="main-content">
      <!-- Carrossel/Imagem principal -->
      <div class="carousel">
        <img :src="imagensCarrosel[imagemAtual]" alt="Museu" class="carousel-img" />
        <div class="carousel-title">Bem-vindo ao Museu Sambaqui</div>
      </div>
      <!-- Linha decorativa -->
      <div class="linha-decorativa"></div>
      <!-- Barra de busca -->
      <form class="search-bar" @submit.prevent="buscarAcervo">
        <input v-model="busca" type="text" placeholder="Buscar acervo, Sala" />
        <button type="submit" aria-label="Buscar">
          <span class="search-icon">
            <!-- Novo ícone SVG -->
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="7" stroke="#fff" stroke-width="2" />
              <line x1="16" y1="16" x2="21" y2="21" stroke="#fff" stroke-width="2" stroke-linecap="round" />
            </svg>
          </span>
        </button>
      </form>
      <!-- Grid de cards de acervo -->
      <div class="cards-grid">
        <div v-for="(item, idx) in acervosFiltrados" :key="idx" class="acervo-card" :class="{selected: modalAberto && acervoSelecionado && acervoSelecionado.nome === item.nome}" @click="abrirModal(item)" style="cursor:pointer">
          <img :src="item.imagem" alt="Imagem do acervo" class="acervo-img" />
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
      <!-- Modal de detalhes do acervo -->
      <div v-if="modalAberto" class="modal-overlay" @click.self="fecharModal">
        <div class="modal-content">
          <button class="modal-close" @click="fecharModal">&times;</button>
          <div class="modal-img-wrap">
            <img
              :src="acervoSelecionado.imagem"
              alt="Imagem do acervo"
              class="modal-img"
            />
          </div>
          <h2 class="modal-title">{{ acervoSelecionado.nome }}</h2>
          <p class="modal-descricao">{{ acervoSelecionado.descricao }}</p>
          <div class="modal-detalhes">
            <span><strong>Categoria:</strong> {{ acervoSelecionado.categoria }}</span><br>
            <span><strong>Data de Entrada:</strong> {{ acervoSelecionado.dataEntrada }}</span><br>
            <span><strong>Localização:</strong> {{ acervoSelecionado.localizacao }}</span><br>
            <span><strong>Conservação:</strong> {{ acervoSelecionado.conservacao }}</span>
          </div>
          <!-- Linha do tempo/histórico -->
          <div class="historico-timeline">
            <h3 class="timeline-title">Linha do Tempo do Acervo</h3>
            <ul class="timeline-list">
              <li v-for="(h, i) in historicoExemplo" :key="i" :class="{'atual': i === historicoExemplo.length-1}">
                <div class="timeline-dot"></div>
                <div class="timeline-info">
                  <span class="timeline-local">{{ h.local }}</span>
                  <span class="timeline-evento">{{ h.evento }}</span>
                  <span class="timeline-data">Entrada: {{ h.dataEntrada }}</span>
                  <span class="timeline-data" v-if="h.dataSaida">Saída: {{ h.dataSaida }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
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
.modal-close{
  border: none;
  margin-bottom: 20px;
  font-size: 30px;
  cursor: pointer;
  border-radius: 40px;
  width: 40px;
  transition: 0.3s;
}

.modal-close:hover{
  cursor: pointer;
  border-radius: 40px;
  width: 40px;
}

.main-content {
  flex: 1;
  padding: 2.5rem 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ===========================
   CARROSSEL – MUSEU
=========================== */
.carousel {
  width: 100%;
  max-width: 1100px;
  height: 320px;
  border-radius: 22px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.18);
}
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(.75);
}
.carousel-title {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 4px 8px #000a;
}

/* ===========================
   LINHA DOURADA
=========================== */
.linha-decorativa {
  width: 100%;
  max-width: 1300px;
  height: 3px;
  background: linear-gradient(90deg, #caa76c, #7b5e34);
  margin: 2rem 0;
}

/* ===========================
   BARRA DE BUSCA
=========================== */
.search-bar {
  max-width: 600px;
  width: 100%;
  background: #ffffff;
  border: 1.5px solid #c6a574;
  border-radius: 14px;
  display: flex;
  padding: 0.9rem 1.1rem;
  align-items: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  transition: 0.25s border, 0.25s box-shadow;
}
.search-bar:focus-within {
  border-color: #b28b52;
  box-shadow: 0 7px 26px rgba(181, 147, 84, 0.2);
}
.search-bar input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 1.15rem;
  outline: none;
  font-family: "Cinzel", serif;
  color: #483d2e;
}
.search-bar button {
  background: #4a3e2e;
  border: none;
  border-radius: 9px;
  padding: 0.6rem 1rem;
  cursor: pointer;
  transition: 0.2s;
}
.search-bar button:hover {
  background: #2c2419;
}

/* ===========================
   GRID DE CARDS – PREMIUM
=========================== */
.cards-grid {
  width: 100%;
  max-width: 1400px;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  margin: 3rem 0;
}

.acervo-card {
  background: #faf7f1;
  border: 1px solid #e5dbc9;
  overflow: hidden;
  transition: 0.25s transform, 0.25s box-shadow;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
}

.acervo-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  filter: brightness(.9);
}

.acervo-info {
  padding: 1.3rem 1.6rem;
}

.acervo-info h2 {
  text-align: center;
  font-size: 1.4rem;
  color: #5b422b;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.acervo-descricao {
  color: #3d372f;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-family: "Georgia";
}

.acervo-detalhes {
  border-top: 1px solid #d7ccb7;
  padding-top: 0.8rem;
  font-size: 0.94rem;
  line-height: 1.35rem;
  color: #6b6355;
}

/* ===========================
   MODAL – EXPOSIÇÃO
=========================== */
.modal-overlay {
  position: fixed;
  inset: 0;
  backdrop-filter: blur(4px);
  background: rgba(0,0,0,.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.modal-content {
  background: #fffdf6;
  max-width: 680px;
  width: 95%;
  padding: 2.4rem;
  box-shadow: 0 15px 40px rgba(0,0,0,0.22);
  animation: modalEnter .3s ease;
}
@keyframes modalEnter {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
.modal-img-wrap {
  width: 100%;
  height: 300px;
  overflow: hidden;
  margin-bottom: 1.4rem;
}
.modal-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.modal-title {
  text-align: center;
  font-size: 1.7rem;
  color: #644828;
  margin-bottom: 1rem;
}
.modal-detalhes {
  background: #f7f2e8;
  padding: 1.1rem;
  border-radius: 10px;
  font-size: 1rem;
  margin-top: 1rem;
  color: #42392b;
}

/* ===========================
   RESPONSIVO
=========================== */
@media (max-width: 750px) {
  .carousel {
    height: 170px;
  }
  .acervo-img {
    height: 150px;
  }
  .modal-content {
    padding: 1.5rem;
  }
}
</style>
