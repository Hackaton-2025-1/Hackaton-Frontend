<script setup></script>

<template>

<div class="container">

  <!-- Container de imagem -->
  <div class="image-box"></div>

  <p>Matricula</p>
  <p>Acervo</p>
  <p>Categoria</p>
  <p>Materia-prima</p>
  <p>Subtipo</p>
  <p>Localização</p>
  <p>Conservação</p>

  <!-- Botão Editar -->
  <button class="edit-btn">Editar</button>

</div>

</template>

<style scoped>

.container {
  margin-left: 270px;
  display: flex;
  gap: 90px;
  background-color: #ffffff;
  border: 1px solid rgb(202, 202, 202);
  margin-top: 4px;
  width: 1550px;
  height: 62px;
  color: #C45D4C;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Caixa simulando espaço para imagem */
.image-box {
  width: 50px;
  height: 45px;
  border: 1px solid #bfbfbf;
  background-color: #f8f8f8;
  border-radius: 6px;
}

/* Botão Editar */
.edit-btn {
  padding: 6px 16px;
  background-color: #C45D4C;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  transition: .2s;
}

.edit-btn:hover {
  background-color: #a44336;
}

</style>
