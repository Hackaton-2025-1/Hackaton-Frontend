<template>
  <form class="cadastro-form">
    <div class="form-group">
      <label for="dimensions" class="form-label"> Dimensões (C x L) - mm </label>
      <input class="form-input" type="text" id="dimensions" placeholder="Dimensões" required />
    </div>

    <div class="form-group">
      <label for="weight" class="form-label"> <span class="required">*</span> Peso - gramas </label>
      <input class="form-input" type="text" id="weight" placeholder="Peso" required />
    </div>

    <div class="form-group">
      <label for="description" class="form-label">
        <span class="required">*</span> Descrição
      </label>
      <textarea
        id="description"
        class="form-input"
        placeholder="Descrição Formal do Item"
        required
      ></textarea>
    </div>

    <div class="form-group">
      <label for="material" class="form-label"> <span class="required">*</span> Material </label>
      <input class="form-input" type="text" id="material" placeholder="Matéria-prima" required />
    </div>

    <div class="form-group">
      <label for="site" class="form-label">
        <span class="required">*</span> Sítio (nº do sítio ou sigla)
      </label>
      <input
        class="form-input"
        type="text"
        id="site"
        placeholder="Sítio (nº do sítio ou sigla)"
        required
      />
    </div>

    <div class="form-group">
      <label for="state" class="form-label"> <span class="required">*</span> Estado </label>
      <select class="form-input" id="state" required>
        <option value="">Estado do Item</option>
      </select>
    </div>

    <div class="form-group">
      <label for="city" class="form-label"> <span class="required">*</span> Cidade </label>
      <input class="form-input" type="text" id="city" placeholder="Cidade do Item" required />
    </div>

    <div class="form-group">
      <label for="ethnic-group" class="form-label">
        <span class="required">*</span> Grupo étnico
      </label>
      <input
        class="form-input"
        type="text"
        id="ethnic-group"
        placeholder="ex.:sambaquiano"
        required
      />
    </div>

    <div class="form-group">
      <label for="room" class="form-label">Sala</label>
      <input class="form-input" type="text" id="room" placeholder="Sala do Item" />
    </div>

    <div class="form-group">
      <label for="shelf" class="form-label">Estante</label>
      <input class="form-input" type="text" id="shelf" placeholder="Estante do Item" />
    </div>

    <div class="form-group">
      <label for="rack" class="form-label">Prateleira</label>
      <input class="form-input" type="text" id="rack" placeholder="Prateleira do Item" />
    </div>

    <div class="form-group">
      <label for="general-observations" class="form-label">
        <span class="required">*</span> Observações Gerais
      </label>
      <textarea
        id="general-observations"
        class="form-input"
        placeholder="Descrição Formal do Item"
        required
      ></textarea>
    </div>

    <div class="form-group">
      <label for="responsible" class="form-label">
        <span class="required">*</span> Responsável preenchimento
      </label>
      <textarea
        id="responsible"
        class="form-input"
        placeholder="Descrição Formal do Item"
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

.form-group {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.form-label {
  flex: 0 0 200px;
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
