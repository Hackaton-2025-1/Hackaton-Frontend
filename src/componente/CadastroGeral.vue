<template>
  <form class="cadastro-form">
    <div class="form-group">
      <label for="item-name" class="form-label">
        <span class="required">*</span> Nome do Item
      </label>
      <input class="form-input" type="text" id="item-name" placeholder="Nome do Acervo" required />
    </div>

    <div class="form-group">
      <label for="category" class="form-label"> <span class="required">*</span> Categoria </label>
      <select class="form-input" id="category" required>
        <option value="">Categoria</option>
      </select>
    </div>

    <div class="form-group">
      <label for="collection" class="form-label"> <span class="required">*</span> Coleção </label>
      <select class="form-input" id="collection" required>
        <option value="">Coleção</option>
      </select>
    </div>

    <div class="form-group">
      <label for="subtype" class="form-label"> <span class="required">*</span> Subtipo </label>
      <select class="form-input" id="subtype" required>
        <option value="">Tipo</option>
      </select>
    </div>

    <div class="form-group">
      <label for="conservation-level" class="form-label">
        <span class="required">*</span> Nível de conservação
      </label>
      <select class="form-input" id="conservation-level" required>
        <option value="">Nível</option>
      </select>
    </div>

    <div class="form-group">
      <label for="integrity" class="form-label">
        <span class="required">*</span> Integridade
      </label>
      <select class="form-input" id="integrity" required>
        <option value="">Inteireza</option>
      </select>
    </div>

    <div class="form-group">
      <label for="conservation-detail" class="form-label"> Detalhe conservação </label>
      <textarea
        id="conservation-detail"
        class="form-input"
        placeholder="Detalhe do estado de conservação"
        required
      ></textarea>
    </div>
  </form>
</template>

<script setup></script>

<style scoped>
/* Add any specific styles for CadastroGeral here */
.required {
  color: red;
  margin-right: 5px;
}

.form-group {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.form-label {
  flex: 0 0 200px; /* Define uma largura fixa para os labels */
  font-weight: bold;
  color: #555555;
}

.form-input {
  flex: 1;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.17);
}

textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.17);
}
</style>
