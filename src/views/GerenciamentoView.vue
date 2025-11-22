<script setup>
import { ref, onMounted } from 'vue'
import { fetchArtefatos } from '@/services/api.js'
import NavBar from '@/componente/NavBar.vue'
import SideBar from '@/componente/SideBar.vue'
import telaGerenciamento from '@/componente/telaGerenciamento.vue'
import telaView from '@/componente/telaView.vue'

const artefatos = ref([])
async function loadArtefatos() {
  try {
    artefatos.value = await fetchArtefatos()
  } catch (err) {
    artefatos.value = []
  }
}
onMounted(loadArtefatos)
</script>

<template>
  <main>
    <div class="topo">
      <h1>Gerenciamento de Acervo</h1>
    </div>

    <NavBar></NavBar>
    <SideBar></SideBar>

    <telaGerenciamento></telaGerenciamento>
    <telaView v-for="artefato in artefatos" :key="artefato.id" :artefato="artefato" />
  </main>
</template>

<style scoped>
.topo {
  margin-left: 270px;
  margin-top: 150px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1568px;
  color: #c45d4c;
}
</style>
