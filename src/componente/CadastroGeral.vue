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

.required {
  color: red;
  margin-right: 5px;
}

.cadastro-form {
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  animation: fadeIn 0.4s ease;
  font-family: Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.form-group {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
}

.form-label {
  flex: 0 0 220px;
  font-weight: bold;
  color: #444444;
  font-size: 15px;
}

.form-input {
  flex: 1;
  padding: 10px 12px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.17);
  border-radius: 6px;
  font-size: 14px;
  transition: 0.2s;
  background: #fafafa;
}

textarea {
  width: 100%;
  padding: 10px 12px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.17);
  border-radius: 6px;
  font-size: 14px;
  background: #fafafa;
  transition: 0.2s;
}

/* Efeito de foco */
.form-input:focus,
textarea:focus {
  outline: none;
  border-color: #555555;
  background: #fff;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
}
</style>

