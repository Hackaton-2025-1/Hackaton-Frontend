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
              <button class="card-btn">Ver detalhes</button>
            </div>
          </div>
        </div>
      </section>
      <section v-else class="acervo-section">
        <p class="sem-colecao">Nenhuma coleção encontrada para este tipo de acervo.</p>
      </section>
    </main>
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
  width: 24px;
  height: 24px;
  background: #fffbe6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  border: 1px solid #a67c52;
}
.colecao-img {
  width: 16px;
  height: 16px;
  object-fit: contain;
  border-radius: 2px;
  background: #fffbe6;
  border: 1px solid #a67c52;
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
}
@media (max-width: 600px) {
  .banner-acervo img {
    height: 90px;
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
    width: 12px;
    height: 12px;
    margin-bottom: 1px;
    border-radius: 1px;
  }
  .colecao-img {
    width: 8px;
    height: 8px;
    border-radius: 1px;
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
