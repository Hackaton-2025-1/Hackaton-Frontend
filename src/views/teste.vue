<script setup>
import Header from '@/componente/NavBar.vue'
import Acervo from '@/componente/acervo.vue'
import SideBar from '@/componente/SideBar.vue'
</script>

<script>
export default {
  name: 'TesteView'
}
</script>

<template>
  <Header />
  <div class="layout-flex">
    <SideBar />
    <div class="acervo-list">
      <Acervo />
      <Acervo />
      <Acervo />
      <Acervo />
      <Acervo />
      <Acervo />
    </div>
  </div>
</template>

<style scoped>
.NavBar-sidebar-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 0;
}
.NavBar-sidebar-row > .SideBar {
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 10;
}
.layout-flex {
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  gap: 32px;
  padding: 32px 0;
}
.layout-flex > :deep(.sidebar) {
  position: fixed;
  left: 0;
  top: 80px; /* altura do NavBar */
  height: calc(100vh - 80px);
  z-index: 100;
  border-right: 2px solid #a67c52;
}
.acervo-list {
  margin-left: 240px; /* largura do sidebar */
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  overflow-y: auto;
}
@media (max-width: 900px) {
  .NavBar-sidebar-row {
    flex-direction: column;
    gap: 0;
  }
  .NavBar-sidebar-row > .SideBar {
    position: static;
    height: auto;
  }
  .layout-flex {
    flex-direction: column;
    gap: 18px;
    padding: 16px 0;
  }
  .layout-flex > :deep(.sidebar) {
    position: static;
    left: auto;
    top: auto;
    height: auto;
    border-right: none;
  }
  .acervo-list {
    margin-left: 0;
    gap: 12px;
  }
}
</style>

