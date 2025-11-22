<script setup>
import NavBar from '@/componente/NavBar.vue'
import SideBar from '@/componente/SideBar.vue'
import telaGerenciamento from '@/componente/telaGerenciamento.vue'
import telaView from '@/componente/telaView.vue'
import { ref, onMounted } from 'vue'
import { fetchArtefatos, deleteArtefato as apiDeleteArtefato } from '../services/api.js'

const artefatos = ref([])

const loadArtefatos = async () => {
  try {
    artefatos.value = await fetchArtefatos()
  } catch (error) {
    console.error('Erro ao carregar artefatos:', error)
  }
}

const deleteArtefato = async (id) => {
  try {
    await apiDeleteArtefato(id)
    artefatos.value = artefatos.value.filter((artefato) => artefato.id !== id)
  } catch (error) {
    console.error('Erro ao excluir artefato:', error)
  }
}

onMounted(loadArtefatos)
</script>

<template>
  <main>
    <div class="topo">
      <h1>Gerenciamento de Acervo</h1>
      <button class="btnAdicionar">
        <router-link to="/cadastroAcervo" style="text-decoration: none"
          >Adicionar Acervo</router-link
        >
      </button>
    </div>

    <NavBar></NavBar>
    <SideBar></SideBar>

    <telaGerenciamento></telaGerenciamento>
    <telaView></telaView><telaView></telaView>
    <telaView></telaView>
    <telaView></telaView>
    <telaView></telaView>
    <telaView></telaView>

    <div class="gerenciamento-view">
      <h1>Gerenciamento de Artefatos</h1>
      <ul>
        <li v-for="artefato in artefatos" :key="artefato.id">
          <span>{{ artefato.nome }}</span>
          <button @click="deleteArtefato(artefato.id)">Excluir</button>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.topo {
  margin-left: 270px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1568px;
}

.gerenciamento-view {
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #d32f2f;
}
</style>
