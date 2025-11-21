<template>
  <form class="cadastro-form">
    <div class="form-group">
      <label for="dimensions"> Dimensões (C x L) - mm </label>
      <input type="text" id="dimensions" placeholder="Dimensões" required />
    </div>

    <div class="form-group">
      <label for="weight"> <span class="required">*</span> Peso - gramas </label>
      <input type="text" id="weight" placeholder="Peso" required />
    </div>

    <div class="form-group">
      <label for="description"> <span class="required">*</span> Descrição </label>
      <textarea id="description" placeholder="Descrição Formal do Item" required></textarea>
    </div>

    <div class="form-group">
      <label for="material"> <span class="required">*</span> Material </label>
      <input type="text" id="material" placeholder="Matéria-prima" required />
    </div>

    <div class="form-group">
      <label for="site"> <span class="required">*</span> Sítio (nº do sítio ou sigla) </label>
      <input type="text" id="site" placeholder="Sítio (nº do sítio ou sigla)" required />
    </div>

    <div class="form-group">
      <label for="state"> <span class="required">*</span> Estado </label>
      <select id="state" required>
        <option value="">Estado do Item</option>
      </select>
    </div>

    <div class="form-group">
      <label for="city"> <span class="required">*</span> Cidade </label>
      <input type="text" id="city" placeholder="Cidade do Item" required />
    </div>

    <div class="form-group">
      <label for="ethnic-group"> <span class="required">*</span> Grupo étnico </label>
      <input type="text" id="ethnic-group" placeholder="ex.:sambaquiano" required />
    </div>

    <div class="form-group">
      <label for="room">Sala</label>
      <input type="text" id="room" placeholder="Sala do Item" />
    </div>

    <div class="form-group">
      <label for="shelf">Estante</label>
      <input type="text" id="shelf" placeholder="Estante do Item" />
    </div>

    <div class="form-group">
      <label for="rack">Prateleira</label>
      <input type="text" id="rack" placeholder="Prateleira do Item" />
    </div>

    <div class="form-group">
      <label for="general-observations"> <span class="required">*</span> Observações Gerais </label>
      <textarea
        id="general-observations"
        placeholder="Descrição Formal do Item"
        required
      ></textarea>
    </div>

    <div class="form-group">
      <label for="responsible"> <span class="required">*</span> Responsável preenchimento </label>
      <textarea id="responsible" placeholder="Descrição Formal do Item" required></textarea>
    </div>
  </form>
</template>

<script setup></script>

<style scoped>
/* Add any specific styles for CadastroDados here */
.required {
  color: red;
  margin-right: 5px;
}
</style>
