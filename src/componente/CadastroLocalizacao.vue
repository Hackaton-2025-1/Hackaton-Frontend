<template>
  <form class="cadastro-form">

    <div class="form-group">
        <label class="form-label">Sítio</label>
      <input class="form-input" type="text" placeholder="Número ou sigla do sítio" required />
    </div>

    <div class="form-group">
      <label class="form-label"><span class="required">*</span>Cidade</label>
      <input class="form-input" type="text" placeholder="Cidade do artefato" required />
    </div>

    <div class="form-group">
      <label class="form-label"><span class="required">*</span>Estado</label>
      <select class="form-input" required>
        <option value="">Selecione o estado</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label">Bloco</label>
      <input class="form-input" type="text" placeholder="Bloco do local" />
    </div>

    <div class="form-group">
      <label class="form-label">Prédio</label>
      <input class="form-input" type="text" placeholder="Prédio do local" />
    </div>

    <div class="form-group">
      <label class="form-label"><span class="required">*</span>Sala</label>
      <input class="form-input" type="text" placeholder="Sala onde está o artefato" />
    </div>

    <div class="form-group">
      <label class="form-label">Prateleira</label>
      <input class="form-input" type="text" placeholder="Prateleira do artefato" />
    </div>

    <div class="form-group">
      <label class="form-label"><span class="required">*</span>Data de Entrada</label>
      <input class="form-input" type="date" required />
    </div>

    <div class="form-group">
      <label class="form-label">Data de Saída (caso não esteja mais no local)</label>
      <input class="form-input" type="date" />
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
  background: #fafafa;
  transition: 0.2s;
}

textarea,
.form-input:focus {
  background: #fff;
  outline: none;
  border-color: #555;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
}
</style>
