<template>
  <NavBar />
  <div class="espaco-header"></div>
  <div class="colecoes-layout">
    <SideBar :colecaoSelecionada="filtroSelecionado" @selecionarColecao="selecionaTipo" />
    <main class="colecoes-main">
      <div v-if="bannerAtual" class="banner-acervo">
        <img :src="bannerSimulado" alt="Banner Simulado" />
      </div>
      <section v-if="colecoesFiltradas.length" class="acervo-section">
        <h2><i :class="['icon', tipoAtual.icon]"></i> {{ tipoAtual.label }}</h2>
        <div class="colecao-list-grid">
          <div v-for="(item, idx) in colecoesFiltradas" :key="idx" class="colecao-card">
            <div class="card-img-wrap">
              <img src="/src/assets/imagens/logo.png" alt="Coleção" class="colecao-img" />
            </div>
            <div class="card-content">
              <strong class="card-title">{{ item.nome }}</strong>
              <p class="card-info">{{ item.info }}</p>
              <button class="card-btn" @click="abrirModal(item)">Ver detalhes</button>
            </div>
          </div>
        </div>
      </section>
      <section v-else class="acervo-section">
        <p class="sem-colecao">Nenhuma coleção encontrada para este tipo de acervo.</p>
      </section>
    </main>
  </div>
  <div v-if="modalAberto" class="modal-overlay" @click.self="fecharModal">
    <div class="modal-content">
      <button class="modal-close" @click="fecharModal">&times;</button>
      <div class="modal-img-wrap">
        <img
          :src="modalItemImg"
          alt="Imagem do acervo"
          class="modal-img"
          @mousemove="mouseMoveZoom"
          @mouseleave="mouseLeaveZoom"
          :style="zoomAtivo ? {
            transform: 'scale(2)',
            transformOrigin: mousePos.x + '% ' + mousePos.y + '%'
          } : {}"
        />
      </div>
      <h2 class="modal-title">{{ modalItem?.nome }}</h2>
      <p class="modal-descricao">{{ modalItem?.info }}</p>
      <div class="modal-detalhes">
        <p><strong>Categoria:</strong> {{ tipoAtual.label }}</p>
        <p><strong>Data de entrada:</strong> 21/11/2025</p>
        <p><strong>Localização:</strong> Sala principal do Museu Sambaqui</p>
        <p><strong>Conservação:</strong> Excelente</p>
        <p><strong>Descrição adicional:</strong> Item pertencente ao acervo do Museu Sambaqui, utilizado para fins de pesquisa, exposição e preservação histórica.</p>
      </div>
    </div>
  </div>
  <div class="espaco-footer"></div>
  <Footer />
</template>

<script setup>
import NavBar from '@/componente/NavBar.vue'
import Footer from '@/componente/footer.vue'
import SideBar from '@/componente/SideBar.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import logoBanner from '@/assets/imagens/logo.png'

const tipos = [
  { value: 'animal', label: 'Animal', icon: 'fa-solid fa-paw', banner: '/src/assets/imagens/banner-animal.png' },
  { value: 'vegetal', label: 'Vegetal', icon: 'fa-solid fa-leaf', banner: '/src/assets/imagens/banner-vegetal.png' },
  { value: 'mineral', label: 'Mineral', icon: 'fa-solid fa-gem', banner: '/src/assets/imagens/banner-mineral.png' },
  { value: 'sintetico', label: 'Sintéticos', icon: 'fa-solid fa-cube', banner: '/src/assets/imagens/banner-sintetico.png' },
]
const filtroSelecionado = ref('animal')
const menuMobile = ref(false)
const menuAberto = ref(false)

function handleResize() {
  menuMobile.value = window.innerWidth <= 480
  if (!menuMobile.value) menuAberto.value = false
}
onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

function selecionaTipo(tipo) {
  filtroSelecionado.value = tipo
}

