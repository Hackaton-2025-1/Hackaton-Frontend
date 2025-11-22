<script setup>
defineProps({ artefato: Object })
</script>

<template>
  <div class="container">
    <!-- Imagem -->
    <div class="image-box" v-if="artefato.imagem">
      <img
        :src="artefato.imagem"
        alt="Imagem cadastrada"
        style="width: 45px; height: 45px; object-fit: cover; border-radius: 6px"
      />
    </div>
    <!-- Matricula (ID) -->
    <p>{{ artefato.id }}</p>
    <!-- Acervo (Nome) -->
    <p>{{ artefato.nome }}</p>
    <!-- Categoria -->
    <p>{{ artefato.categoria_nome }}</p>
    <!-- Matéria-prima -->
    <p>{{ artefato.materiaPrima }}</p>
    <!-- Subtipo -->
    <p>{{ artefato.subtipo }}</p>
    <!-- Localização (Cidade) -->
    <p>{{ artefato.cidade }}</p>
    <!-- Conservação (Nível) -->
    <p>{{ artefato.nivel_conservacao }}</p>
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
  color: #c45d4c;
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
  background-color: #c45d4c;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.2s;
}

.edit-btn:hover {
  background-color: #a44336;
}
</style>
