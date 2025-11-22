<template>
  <NavBar />

  <router-link to="gerenciamento" class="btn-voltar">
  <i class="fas fa-arrow-left"></i>
</router-link>




  <h1 class="cadastro-title">CADASTRO DE ITENS DO ACERVO</h1>


  <main class="cadastro-container">
    <div class="cadastro-tabs">
      <button
        class="tab-button"
        :class="{ active: activeTab === 'Geral' }"
        @click="activeTab = 'Geral'"
      >
        Geral
      </button>

      <button
        class="tab-button"
        :class="{ active: activeTab === 'Dados' }"
        @click="activeTab = 'Dados'"
      >
        Dados
      </button>

      <button
        class="tab-button"
        :class="{ active: activeTab === 'Imagens' }"
        @click="activeTab = 'Imagens'"
      >
        Imagens
      </button>
    </div>

    <component :is="getActiveComponent" />
  </main>
</template>

<script setup>
import NavBar from '@/componente/NavBar.vue';
import CadastroGeral from '../componente/CadastroGeral.vue';
import CadastroDados from '../componente/CadastroDados.vue';
import CadastroImagens from '../componente/CadastroImagens.vue';

import { ref, computed } from 'vue';

const activeTab = ref('Geral');

const getActiveComponent = computed(() => {
  switch (activeTab.value) {
    case 'Geral':
      return CadastroGeral;
    case 'Dados':
      return CadastroDados;
    case 'Imagens':
      return CadastroImagens;
    default:
      return CadastroGeral;
  }
});
</script>

<style scoped>
.cadastro-container {
  padding: 40px;
  max-width: 93%;
  margin: 30px auto 0;
  background-color: #ffffff;
  border-radius: 5px;
  border: rgba(0, 0, 0, 0.17) 1px solid;
}

.linha {
  display: block;
  width: calc(100% - 48px);
  height: 1px;
  background-color: rgba(0, 0, 0, 0.17);
  margin-left: 24px;
  margin-bottom: 10px;
}

.cadastro-title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  color: #c45d4c;
  margin-left: 110px;
  margin-top: 16vh;
}

.cadastro-tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 35px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.17);
}

.tab-button {
  padding: 15px 30px;
  border: none;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s, border-color 0.3s;
}

.tab-button.active {
  color: rgba(0, 0, 0, 1);
  border-top: 1px solid rgba(0, 0, 0, 0.17);
  border-left: 1px solid rgba(0, 0, 0, 0.17);
  border-right: 1px solid rgba(0, 0, 0, 0.17);
  border-bottom: none;
  background-color: #f9f9f9;
}

.tab-button:hover:not(.active) {
  color: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}


.btn-voltar {
  position: absolute;
  top: 150px;
  left: 30px;
  background-color: #c45d4c;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 100px;
  cursor: pointer;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: 0.3s;
  width: 17px;
}


.btn-voltar i {
  font-size: 16px;
}

.btn-voltar:hover {
  background-color: #a94b3c;
}

</style>
