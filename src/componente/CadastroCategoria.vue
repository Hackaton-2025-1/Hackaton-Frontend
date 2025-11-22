<script setup>
import { ref } from 'vue';

// campo de texto
const nomeCategoria = ref('');

// função de salvar
function salvarCategoria() {
  if (!nomeCategoria.value.trim()) {
    alert("Digite o nome da categoria.");
    return;
  }

  // aqui você pode enviar para API, salvar local, etc.
  console.log("Nova categoria cadastrada:", nomeCategoria.value);

  // limpar o campo após salvar
  nomeCategoria.value = "";
}
</script>

<template>
  <div class="container">
    <h2>Cadastrar Nova Categoria</h2>

    <div class="form">
      <label>Nome da Categoria:</label>
      <input
        type="text"
        v-model="nomeCategoria"
        placeholder="Digite o nome..."
      />

      <button @click="salvarCategoria">
        Salvar
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;
  padding: 16px;
  background: #f4f4f4;
  border-radius: 8px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  background: #008cff;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #0072d6;
}
</style>
