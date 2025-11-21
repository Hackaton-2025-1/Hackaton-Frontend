<script setup></script>

<template>
  <div class="container">
    <div class="image-box"></div>
    <p>Matricula</p>
    <p>Acervo</p>
    <p>Categoria</p>
    <p>Materia-prima</p>
    <p>Subtipo</p>
    <p>Localização</p>
    <p>Conservação</p>
  </div>
</template>

<style scoped>
.container {
  margin-left: 270px;
  display: flex;
  gap: 140px;
  width: 1578px;
  height: 62px;
  border: 0.5px solid rgb(216, 214, 214);
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 4px;
}

p {
  color: rgb(129, 129, 129);
}


.image-box {
  width: 40px;
  height: 40px;
  border: 1px solid rgb(173, 173, 173);
  border-radius: 4px;
}
</style>
