<script setup>
</script>

<template>
  <div class="sidebar">
    <h2 class="title">Menu</h2>

    <ul class="menu">
      <li><i class="fas fa-leaf"></i> Vegetal</li>
      <li><i class="fas fa-gem"></i> Mineral</li>
      <li><i class="fas fa-paw"></i> Animal</li>
      <li><i class="fas fa-ellipsis-h"></i> Outros</li>
    </ul>

    <hr class="divider" />

    <ul class="menu">
      <li><i class="fas fa-archive"></i><router-link to="/cadastroAcervo" class="link">Cadastro Acervo</router-link></li>
      <li><i class="fas fa-folder-plus"></i> Cadastrar Categoria</li>
    </ul>
  </div>
</template>

<style scoped>

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 240px;
  height: 100vh;
  background: linear-gradient(180deg, #695431, #4e3d22);
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 80px;
  margin-top: 100px;

  border-right: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 4px 0 18px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  gap: 10px;
}


.title {
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
  border-left: 3px solid #f1e1b6;
  padding-left: 8px;
  margin-top: 40px;
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


@media (max-width: 768px) {
  .sidebar {
    width: 200px;
    left: -200px;
    transition: 0.3s;
    box-shadow: none;
  }

  .sidebar.open {
    left: 0;
  }
}

@media (min-width: 769px) {
  body {
    margin-left: 240px;
  }
}

.link {
  list-style: none;
  text-decoration: none;
  color: white;
}
</style>
