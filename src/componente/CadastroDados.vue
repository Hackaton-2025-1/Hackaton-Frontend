<template>
  <form class="cadastro-form">
    <div class="form-group">
      <label for="dimensions" class="form-label"> Dimensões (C x L) - mm </label>
      <input
        class="form-input"
        type="text"
        id="dimensions"
        placeholder="Dimensões"
        required
        :value="localDados.dimensoes"
        @input="update('dimensoes', $event.target.value)"
      />
    </div>

    <div class="form-group">
      <label for="weight" class="form-label"> <span class="required">*</span> Peso - gramas </label>
      <input
        class="form-input"
        type="text"
        id="weight"
        placeholder="Peso"
        required
        :value="localDados.peso"
        @input="update('peso', $event.target.value)"
      />
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
        :value="localDados.descricao"
        @input="update('descricao', $event.target.value)"
      ></textarea>
    </div>

    <div class="form-group">
      <label for="material" class="form-label"> <span class="required">*</span> Material </label>
      <input
        class="form-input"
        type="text"
        id="material"
        placeholder="Matéria-prima"
        required
        :value="localDados.material"
        @input="update('material', $event.target.value)"
      />
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
        :value="localDados.sitio"
        @input="update('sitio', $event.target.value)"
      />
    </div>

    <div class="form-group">
      <label for="state" class="form-label"> <span class="required">*</span> Estado </label>
      <select
        class="form-input"
        id="state"
        required
        :value="localDados.estado"
        @change="update('estado', $event.target.value)"
      >
        <option value="">Estado do Item</option>
        <option value="SP">SP</option>
        <option value="RJ">RJ</option>
      </select>
    </div>

    <div class="form-group">
      <label for="city" class="form-label"> <span class="required">*</span> Cidade </label>
      <input
        class="form-input"
        type="text"
        id="city"
        placeholder="Cidade do Item"
        required
        :value="localDados.cidade"
        @input="update('cidade', $event.target.value)"
      />
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
        :value="localDados.grupo"
        @input="update('grupo', $event.target.value)"
      />
    </div>

    <div class="form-group">
      <label for="room" class="form-label">Sala</label>
      <input
        class="form-input"
        type="text"
        id="room"
        placeholder="Sala do Item"
        v-model="localDados.room"
        @input="update('room', localDados.room)"
      />
    </div>

    <div class="form-group">
      <label for="shelf" class="form-label">Estante</label>
      <input
        class="form-input"
        type="text"
        id="shelf"
        placeholder="Estante do Item"
        v-model="localDados.shelf"
        @input="update('shelf', localDados.shelf)"
      />
    </div>

    <div class="form-group">
      <label for="rack" class="form-label">Prateleira</label>
      <input
        class="form-input"
        type="text"
        id="rack"
        placeholder="Prateleira do Item"
        v-model="localDados.rack"
        @input="update('rack', localDados.rack)"
      />
    </div>

    <div class="form-group">
      <label for="general-observations" class="form-label">
        <span class="required">*</span> Observações Gerais
      </label>
      <textarea
        id="general-observations"
        class="form-input"
        placeholder="Descrição Formal do Item"
        v-model="localDados.generalObservations"
        @input="update('generalObservations', localDados.generalObservations)"
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
        v-model="localDados.responsible"
        @input="update('responsible', localDados.responsible)"
        required
      ></textarea>
    </div>
  </form>
</template>

<script setup>
import { defineProps, defineEmits, reactive, watch } from 'vue'
const props = defineProps({ dados: Object })
const emit = defineEmits(['update-dados'])
const localDados = reactive({ ...props.dados })
watch(
  () => props.dados,
  (novo) => {
    Object.assign(localDados, novo)
  },
  { deep: true },
)
const update = (field, value) => {
  localDados[field] = value
  emit('update-dados', { ...localDados })
}
</script>

<style scoped>
.required {
  color: red;
  margin-right: 5px;
}

/* Container elegante */
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

/* Grupos alinhados e espaços melhores */
.form-group {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
}

/* Labels bonitos */
.form-label {
  flex: 0 0 220px;
  font-weight: bold;
  color: #444444;
  font-size: 15px;
}

/* Inputs com estilo moderno */
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

/* Textareas estilizados */
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

/* Efeito no foco */
.form-input:focus,
textarea:focus {
  outline: none;
  border-color: #555555;
  background: #fff;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
}
</style>
