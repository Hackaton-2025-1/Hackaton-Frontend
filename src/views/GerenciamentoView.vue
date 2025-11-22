<script setup>
import NavBar from '@/componente/NavBar.vue';
import SideBar from '@/componente/SideBar.vue';
import telaGerenciamento from '@/componente/telaGerenciamento.vue';
import telaView from '@/componente/telaView.vue';
import { ref, onMounted } from 'vue';
import { fetchArtefatos } from '../services/api.js';
import { useUserStore } from '@/stores/user.js'

const artefatos = ref([])
const userStore = useUserStore()

const loadArtefatos = async () => {
  artefatos.value = await fetchArtefatos()
}

onMounted(loadArtefatos)

</script>

<template>

  <main>
    <div class="topo">

      <h1>Gerenciamento de Acervo</h1>

    </div>


    <NavBar :userSrc="userStore.avatar" :userName="userStore.name || 'Visitante'" />
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
  margin-top: 150px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1568px;
  color: #C45D4C;

}
</style>
