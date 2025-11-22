<script setup>
import NavBar from '@/componente/NavBar.vue'
import Footer from '@/componente/footer.vue'
import { computed, ref } from 'vue'

const busca = ref('')
function buscarAcervo() {}

const imagensCarrosel = [
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=900&q=80',
]
const imagemAtual = ref(0)

const acervos = [
  {
    nome: 'Vaso Grego Antigo',
    imagem:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    descricao:
      'Vaso cerâmico do período helenístico, utilizado em cerimônias religiosas e encontrado em escavações na Grécia.',
    categoria: 'Cerâmica',
    dataEntrada: '15/09/2025',
    localizacao: 'Sala 2 - Ala de Arte Antiga',
    conservacao: 'Excelente',
  },
  {
    nome: 'Máscara Africana',
    imagem:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    descricao: 'Máscara ritualística da África Ocidental, feita de madeira e pigmentos naturais.',
    categoria: 'Escultura',
    dataEntrada: '10/08/2025',
    localizacao: 'Sala 1 - Culturas do Mundo',
    conservacao: 'Boa',
  },
  {
    nome: 'Fóssil de Peixe',
    imagem:
      'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80',
    descricao: 'Fóssil de peixe pré-histórico encontrado em sambaquis brasileiros.',
    categoria: 'Fóssil',
    dataEntrada: '21/11/2025',
    localizacao: 'Sala 3 - Paleontologia',
    conservacao: 'Excelente',
  },
  {
    nome: 'Moeda Romana',
    imagem:
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    descricao: 'Moeda de prata do Império Romano, datada do século II.',
    categoria: 'Numismática',
    dataEntrada: '05/07/2025',
    localizacao: 'Sala 4 - História Antiga',
    conservacao: 'Regular',
  },
  {
    nome: 'Arte Rupestre',
    imagem:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    descricao: 'Fragmento de arte rupestre encontrada em cavernas do Brasil.',
    categoria: 'Pintura',
    dataEntrada: '12/10/2025',
    localizacao: 'Sala 5 - Pré-História',
    conservacao: 'Boa',
  },
  {
    nome: 'Livro Medieval',
    imagem:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    descricao: 'Manuscrito iluminado do século XIII, escrito em latim.',
    categoria: 'Manuscrito',
    dataEntrada: '30/09/2025',
    localizacao: 'Sala 6 - Biblioteca Histórica',
    conservacao: 'Excelente',
  },
]

const acervosFiltrados = computed(() => {
  if (!busca.value.trim()) return acervos
  const termo = busca.value.trim().toLowerCase()
  return acervos.filter(
    (item) =>
      item.nome.toLowerCase().includes(termo) ||
      item.descricao.toLowerCase().includes(termo) ||
      item.categoria.toLowerCase().includes(termo) ||
      item.localizacao.toLowerCase().includes(termo),
  )
})

const modalAberto = ref(false)
const acervoSelecionado = ref(null)
function abrirModal(item) {
  acervoSelecionado.value = item
  modalAberto.value = true
}
function fecharModal() {
  modalAberto.value = false
  acervoSelecionado.value = null
}

const mousePos = ref({ x: 0, y: 0 })
const zoomAtivo = ref(false)
function mouseMoveZoom(e) {
  const rect = e.target.getBoundingClientRect()
  mousePos.value = {
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100,
  }
  zoomAtivo.value = true
}
function mouseLeaveZoom() {
  zoomAtivo.value = false
}