const colecoes = [
  { tipo: 'animal', nome: 'Fóssil de peixe', info: 'Período: Jurássico' },
  { tipo: 'animal', nome: 'Ossada de mamífero', info: 'Período: Pleistoceno' },
  { tipo: 'animal', nome: 'Pluma de ave extinta', info: 'Origem: América do Sul' },
  { tipo: 'animal', nome: 'Carapaça de tartaruga', info: 'Período: Holoceno' },
  { tipo: 'animal', nome: 'Dente de felino pré-histórico', info: 'Período: Mioceno' },
  { tipo: 'vegetal', nome: 'Sementes preservadas', info: 'Origem: Amazônia' },
  { tipo: 'vegetal', nome: 'Fragmentos de madeira', info: 'Espécie: Pau-brasil' },
  { tipo: 'vegetal', nome: 'Folha fossilizada', info: 'Período: Cretáceo' },
  { tipo: 'vegetal', nome: 'Fruto seco', info: 'Origem: Mata Atlântica' },
  { tipo: 'vegetal', nome: 'Raiz petrificada', info: 'Período: Paleógeno' },
  { tipo: 'mineral', nome: 'Rocha sedimentar', info: 'Local: Serra do Mar' },
  { tipo: 'mineral', nome: 'Cristais', info: 'Tipo: Quartzo' },
  { tipo: 'mineral', nome: 'Fragmento de ágata', info: 'Origem: Sul do Brasil' },
  { tipo: 'mineral', nome: 'Fóssil mineralizado', info: 'Período: Devoniano' },
  { tipo: 'mineral', nome: 'Granito polido', info: 'Uso: Construção histórica' },
  { tipo: 'sintetico', nome: 'Artefato cerâmico', info: 'Cultura: Marajoara' },
  { tipo: 'sintetico', nome: 'Ferramenta metálica', info: 'Uso: Agricultura' },
  { tipo: 'sintetico', nome: 'Moeda antiga', info: 'Material: Bronze' },
  { tipo: 'sintetico', nome: 'Vaso decorativo', info: 'Origem: Século XIX' },
  { tipo: 'sintetico', nome: 'Máscara ritualística', info: 'Material: Madeira pintada' },
]

const colecoesFiltradas = computed(() => colecoes.filter(c => c.tipo === filtroSelecionado.value))
const tipoAtual = computed(() => tipos.find(t => t.value === filtroSelecionado.value))
const bannerAtual = computed(() => tipoAtual.value?.banner)
const bannerSimulado = logoBanner

const modalAberto = ref(false)
const modalItem = ref(null)
const modalItemImg = computed(() => '/src/assets/imagens/logo.png')
const mousePos = ref({ x: 50, y: 50 })
const zoomAtivo = ref(false)
function abrirModal(item) {
  modalItem.value = item
  modalAberto.value = true
}
function fecharModal() {
  modalAberto.value = false
  modalItem.value = null
}
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
</script>

