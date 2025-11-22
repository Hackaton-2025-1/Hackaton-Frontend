<template>
  <form class="cadastro-form">
    <div class="form-group">
      <label for="item-name" class="form-label">
        <span class="required">*</span> Nome do Item
      </label>
      <input
        class="form-input"
        type="text"
        id="item-name"
        placeholder="Nome do Acervo"
        required
        :value="localGeral.nome"
        @input="update('nome', $event.target.value)"
      />
    </div>

    <div class="form-group">
      <label for="category" class="form-label"> <span class="required">*</span> Categoria </label>
      <select
        class="form-input"
        id="category"
        required
        :value="localGeral.categoria"
        @change="update('categoria', $event.target.value)"
      >
        <option value="">Categoria</option>
        <option value="Arqueologia">Arqueologia</option>
        <option value="História">História</option>
      </select>
    </div>

    <div class="form-group">
      <label for="collection" class="form-label"> <span class="required">*</span> Coleção </label>
      <select
        class="form-input"
        id="collection"
        required
        :value="localGeral.colecao"
        @change="update('colecao', $event.target.value)"
      >
        <option value="">Coleção</option>
        <option value="Principal">Principal</option>
        <option value="Secundária">Secundária</option>
      </select>
    </div>

    <div class="form-group">
      <label for="subtype" class="form-label"> <span class="required">*</span> Subtipo </label>
      <select
        class="form-input"
        id="subtype"
        required
        :value="localGeral.subtipo"
        @change="update('subtipo', $event.target.value)"
      >
        <option value="">Tipo</option>
        <option value="Cerâmica">Cerâmica</option>
        <option value="Fóssil">Fóssil</option>
      </select>
    </div>

    <div class="form-group">
      <label for="conservation-level" class="form-label">
        <span class="required">*</span> Nível de conservação
      </label>
      <select
        class="form-input"
        id="conservation-level"
        required
        :value="localGeral.nivelConservacao"
        @change="update('nivelConservacao', $event.target.value)"
      >
        <option value="">Nível</option>
        <option value="Excelente">Excelente</option>
        <option value="Boa">Boa</option>
        <option value="Regular">Regular</option>
      </select>
    </div>

    <div class="form-group">
      <label for="integrity" class="form-label">
        <span class="required">*</span> Integridade
      </label>
      <select
        class="form-input"
        id="integrity"
        required
        :value="localGeral.integridade"
        @change="update('integridade', $event.target.value)"
      >
        <option value="">Inteireza</option>
        <option value="Completo">Completo</option>
        <option value="Fragmentado">Fragmentado</option>
      </select>
    </div>

    <div class="form-group">
      <label for="conservation-detail" class="form-label"> Detalhe conservação </label>
      <textarea
        id="conservation-detail"
        class="form-input"
        placeholder="Detalhe do estado de conservação"
        :value="localGeral.detalheConservacao"
        @input="update('detalheConservacao', $event.target.value)"
        required
      ></textarea>
    </div>
  </form>
</template>

<script setup>
import { defineProps, defineEmits, reactive, watch } from 'vue'
const props = defineProps({ geral: Object })
const emit = defineEmits(['update-geral'])
const localGeral = reactive({ ...props.geral })
watch(
  () => props.geral,
  (novo) => {
    Object.assign(localGeral, novo)
  },
  { deep: true },
)
const update = (field, value) => {
  localGeral[field] = value
  emit('update-geral', { ...localGeral })
}
</script>

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
