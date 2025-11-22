<script setup>
import { useCollectionsStore } from '../stores/collections'
import { useRouter } from 'vue-router'
import NavBar from '@/componente/NavBar.vue'
import FooterVue from '@/componente/footer.vue'
import { useUserStore } from '@/stores/user.js'
const userStore = useUserStore()

const store = useCollectionsStore()
const router = useRouter()

const goToCollection = (id) => {
  router.push(`/collection/${id}`)
}
</script>

<template>
  <div class="collections-page">
        <NavBar :userSrc="userStore.avatar" :userName="userStore.name || 'Visitante'" />

    <div class="collections-container">
      <header class="header">
        <h1>Coleções do Museu Sambaqui</h1>
        <p>
          Explore os acervos organizados por pesquisadores que dedicaram suas vidas ao estudo dos
          sambaquis
        </p>
      </header>

      <div class="collections-grid">
        <div
          v-for="collection in store.collections"
          :key="collection.id"
          class="collection-card"
          @click="goToCollection(collection.id)"
        >
          <div
            class="card-image"
            :style="{ backgroundImage: `url(${collection.backgroundImage})` }"
          ></div>
          <div class="card-content">
            <h2>{{ collection.name }}</h2>
          </div>
        </div>
      </div>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<style scoped>
/* ===========================
   LAYOUT GERAL
=========================== */
.collections-page {
  min-height: 100vh;
  background: #f4f1ea;
  padding-top: 0;
}

.collections-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 3%;
}

/* ===========================
   HEADER
=========================== */
.header {
  margin-bottom: 3rem;
  text-align: center;
  margin-top: 100px;
}

.header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #5b422b;
  margin-bottom: 0.8rem;
  letter-spacing: 0.3px;
  font-family: 'Cinzel', 'Georgia', serif;
}

.header p {
  font-size: 1.1rem;
  color: #6b6355;
  font-weight: 400;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: 'Georgia', serif;
}

/* ===========================
   GRID DE COLEÇÕES
=========================== */
.collections-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

/* ===========================
   CARDS DAS COLEÇÕES
=========================== */
.collection-card {
  background: #faf7f1;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.25s ease;
  border: 1px solid #e5dbc9;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

.collection-card:hover {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 260px;
  background-size: cover;
  background-position: center;
  background-color: #e5dbc9;
  filter: brightness(0.85) sepia(0.15);
  transition: filter 0.3s ease;
}

.collection-card:hover .card-image {
  filter: brightness(0.9) sepia(0.1);
}

.card-content {
  padding: 1.5rem 1.8rem;
  background: linear-gradient(135deg, #faf7f1 0%, #f7f2e8 100%);
}

.card-content h2 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #5b422b;
  line-height: 1.4;
  text-align: center;
  font-family: 'Cinzel', 'Georgia', serif;
  letter-spacing: 0.3px;
}

/* ===========================
   RESPONSIVO
=========================== */
@media (max-width: 768px) {
  .collections-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .header h1 {
    font-size: 2rem;
  }

  .header p {
    font-size: 1rem;
  }

  .collections-page {
    padding-top: 0;
  }

  .collections-container {
    padding: 2rem 5%;
  }

  .card-image {
    height: 220px;
  }

  .card-content h2 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .header h1 {
    font-size: 1.75rem;
  }

  .card-content {
    padding: 1.3rem 1.5rem;
  }
}
</style>