<style scoped>
.espaco-header {
  height: 80px;
}
.espaco-footer {
  height: 10px;
}
.colecoes-layout {
  display: flex;
  gap: 0;
  max-width: 100vw;
  min-height: 70vh;
}
.colecoes-main {
  flex: 1;
  padding: 24px 18px 24px 18px;
  background: linear-gradient(120deg, #f7f3ec 0%, #e7e0d9 100%);
  border-radius: 0 24px 24px 0;
  min-height: 70vh;
}
.banner-acervo {
  max-width: 900px;
  width: 100%;
  margin: 0 auto 18px auto;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(80, 50, 30, 0.08);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-acervo img {
  width: 100%;
  height: 340px;
  object-fit: cover;
  border-radius: 18px;
  max-width: 100%;
}
.acervo-section {
  padding: 10px 4px;
  border-radius: 10px;
  background: #fffbe6;
  border: 1px solid #a67c52;
  box-shadow: 0 1px 6px rgba(80, 50, 30, 0.06);
  margin-bottom: 8px;
}
.acervo-section h2 {
  font-size: 1rem;
  margin-bottom: 8px;
  color: #a67c52;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  gap: 4px;
  display: flex;
  align-items: center;
}
.icon {
  font-size: 1rem;
}
.colecao-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 8px;
  margin-top: 4px;
}
.colecao-card {
  background: #e7d7c2;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(80, 50, 30, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 4px 6px 4px;
  min-height: 60px;
  border: 1px solid #a67c52;
  transition: box-shadow 0.15s, background 0.15s;
}
.colecao-card:hover {
  box-shadow: 0 4px 16px rgba(80, 50, 30, 0.16);
  background: #a67c52;
  color: #fffbe6;
}
.card-img-wrap {
  width: 120px;
  height: 120px;
  background: #fffbe6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  box-shadow: 0 2px 8px rgba(80, 50, 30, 0.08);
  overflow: hidden;
  position: relative;
}
.colecao-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 8px;
  background: #fffbe6;
  border: 1px solid #a67c52;
  transition: transform 0.3s cubic-bezier(.25,.8,.25,1), transform-origin 0.2s;
}
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.card-title {
  font-size: 0.92rem;
  color: #4e2e13;
  font-weight: 700;
  margin-bottom: 1px;
  text-align: center;
  font-family: 'Playfair Display', Georgia, serif;
}
.card-info {
  font-size: 0.78rem;
  color: #7c5c3a;
  text-align: center;
  margin-bottom: 1px;
  font-family: 'Roboto', sans-serif;
}
.card-btn {
  background: #a67c52;
  color: #fffbe6;
  border: none;
  border-radius: 4px;
  padding: 3px 7px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 2px;
  box-shadow: 0 1px 4px rgba(80, 50, 30, 0.08);
  font-family: 'Roboto', sans-serif;
}
.card-btn:hover {
  background: #4e2e13;
  color: #fffbe6;
}
.sem-colecao {
  font-size: 0.85rem;
  margin: 8px 0;
  color: #a67c52;
}
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.modal-content {
  background: #fffbe6;
  border-radius: 18px;
  max-width: 400px;
  width: 98vw;
  padding: 24px 18px 18px 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
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
  color: #a67c52;
  cursor: pointer;
}
.modal-img-wrap {
  width: 100%;
  max-width: 180px;
  height: 120px;
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
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
}
.modal-title {
  font-size: 1.2rem;
  color: #a67c52;
  margin-bottom: 0.7vw;
  text-align: center;
}
.modal-descricao {
  font-size: 1.08rem;
  color: #444;
  margin-bottom: 1vw;
}
.modal-detalhes {
  background: #fff8e6;
  border-radius: 8px;
  padding: 12px 10px;
  margin-top: 10px;
  font-size: 0.98rem;
  color: #6d5c3a;
  text-align: left;
  box-shadow: 0 1px 6px rgba(80, 50, 30, 0.06);
}
.modal-detalhes p {
  margin: 4px 0;
}
@media (max-width: 900px) {
  .colecoes-layout {
    flex-direction: column;
  }
  .colecoes-main {
    border-radius: 0 0 24px 24px;
    padding: 12px 6px 18px 6px;
  }
  .banner-acervo img {
    height: 180px;
  }
  .card-img-wrap {
    width: 70px;
    height: 70px;
    margin-bottom: 8px;
    border-radius: 6px;
  }
  .colecao-img {
    width: 60px;
    height: 60px;
    border-radius: 4px;
  }
}
@media (max-width: 600px) {
  .banner-acervo img {
    height: 90px;
  }
  .card-img-wrap {
    width: 40px;
    height: 40px;
  }
  .colecao-img {
    width: 32px;
    height: 32px;
  }
}
@media (max-width: 500px) {
  .colecoes-main {
    padding: 4px 1vw;
    border-radius: 6px;
    max-width: 99vw;
  }
  .banner-acervo img {
    height: 22px;
  }
  .colecao-list-grid {
    grid-template-columns: 1fr;
    gap: 4px;
  }
  .colecao-card {
    min-height: 36px;
    padding: 4px 1px 2px 1px;
    border-radius: 2px;
  }
  .card-img-wrap {
    width: 24px;
    height: 24px;
  }
  .colecao-img {
    width: 18px;
    height: 18px;
  }
  .card-title {
    font-size: 0.7rem;
  }
  .card-info {
    font-size: 0.65rem;
  }
  .card-btn {
    font-size: 0.65rem;
    padding: 1px 3px;
    border-radius: 1px;
  }
}
@media (max-width: 480px) {
  .colecoes-layout {
    flex-direction: column;
  }
  .colecoes-main {
    border-radius: 0 0 24px 24px;
    padding: 12px 6px 18px 6px;
  }
}
@media (max-width: 400px) {
  .banner-acervo img {
    height: 48px;
  }
}
</style>
