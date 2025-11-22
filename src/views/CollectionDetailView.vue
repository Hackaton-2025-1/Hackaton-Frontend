<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCollectionsStore } from '../stores/collections'
import NavBar from '@/componente/NavBar.vue'
import Footer from '@/componente/footer.vue'

const route = useRoute()
const router = useRouter()
const store = useCollectionsStore()

const collection = computed(() => store.getCollectionById(route.params.id))
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 8

const filteredItems = computed(() => {
  if (!collection.value) return []
  
  if (!searchQuery.value.trim()) {
    return collection.value.items
  }
  
  const query = searchQuery.value.toLowerCase()
  return collection.value.items.filter(item => 
    item.name.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query) ||
    item.location.toLowerCase().includes(query) ||
    item.date.toLowerCase().includes(query)
  )
})

const totalPages = computed(() => {
  return Math.ceil(filteredItems.value.length / itemsPerPage)
})

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredItems.value.slice(start, end)
})

const goToPage = (page) => {
  currentPage.value = page
  window.scrollTo({ top: 400, behavior: 'smooth' })
}

const goBack = () => {
  router.push('/')
}

const handleSearch = () => {
  currentPage.value = 1
}

/* MODAL DE DETALHES */
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

// Histórico de movimentações (exemplo - em produção viria do banco)
const historicoMovimentacoes = computed(() => {
  if (!acervoSelecionado.value) return []
  
  // Exemplo de histórico - substituir por dados reais do backend
  return [
    {
      tipo: 'Catalogação Inicial',
      data: '15/03/2020',
      localizacao: 'Depósito Principal - Sala 1, Prateleira A3',
      responsavel: 'Dr. Paulo Duarte',
      detalhes: 'Artefato catalogado e incluído no acervo permanente'
    },
    {
      tipo: 'Reserva para Pesquisa',
      data: '22/08/2021',
      localizacao: 'Laboratório de Arqueologia - Mesa 5',
      responsavel: 'Dra. Maria Clara',
      detalhes: 'Análise morfológica e datação por carbono 14'
    },
    {
      tipo: 'Transferência',
      data: '10/11/2021',
      localizacao: 'Sala de Exposição - Vitrine 12',
      responsavel: 'Curador João Silva',
      detalhes: 'Artefato selecionado para exposição "Sambaquis do Litoral"'
    },
    {
      tipo: 'Reserva para Pesquisa',
      data: '05/04/2023',
      localizacao: 'Laboratório de Conservação - Bancada 2',
      responsavel: 'Prof. Castro Faria',
      detalhes: 'Processo de restauração e conservação preventiva'
    },
    {
      tipo: 'Localização Atual',
      data: '18/09/2024',
      localizacao: 'Depósito Climatizado - Sala 3, Estante B, Prateleira 7',
      responsavel: 'Dra. Dorath Uchôa',
      detalhes: 'Retorno ao acervo permanente após restauração'
    }
  ]
})
</script>

