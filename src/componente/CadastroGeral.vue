<template>
  <form class="cadastro-form">
    <div class="form-group">
      <label for="item-name"> <span class="required">*</span> Nome do Item </label>
      <input type="text" id="item-name" placeholder="Nome do Acervo" required />
    </div>

    <div class="form-group">
      <label for="category"> <span class="required">*</span> Categoria </label>
      <select id="category" required>
        <option value="">Categoria</option>
      </select>
    </div>

    <div class="form-group">
      <label for="collection"> <span class="required">*</span> Coleção </label>
      <select id="collection" required>
        <option value="">Coleção</option>
      </select>
    </div>

    <div class="form-group">
      <label for="subtype"> <span class="required">*</span> Subtipo </label>
      <select id="subtype" required>
        <option value="">Tipo</option>
      </select>
    </div>

    <div class="form-group">
      <label for="conservation-level"> <span class="required">*</span> Nível de conservação </label>
      <select id="conservation-level" required>
        <option value="">Nível</option>
      </select>
    </div>

    <div class="form-group">
      <label for="integrity"> <span class="required">*</span> Integridade </label>
      <select id="integrity" required>
        <option value="">Inteireza</option>
      </select>
    </div>

    <div class="form-group">
      <label for="conservation-detail"> Detalhe conservação </label>
      <textarea
        id="conservation-detail"
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
</style>
