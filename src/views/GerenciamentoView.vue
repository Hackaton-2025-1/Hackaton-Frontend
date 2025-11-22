<script setup>
import NavBar from '@/componente/NavBar.vue';
import SideBar from '@/componente/SideBar.vue';
import telaGerenciamento from '@/componente/telaGerenciamento.vue';
import telaView from '@/componente/telaView.vue';
import { ref, onMounted } from 'vue';
import { fetchArtefatos, deleteArtefato as apiDeleteArtefato } from '../services/api.js';

const artefatos = ref([])

const loadArtefatos = async () => {
  artefatos.value = await fetchArtefatos()
}

const deleteArtefato = async (id) => {
  await apiDeleteArtefato(id)
  artefatos.value = artefatos.value.filter((artefato) => artefato.id !== id)
}

onMounted(loadArtefatos)

</script>

<template>

  <main>
    <div class="topo">
      <h1>Gerenciamento de Acervo</h1>
      <button class="btnAdicionar"><router-link to="/cadastroAcervo" style="text-decoration: none;">Adicionar Acervo</router-link></button>
    </div>


    <NavBar></NavBar>
    <SideBar></SideBar>

    <telaGerenciamento></telaGerenciamento>
    <telaView></telaView><telaView></telaView>
    <telaView></telaView>
    <telaView></telaView>
    <telaView></telaView>
    <telaView></telaView>

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
</style>
