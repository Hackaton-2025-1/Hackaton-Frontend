// ...existing code...
<script setup>
import { ref } from 'vue'

const showEdit = ref(false)

function toggleEdit() {
  showEdit.value = !showEdit.value
}
</script>

<template>

  <div class="container">


    <p>26739</p>
    <p>Maria Barbosa</p>
    <p>Osseo humano</p>
    <p>Animal</p>
    <p>mamifero</p>
    <p>88390-000</p>
    <p>Bom Estado</p>

    <!-- Botão Editar -->
    <button class="edit-btn" @click="toggleEdit">Editar</button>

  </div>

  <!-- Modal overlay centralizado -->
  <div v-if="showEdit" class="overlay" @click.self="toggleEdit">
    <div class="edit-panel">
      <div class="edit-header">
        <strong>Editar registro</strong>
        <button class="close-btn" @click="toggleEdit">Fechar</button>
      </div>

      <div class="edit-body">
        <!-- campos de exemplo; substitua pelos inputs reais -->
        <label>Matricula: <input type="text" /></label>
        <label>Acervo: <input type="text" /></label>
        <label>Categoria: <input type="text" /></label>
        <label>Materia-prima: <input type="text" /></label>
        <label>Subtitulo: <input type="text" /></label>
        <label>Localização: <input type="text" /></label>
        <label>Conservação: <input type="text" /></label>
        <!-- adicione mais campos conforme necessário -->
        <div class="actions">
          <button class="save-btn">Salvar</button>
        </div>
      </div>
    </div>
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

/* Overlay que escurece a tela e centraliza o modal */
.overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  padding: 20px;
}

/* Painel modal centralizado */
.edit-panel {
  width: 700px;
  max-width: 100%;
  background: #fff;
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  padding: 16px;
  color: #333;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* Cabeçalho e botões do modal */
.edit-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.close-btn {
  background: transparent;
  border: 1px solid #ccc;
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
}

.edit-body label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
}

/* Estilizando os inputs */
.edit-body input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  margin-top: 6px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

/* Estilo de foco nos inputs */
.edit-body input[type="text"]:focus {
  border-color: #C45D4C;
  outline: none;
}

/* Ações e botão salvar */
.actions {
  margin-top: 20px;
}

.save-btn {
  padding: 8px 16px;
  background-color: #C45D4C;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.save-btn:hover {
  background-color: #a44336;
}

</style>