<template>
  <div v-if="collection" class="detail-page">
    <NavBar />
    
    <!-- Banner -->
    <div class="banner">
      <div class="banner-image" :style="{ backgroundImage: `url(${collection.banner})` }"></div>
      <div class="banner-overlay">
        <div class="banner-content">
          <button class="back-button" @click="goBack">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Voltar
          </button>
          <h1 class="banner-title">{{ collection.name }}</h1>
        </div>
      </div>
    </div>

    <!-- Conteúdo -->
    <div class="content-wrapper">
      <div class="content-container">
        <!-- Info da Coleção -->
        <div class="collection-header">
          <p class="collection-description">{{ collection.description }}</p>
          <div class="collection-stats">
            <span class="stat-badge">{{ filteredItems.length }} {{ filteredItems.length === 1 ? 'artefato' : 'artefatos' }}</span>
          </div>
        </div>

        <div class="linha-decorativa"></div>

        <!-- Barra de Pesquisa -->
        <div class="search-section">
          <div class="search-box">
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input 
              v-model="searchQuery" 
              @input="handleSearch"
              type="text" 
              placeholder="Buscar artefatos por nome, período ou localização..."
              class="search-input"
            >
            <button v-if="searchQuery" @click="searchQuery = ''; handleSearch()" class="clear-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Sem Resultados -->
        <div v-if="searchQuery && filteredItems.length === 0" class="no-results">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <p>Nenhum artefato encontrado</p>
          <span>Tente buscar com outros termos</span>
        </div>

        <!-- Grid de Artefatos -->
        <div v-if="filteredItems.length > 0" class="items-section">
          <div class="items-grid">
            <div 
              v-for="item in paginatedItems" 
              :key="item.id" 
              class="acervo-card"
              @click="abrirModal(item)"
            >
              <img :src="item.photo" :alt="item.name" class="acervo-img">
              <div class="acervo-info">
                <h2>{{ item.name }}</h2>
                <p class="acervo-descricao">{{ item.description }}</p>
                <div class="acervo-detalhes">
                  <span><strong>Período:</strong> {{ item.date }}</span>
                  <span><strong>Localização:</strong> {{ item.location }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Paginação -->
          <nav v-if="totalPages > 1" class="pagination" aria-label="Paginação">
            <button 
              class="pagination-button pagination-prev"
              :disabled="currentPage === 1"
              @click="goToPage(currentPage - 1)"
              aria-label="Página anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            
            <div class="pagination-numbers">
              <button 
                v-for="page in totalPages" 
                :key="page"
                class="pagination-number"
                :class="{ active: page === currentPage }"
                @click="goToPage(page)"
                :aria-label="`Página ${page}`"
                :aria-current="page === currentPage ? 'page' : undefined"
              >
                {{ page }}
              </button>
            </div>
            
            <button 
              class="pagination-button pagination-next"
              :disabled="currentPage === totalPages"
              @click="goToPage(currentPage + 1)"
              aria-label="Próxima página"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Modal com Informações Detalhadas -->
    <div v-if="modalAberto" class="modal-overlay" @click.self="fecharModal">
      <div class="modal-content">
        <button class="modal-close" @click="fecharModal">&times;</button>
        
        <div class="modal-header">
          <div class="modal-img-wrap">
            <img :src="acervoSelecionado.photo" :alt="acervoSelecionado.name" class="modal-img">
          </div>
          <div class="modal-header-info">
            <h2 class="modal-title">{{ acervoSelecionado.name }}</h2>
            <p class="modal-descricao">{{ acervoSelecionado.description }}</p>
            <div class="modal-info-badges">
              <span class="info-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {{ acervoSelecionado.date }}
              </span>
              <span class="info-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {{ acervoSelecionado.location }}
              </span>
            </div>
          </div>
        </div>

        <div class="linha-decorativa-modal"></div>

        <!-- Formulário de Localização -->
        <form class="cadastro-form" @submit.prevent="salvarLocalizacao">
          <h3 class="form-section-title">Informações de Localização</h3>

          <div class="form-group">
            <label class="form-label">Sítio</label>
            <input v-model="localizacaoForm.sitio" class="form-input" type="text" placeholder="Número ou sigla do sítio" />
          </div>

          <div class="form-group">
            <label class="form-label"><span class="required">*</span> Cidade</label>
            <input v-model="localizacaoForm.cidade" class="form-input" type="text" placeholder="Cidade do artefato" required />
          </div>

          <div class="form-group">
            <label class="form-label"><span class="required">*</span> Estado</label>
            <select v-model="localizacaoForm.estado" class="form-input" required>
              <option value="">Selecione o estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Bloco</label>
            <input v-model="localizacaoForm.bloco" class="form-input" type="text" placeholder="Bloco do local" />
          </div>

          <div class="form-group">
            <label class="form-label">Prédio</label>
            <input v-model="localizacaoForm.predio" class="form-input" type="text" placeholder="Prédio do local" />
          </div>

          <div class="form-group">
            <label class="form-label"><span class="required">*</span> Sala</label>
            <input v-model="localizacaoForm.sala" class="form-input" type="text" placeholder="Sala onde está o artefato" required />
          </div>

          <div class="form-group">
            <label class="form-label">Prateleira</label>
            <input v-model="localizacaoForm.prateleira" class="form-input" type="text" placeholder="Prateleira do artefato" />
          </div>

          <div class="form-group">
            <label class="form-label"><span class="required">*</span> Data de Entrada</label>
            <input v-model="localizacaoForm.dataEntrada" class="form-input" type="date" required />
          </div>

          <div class="form-group">
            <label class="form-label">Data de Saída</label>
            <input v-model="localizacaoForm.dataSaida" class="form-input" type="date" />
          </div>

          <div class="form-actions">
            <button type="button" class="btn-cancel" @click="fecharModal">Cancelar</button>
            <button type="submit" class="btn-save">Salvar Informações</button>
          </div>
        </form>
      </div>
    </div>

    <Footer />
  </div>

  <div v-else class="not-found">
    <NavBar />
    <div class="not-found-content">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <h2>Coleção não encontrada</h2>
      <button @click="goBack" class="button-primary">Voltar para coleções</button>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
/* ===========================
   LAYOUT GERAL
=========================== */
.detail-page {
  min-height: 100vh;
  background: #f4f1ea;
  display: flex;
  flex-direction: column;
  font-family: "Cinzel", "Georgia", serif;
  letter-spacing: 0.3px;
}

/* ===========================
   BANNER
=========================== */
.banner {
  position: relative;
  height: 320px;
  overflow: hidden;
}

.banner-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-color: #e5dbc9;
  filter: brightness(0.6) sepia(0.2);
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);
}