const historicoExemplo = [
  {
    local: 'Museu Nacional',
    dataEntrada: '10/01/2023',
    dataSaida: '12/03/2024',
    evento: 'Aquisição',
  },
  {
    local: 'Museu de Arte Antiga',
    dataEntrada: '15/03/2024',
    dataSaida: '20/10/2025',
    evento: 'Exposição Temporária',
  },
  { local: 'Museu Sambaqui', dataEntrada: '21/11/2025', dataSaida: '', evento: 'Acervo Atual' },
]
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
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="7" stroke="#fff" stroke-width="2" />
              <line
                x1="16"
                y1="16"
                x2="21"
                y2="21"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </button>
      </form>
      <!-- Grid de cards de acervo -->
      <div class="cards-grid">
        <div
          v-for="(item, idx) in acervosFiltrados"
          :key="idx"
          class="acervo-card"
          :class="{
            selected: modalAberto && acervoSelecionado && acervoSelecionado.nome === item.nome,
          }"
          @click="abrirModal(item)"
          style="cursor: pointer"
        >
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
              @mousemove="mouseMoveZoom"
              @mouseleave="mouseLeaveZoom"
              :style="
                zoomAtivo
                  ? {
                      transform: 'scale(2)',
                      transformOrigin: mousePos.x + '% ' + mousePos.y + '%',
                    }
                  : {}
              "
            />
          </div>
          <h2 class="modal-title">{{ acervoSelecionado.nome }}</h2>
          <p class="modal-descricao">{{ acervoSelecionado.descricao }}</p>
          <div class="modal-detalhes">
            <span><strong>Categoria:</strong> {{ acervoSelecionado.categoria }}</span
            ><br />
            <span><strong>Data de Entrada:</strong> {{ acervoSelecionado.dataEntrada }}</span
            ><br />
            <span><strong>Localização:</strong> {{ acervoSelecionado.localizacao }}</span
            ><br />
            <span><strong>Conservação:</strong> {{ acervoSelecionado.conservacao }}</span>
          </div>
          <!-- Linha do tempo/histórico -->
          <div class="historico-timeline">
            <h3 class="timeline-title">Linha do Tempo do Acervo</h3>
            <ul class="timeline-list">
              <li
                v-for="(h, i) in historicoExemplo"
                :key="i"
                :class="{ atual: i === historicoExemplo.length - 1 }"
              >
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
      <!-- Links de navegação -->
      <div class="menu-museu-view">
        <h1>Menu do Museu</h1>
        <nav>
          <ul>
            <li><router-link to="/cadastro">Cadastro</router-link></li>
            <li><router-link to="/gerenciamento">Gerenciamento</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.menu-museu-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(120deg, #f8f6f1 0%, #e3e0d9 100%);
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw 3vw 0 3vw;
}
.carousel {
  width: 100%;
  max-width: 900px;
  height: 220px;
  position: relative;
  background: #e0e0e0;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  margin-bottom: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.85);
}
.carousel-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 18px;
  text-align: center;
  font-size: 2.1rem;
  color: #fff;
  font-weight: 700;
  text-shadow: 0 2px 8px #0007;
  width: 100%;
}
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  font-size: 2rem;
  color: #ff6f3c;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 2;
  transition: background 0.2s;
}
.carousel-btn.left {
  left: 16px;
}
.carousel-btn.right {
  right: 16px;
}
.carousel-btn:hover {
  background: #ffd166;
}
.linha-decorativa {
  width: 95%;
  height: 3px;
  background: linear-gradient(90deg, #ff6f3c 0%, #ffd166 100%);
  margin: 0.5vw 0 2vw 0;
  border-radius: 2px;
}
.search-bar {
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border: 1.5px solid #8a4d4d;
  border-radius: 16px;
  margin-bottom: 2vw;
  padding: 0.7vw 1vw;
  box-shadow: 0 2px 12px rgba(255, 111, 60, 0.1);
  transition:
    box-shadow 0.2s,
    border 0.2s;
}
.search-bar:focus-within {
  box-shadow: 0 4px 18px rgba(255, 111, 60, 0.18);
  border-color: #e85d2a;
}
.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1.15rem;
  padding: 0.7vw 0.5vw;
  background: transparent;
  color: #333;
}
.search-bar input::placeholder {
  color: #888;
  opacity: 0.7;
  font-style: italic;
}
.search-bar button {
  background: #444;
  border: none;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.4rem;
  padding: 0.5vw 1.2vw;
  margin-left: 0.5vw;
  box-shadow: 0 2px 8px rgba(255, 111, 60, 0.1);
  transition: background 0.2s;
  display: flex;
  align-items: center;
}
.search-bar button:hover {
  background: #222;
}
.search-icon {
  display: inline-block;
  font-size: 1.3rem;
  vertical-align: middle;
}
.cards-grid {
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5vw;
  margin: 2vw auto 2vw auto;
  justify-items: center;

}

