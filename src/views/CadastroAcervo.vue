<template>
  <header>
    <Header
      logoSrc="/public/favicon.ico"
      userName="Matheus Gaspar"
      userSrc="/public/imagens/logo.png"
    />
  </header>
  <h1 class="cadastro-title">Cadastro de Itens no Acervo</h1>
  <span class="linha"></span>
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
import Header from '../componente/header.vue'
import CadastroGeral from '../componente/CadastroGeral.vue'
import CadastroDados from '../componente/CadastroDados.vue'
import CadastroImagens from '../componente/CadastroImagens.vue'

import { ref, computed } from 'vue'

const activeTab = ref('Geral')

const getActiveComponent = computed(() => {
  switch (activeTab.value) {
    case 'Geral':
      return CadastroGeral
    case 'Dados':
      return CadastroDados
    case 'Imagens':
      return CadastroImagens
    default:
      return CadastroGeral
  }
})
</script>

<style scoped>
.cadastro-container {
  padding: 40px;
  max-width: 93%;
  margin: 30px auto;
  margin-top: 0;
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
  margin-left: 70px;
  margin-top: 30px;
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
  transition:
    color 0.3s,
    border-color 0.3s;
}

.tab-button.active {
  color: rgba(0, 0, 0, 1);
  border-top: 1px solid rgba(0, 0, 0, 0.17);
  border-left: 1px solid rgba(0, 0, 0, 0.17);
  border-right: 1px solid rgba(0, 0, 0, 0.17);
  border-bottom: none;
  background-color: #f9f9f9; 
}

.tab-button:not(.active) {
  color: rgba(0, 0, 0, 0.5);
  background-color: transparent;
}

.tab-button:hover:not(.active) {
  color: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.cadastro-form {
  display: grid;
  gap: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
  margin-bottom: 10px;
  color: #555555;
}

input,
select,
textarea {
  padding: 15px;
  border: 1px solid #dddddd;
  border-radius: 6px;
  font-size: 18px;
}

textarea {
  resize: none;
  height: 120px;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #d4a373;
  outline: none;
}
</style>