.banner-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 0px;
  padding-bottom: 40px;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(250, 247, 241, 0.95);
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #4a3e2e;
  cursor: pointer;
  transition: all 0.25s ease;
  align-self: flex-start;
  backdrop-filter: blur(8px);
  font-family: "Cinzel", serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.back-button:hover {
  background: #ffffff;
  transform: translateX(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.back-button:active {
  transform: translateX(-1px);
}

.banner-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.5);
  font-family: "Cinzel", serif;
}

/* ===========================
   CONTEÚDO
=========================== */
.content-wrapper {
  flex: 1;
  background: #f4f1ea;
}

.content-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 3rem 3%;
}

/* ===========================
   HEADER DA COLEÇÃO
=========================== */
.collection-header {
  margin-bottom: 2rem;
  text-align: center;
}

.collection-description {
  font-size: 1.15rem;
  color: #4b4030;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  font-family: "Georgia", serif;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.collection-stats {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.stat-badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 18px;
  background: #faf7f1;
  border: 1.5px solid #e5dbc9;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #6b6355;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

/* LINHA DECORATIVA */
.linha-decorativa {
  width: 100%;
  max-width: 800px;
  height: 3px;
  background: linear-gradient(90deg, #caa76c, #7b5e34);
  margin: 2rem auto;
}

/* ===========================
   BUSCA
=========================== */
.search-section {
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 700px;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 18px;
  color: #9c7a42;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 16px 52px 16px 52px;
  font-size: 1rem;
  color: #483d2e;
  background: #ffffff;
  border: 1.5px solid #c6a574;
  border-radius: 12px;
  outline: none;
  transition: all 0.25s ease;
  font-family: "Georgia", serif;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.search-input::placeholder {
  color: #a0927d;
}

.search-input:focus {
  border-color: #9c7a42;
  box-shadow: 0 6px 20px rgba(156, 122, 66, 0.15);
}

.clear-button {
  position: absolute;
  right: 14px;
  padding: 8px;
  background: transparent;
  border: none;
  color: #9c7a42;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.clear-button:hover {
  background: #f7f2e8;
  color: #7b5e34;
}

/* ===========================
   SEM RESULTADOS
=========================== */
.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 24px;
  text-align: center;
}

.no-results svg {
  color: #d7ccb7;
  margin-bottom: 20px;
}

.no-results p {
  font-size: 1.3rem;
  font-weight: 600;
  color: #5b422b;
  margin-bottom: 8px;
}

.no-results span {
  font-size: 1rem;
  color: #a0927d;
  font-family: "Georgia", serif;
}

/* ===========================
   GRID DE ARTEFATOS
=========================== */
.items-section {
  margin-top: 2rem;
}

.items-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  margin-bottom: 3rem;
}

.acervo-card {
  background: #faf7f1;
  border: 1px solid #e5dbc9;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.25s ease;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

.acervo-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-color: #d7ccb7;
}

.acervo-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  filter: brightness(0.85) sepia(0.15);
  transition: filter 0.3s ease;
}