.acervo-card {
  width: 100%;
  max-width: 400px;
  min-height: 340px;
  background: #f5e9da;
  border: 2px solid #a67c52;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
  box-shadow: 0 6px 24px rgba(255, 209, 102, 0.13);
  overflow: hidden;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  box-sizing: border-box;
}
.acervo-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 12px 32px rgba(166, 124, 82, 0.18);
}
.acervo-card:active,
.acervo-card.selected {
  background: #d6c1a3;
  border-color: #7c4a1e;
  box-shadow: 0 0 0 4px #a67c5233;

}
.acervo-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  background: #eaeaea;
}
.acervo-info {
  flex: 1;
  padding: 2vw 2vw;
  display: flex;
  flex-direction: column;
  gap: 0.7vw;
  width: 100%;
  box-sizing: border-box;
}
.acervo-info h2 {
  font-size: 1.35rem;
  color: #7c4a1e;
  margin-bottom: 0.3vw;
  text-align: center;
}
.acervo-descricao {
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 0.5vw;
}
.acervo-detalhes {
  display: flex;
  flex-direction: column;
  gap: 0.3vw;
  font-size: 0.98rem;
  color: #555;
}
@media (max-width: 900px) {
  .cards-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 4vw;
  }
  .acervo-card {
    max-width: 95vw;
    min-height: 260px;
  }
  .acervo-img {
    height: 120px;
  }
}
@media (max-width: 700px) {
  .carousel {
    height: 120px;
    font-size: 1.2rem;
  }
  .acervo-card {
    flex-direction: column;
    align-items: center;
    max-width: 95vw;
  }
  .acervo-img {
    width: 100%;
    height: 120px;
    border-radius: 16px 16px 0 0;
  }
  .acervo-info {
    padding: 2vw 2vw;
  }
  .search-bar {
    max-width: 95vw;
    padding: 2vw 2vw;
  }
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.modal-content {
  background: #fffbe6;
  border-radius: 18px;
  max-width: 600px;
  width: 98vw;
  padding: 3vw 3vw 2vw 3vw;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  position: relative;
  text-align: center;
}
.modal-close {
  position: absolute;
  top: 12px;
  right: 18px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #ff6f3c;
  cursor: pointer;
}
.modal-img-wrap {
  width: 100%;
  max-width: 480px;
  height: 260px;
  margin: 0 auto 1vw auto;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition:
    transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.2s,
    transform-origin 0.2s;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  cursor: zoom-in;
}
.modal-img-wrap:hover .modal-img {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
}
.modal-title {
  font-size: 1.5rem;
  color: #7c4a1e;
  margin-bottom: 0.7vw;
  text-align: center;
}
.modal-descricao {
  font-size: 1.08rem;
  color: #444;
  margin-bottom: 1vw;
}
.modal-detalhes {
  font-size: 1rem;
  color: #555;
  text-align: left;
  margin: 0 auto;
  max-width: 320px;
  background: #fff8d6;
  border-radius: 8px;
  padding: 0.7vw 1vw;
}
.historico-timeline {
  margin-top: 2vw;
  padding: 1vw 0;
  background: #fff8d6;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(255, 209, 102, 0.1);
  overflow-x: auto;
}
.timeline-title {
  font-size: 1.15rem;
  color: #7c4a1e;
  text-align: center;
  margin-bottom: 1vw;
  font-weight: 700;
}
.timeline-list {
  list-style: none;
  padding: 0 1vw;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 2vw;
  justify-content: center;
  align-items: flex-start;
}
.timeline-list li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7vw;
  position: relative;
  min-width: 180px;
}
.timeline-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffd166;
  border: 2px solid #ff6f3c;
  margin-bottom: 0.5vw;
}
.timeline-list li.atual .timeline-dot {
  background: #ff6f3c;
  border-color: #ffd166;
}
.timeline-info {
  background: #fffbe6;
  border-radius: 8px;
  padding: 0.7vw 1vw;
  box-shadow: 0 1px 4px rgba(255, 209, 102, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.2vw;
  align-items: center;
}
.timeline-local {
  font-weight: 600;
  color: #444;
}
.timeline-evento {
  font-size: 0.98rem;
  color: #888;
}
.timeline-data {
  font-size: 0.95rem;
  color: #b0b0b0;
}
.timeline-list li:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 27px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ffd166 0%, #ff6f3c 100%);
  z-index: 0;
}
@media (max-width: 700px) {
  .timeline-list {
    gap: 4vw;
  }
  .timeline-list li {
    min-width: 120px;
  }
  .timeline-info {
    padding: 1vw 2vw;
  }
  .timeline-list li:not(:last-child)::after {
    width: 40px;
    height: 3px;
  }
}
@media (max-width: 600px) {
  .modal-content {
    max-width: 98vw;
    padding: 4vw 2vw 2vw 2vw;
  }
  .modal-img {
    height: 110px;
  }
}
@media (max-width: 700px) {
  .modal-content {
    max-width: 99vw;
    padding: 5vw 2vw 3vw 2vw;
  }
  .modal-img {
    max-width: 98vw;
    height: 140px;
  }
  .historico-timeline {
    margin-top: 4vw;
    padding: 2vw 0;
  }
  .timeline-info {
    min-width: 120px;
    padding: 1vw 2vw;
  }
}
.menu-museu-view {
  padding: 20px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  margin-bottom: 10px;
}

router-link {
  text-decoration: none;
  color: #007bff;
}

router-link:hover {
  text-decoration: underline;
}
</style>
