<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  colecaoSelecionada: String
})
const emit = defineEmits(['selecionarColecao'])

const colecoes = [
  { value: 'vegetal', label: 'Vegetal', icon: 'fas fa-leaf' },
  { value: 'mineral', label: 'Mineral', icon: 'fas fa-gem' },
  { value: 'animal', label: 'Animal', icon: 'fas fa-paw' },
  { value: 'sintetico', label: 'Sintéticos', icon: 'fas fa-ellipsis-h' }
]
</script>

<template>
  <div class="sidebar">
    <h2 class="title">Menu</h2>
    <ul class="menu">
      <li v-for="c in colecoes" :key="c.value"
          :class="{ active: c.value === props.colecaoSelecionada }"
          @click="emit('selecionarColecao', c.value)">
        <i :class="c.icon"></i> {{ c.label }}
      </li>
    </ul>
    <hr class="divider" />
    <ul class="menu">
      <li><i class="fas fa-archive"></i> Cadastrar Acervo</li>
      <li><i class="fas fa-folder-plus"></i> Cadastrar Categoria</li>
    </ul>
  </div>
</template>

<style scoped>

.sidebar {
  position: static;
  width: 270px;
  min-width: 270px;
  height: auto;
  min-height: 100vh;
  background: linear-gradient(180deg, #695431, #4e3d22);
  color: #fff;
  padding: 20px 0 20px 0;
  box-sizing: border-box;
  border-right: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 4px 0 18px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 0;
}


.title {
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
  border-left: 3px solid #f1e1b6;
  padding-left: 8px;
}

.divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  margin: 10px 0 15px;
}


.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}


.menu li {
  padding: 10px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 12px;

  cursor: pointer;

  transition: background-color 0.2s, padding-left 0.2s;
}

.menu li:hover {
  background-color: rgba(255, 255, 255, 0.15);
  padding-left: 16px;
}

.menu li.active {
  background-color: rgba(255, 255, 255, 0.25);
  font-weight: bold;
}


@media (max-width: 900px) {
  .sidebar {
    width: 100vw;
    min-height: auto;
    border-radius: 0;
    flex-direction: row;
    justify-content: center;
    box-shadow: none;
    border-right: none;
    padding: 10px 0;
  }
  .menu {
    flex-direction: row;
    gap: 8px;
    width: 100%;
    justify-content: center;
  }
}

@media (min-width: 769px) {
  body {
    margin-left: 240px;
  }
}
</style>