.acervo-card:hover .acervo-img {
  filter: brightness(0.9) sepia(0.1);
}

.acervo-info {
  padding: 1.4rem 1.6rem;
}

.acervo-info h2 {
  text-align: center;
  font-size: 1.35rem;
  color: #5b422b;
  font-weight: 600;
  margin-bottom: 0.8rem;
  font-family: "Cinzel", serif;
}

.acervo-descricao {
  color: #3d372f;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  font-family: "Georgia", serif;
  line-height: 1.6;
}

.acervo-detalhes {
  border-top: 1px solid #d7ccb7;
  padding-top: 1rem;
  font-size: 0.9rem;
  color: #6b6355;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: "Georgia", serif;
}

/* ===========================
   PAGINAÇÃO
=========================== */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px;
}

.pagination-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: #faf7f1;
  border: 1.5px solid #e5dbc9;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
  color: #6b6355;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.pagination-button:hover:not(:disabled) {
  background: #f7f2e8;
  border-color: #d7ccb7;
  color: #5b422b;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-numbers {
  display: flex;
  gap: 6px;
}

.pagination-number {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  height: 42px;
  padding: 0 14px;
  background: #faf7f1;
  border: 1.5px solid #e5dbc9;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #6b6355;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: "Cinzel", serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.pagination-number:hover {
  background: #f7f2e8;
  border-color: #d7ccb7;
  color: #5b422b;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.pagination-number.active {
  background: linear-gradient(135deg, #caa76c, #9c7a42);
  border-color: #9c7a42;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(156, 122, 66, 0.3);
}

/* ===========================
   MODAL
=========================== */
.modal-overlay {
  position: fixed;
  inset: 0;
  backdrop-filter: blur(6px);
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  overflow-y: auto;
}

.modal-content {
  background: #fffdf6;
  max-width: 900px;
  width: 100%;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  overflow-y: auto;
  margin: auto;
}

.modal-close {
  background: #f7f2e8;
  border: 1.5px solid #e5dbc9;
  padding: 6px;
  margin-bottom: 20px;
  font-size: 28px;
  cursor: pointer;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b6355;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: #eae3d4;
  color: #5b422b;
}

/* Modal Header com Imagem e Info */
.modal-header {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.modal-img-wrap {
  flex-shrink: 0;
  width: 280px;
  height: 280px;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid #e5dbc9;
}

.modal-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9) sepia(0.1);
}

.modal-header-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-title {
  font-size: 1.9rem;
  color: #644828;
  margin-bottom: 1rem;
  font-family: "Cinzel", serif;
  font-weight: 700;
}

.modal-descricao {
  font-size: 1rem;
  color: #4b4030;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  font-family: "Georgia", serif;
}

.modal-info-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.info-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: #f7f2e8;
  border: 1px solid #e5dbc9;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #6b6355;
  font-family: "Georgia", serif;
}

.info-badge svg {
  color: #9c7a42;
}

.linha-decorativa-modal {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #caa76c, #7b5e34);
  margin: 2rem 0;
}

