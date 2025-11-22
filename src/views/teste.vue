<script setup>
import Header from '@/componente/NavBar.vue'
import SideBar from '@/componente/SideBar.vue'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()
</script>

<template>
  <Header :userSrc="userStore.avatar" :userName="userStore.name || 'Visitante'" />
  <div class="layout-flex">
    <SideBar />
    <div class="acervo-list">
      <div class="acervo-item">Acervo 1</div>
      <div class="acervo-item">Acervo 2</div>
      <div class="acervo-item">Acervo 3</div>
      <div class="acervo-item">Acervo 4</div>
      <div class="acervo-item">Acervo 5</div>
      <div class="acervo-item">Acervo 6</div>
    </div>
  </div>
</template>

<style scoped>
.layout-flex {
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  gap: 32px;
  padding: 32px 0;
}
.acervo-list {
  margin-left: 240px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  overflow-y: auto;
}
.acervo-item {
  background: #f7f3ec;
  border: 1px solid #a67c52;
  border-radius: 8px;
  padding: 18px;
  font-size: 1.2rem;
  color: #6b4e32;
}
</style>