/* ===========================
   FORMULÁRIO NO MODAL
=========================== */
.cadastro-form {
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  animation: fadeIn 0.4s ease;
  font-family: Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.form-section-title {
  font-size: 1.4rem;
  color: #5b422b;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-family: "Cinzel", serif;
  text-align: center;
}

.form-group {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
}

.form-label {
  flex: 0 0 180px;
  font-weight: bold;
  color: #444444;
  font-size: 15px;
  font-family: "Georgia", serif;
}

.form-input {
  flex: 1;
  padding: 10px 12px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.17);
  border-radius: 6px;
  font-size: 14px;
  background: #fafafa;
  transition: 0.2s;
  font-family: "Georgia", serif;
}

.form-input:focus {
  outline: none;
  border-color: #9c7a42;
  background: #fff;
  box-shadow: 0 0 0 2px rgba(156, 122, 66, 0.1);
}

.required {
  color: #d32f2f;
  margin-right: 5px;
  font-weight: bold;
}

/* Botões de Ação */
.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5dbc9;
}

.btn-cancel,
.btn-save {
  padding: 12px 28px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: "Cinzel", serif;
}

.btn-cancel {
  background: #f7f2e8;
  color: #6b6355;
  border: 1.5px solid #e5dbc9;
}

.btn-cancel:hover {
  background: #eae3d4;
  border-color: #d7ccb7;
}

.btn-save {
  background: linear-gradient(135deg, #caa76c, #9c7a42);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(156, 122, 66, 0.3);
}

.btn-save:hover {
  background: linear-gradient(135deg, #9c7a42, #7b5e34);
  box-shadow: 0 6px 18px rgba(156, 122, 66, 0.4);
  transform: translateY(-2px);
}

.btn-save:active {
  transform: translateY(0);
}

/* ===========================
   NOT FOUND
=========================== */
.not-found {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f4f1ea;
}

.not-found-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
}

.not-found-content svg {
  color: #d7ccb7;
  margin-bottom: 24px;
}

.not-found-content h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #5b422b;
  margin-bottom: 24px;
  font-family: "Cinzel", serif;
}

.button-primary {
  padding: 14px 32px;
  background: linear-gradient(135deg, #caa76c, #9c7a42);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: "Cinzel", serif;
  box-shadow: 0 4px 14px rgba(156, 122, 66, 0.3);
}

.button-primary:hover {
  background: linear-gradient(135deg, #9c7a42, #7b5e34);
  box-shadow: 0 6px 18px rgba(156, 122, 66, 0.4);
  transform: translateY(-2px);
}

.button-primary:active {
  transform: translateY(0);
}

/* ===========================
   RESPONSIVO
=========================== */
@media (max-width: 768px) {
  .banner {
    height: 240px;
  }

  .banner-title {
    font-size: 2rem;
  }

  .content-container {
    padding: 2rem 5%;
  }

  .collection-description {
    font-size: 1rem;
  }

  .items-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .pagination-numbers {
    flex-wrap: wrap;
  }

  .modal-content {
    padding: 2rem;
  }

  .modal-header {
    flex-direction: column;
    align-items: center;
  }

  .modal-img-wrap {
    width: 100%;
    max-width: 300px;
    height: 300px;
  }

  .modal-header-info {
    text-align: center;
  }

  .modal-info-badges {
    justify-content: center;
  }

  .form-group {
    flex-direction: column;
    align-items: flex-start;
  }

  .form-label {
    flex: 0 0 auto;
    width: 100%;
  }

  .form-input {
    width: 100%;
  }

  .form-actions {
    flex-direction: column;
  }

  .btn-cancel,
  .btn-save {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .banner-title {
    font-size: 1.75rem;
  }

  .collection-header {
    margin-bottom: 1.5rem;
  }

  .search-input {
    padding: 14px 48px 14px 48px;
    font-size: 0.9rem;
  }

  .acervo-info h2 {
    font-size: 1.2rem;
  }

  .modal-content {
    padding: 1.5rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .form-section-title {
    font-size: 1.2rem;
  }
}
</style>