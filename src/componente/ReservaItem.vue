<template>
  <div class="card-container">
  <router-link to="gerenciamento" class="btn-voltar">
    <i class="fas fa-arrow-left"></i>
  </router-link>
    <div class="card">
      <h1 class="title">Reserva de Item</h1>

      <form @submit.prevent="handleSubmit" class="form">
        <!-- Contato -->
        <div class="field">
          <label for="contact">Contato</label>
          <input id="contact" type="text" v-model="form.contact" placeholder="Telefone ou e-mail" />
        </div>

        <!-- Data início -->
        <div class="field">
          <label for="startDate">Data de início da locação</label>
          <input
            id="startDate"
            type="date"
            v-model="form.startDate"
            :min="minDate"
          />
        </div>

        <!-- Data término -->
        <div class="field">
          <label for="endDate">Data de término da locação</label>
          <input
            id="endDate"
            type="date"
            v-model="form.endDate"
            :min="form.startDate || minDate"
          />
        </div>

        <!-- Data entrega -->
        <div class="field">
          <label for="deliveryDate">Data de entrega</label>
          <input
            id="deliveryDate"
            type="date"
            v-model="form.deliveryDate"
            :min="form.endDate || form.startDate || minDate"
          />
        </div>

        <!-- Erros -->
        <div v-if="errors.length" class="errors">
          <ul>
            <li v-for="(err, i) in errors" :key="i">{{ err }}</li>
          </ul>
        </div>

        <!-- Ações -->
        <div class="actions">
          <button type="submit" class="btn-primary">Reservar</button>
          <button type="button" class="btn-ghost" @click="resetForm">Limpar</button>
        </div>
      </form>

      <!-- Resumo -->
      <div v-if="submitted" class="summary">
        <h2>Resumo</h2>
        <p><strong>Contato:</strong> {{ form.contact || '-' }}</p>
        <p><strong>Período:</strong> {{ formatDate(form.startDate) }} — {{ formatDate(form.endDate) }}</p>
        <p><strong>Data de entrega:</strong> {{ formatDate(form.deliveryDate) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// datas
const today = new Date()
const minDate = today.toISOString().slice(0, 10)

const form = ref({ startDate: '', endDate: '', deliveryDate: '', contact: '' })
const errors = ref([])
const submitted = ref(false)

function validate() {
  errors.value = []
  if (!form.value.contact) errors.value.push('Informe um contato (telefone ou e‑mail).')
  if (!form.value.startDate) errors.value.push('Escolha a data de início da locação.')
  if (!form.value.endDate) errors.value.push('Escolha a data de término da locação.')
  if (!form.value.deliveryDate) errors.value.push('Escolha a data de entrega.')

  if (form.value.startDate && form.value.endDate && form.value.endDate < form.value.startDate) {
    errors.value.push('A data de término deve ser igual ou posterior à data de início.')
  }
  if (form.value.endDate && form.value.deliveryDate && form.value.deliveryDate < form.value.endDate) {
    errors.value.push('A data de entrega deve ser igual ou posterior à data de término da locação.')
  }

  return errors.value.length === 0
}

function handleSubmit() {
  submitted.value = false
  if (!validate()) return

  // aqui você pode enviar para o backend (axios/fetch)
  console.log('Reserva:', { ...form.value })
  submitted.value = true
}

function resetForm() {
  form.value = { startDate: '', endDate: '', deliveryDate: '', contact: '' }
  errors.value = []
  submitted.value = false
}

function formatDate(d) {
  if (!d) return '-'
  const dt = new Date(d + 'T00:00:00')
  return dt.toLocaleDateString()
}
</script>

<style scoped>

.btn-voltar {
  position: absolute;
  top: 15px;
  left: 20px;
  background-color: #c45d4c;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 100px;
  cursor: pointer;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: 0.3s;
  width: 35px;
}


.btn-voltar i {
  font-size: 16px;
}

.btn-voltar:hover {
  background-color: #a94b3c;
}
/* Container */
.card-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%);
  padding: 24px;
}

/* Card */
.card {
  width: 100%;
  max-width: 520px;
  background: #ffffff;
  border-radius: 14px;
  padding: 26px;
  box-shadow: 0 8px 30px rgba(16,24,40,0.08);
  border: 1px solid rgba(15,23,42,0.03);
}

.title {
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: #0f172a;
  font-weight: 700;
}

.form { display: grid; gap: 12px; }
.field { display: flex; flex-direction: column; gap: 6px; }
label { font-weight: 600; font-size: 0.9rem; color: #334155; }
input[type="text"], input[type="date"] {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: #fbfdff;
  font-size: 0.95rem;
}
input:focus { outline: none; box-shadow: 0 0 0 4px rgba(59,130,246,0.12); border-color: #6e470d; }

.errors { background: #fff7f7; border: 1px solid #fed7d7; color: #991b1b; padding: 10px; border-radius: 8px; font-size: 0.9rem; }
.errors ul { margin: 0; padding-left: 18px; }

.actions { display: flex; gap: 10px; margin-top: 6px; }
.btn-primary { flex: 1; background: #c45d4c; color: white; border: none; padding: 10px 12px; border-radius: 8px; font-weight: 700; cursor: pointer; }
.btn-primary:hover { background: #c45d4c; }
.btn-ghost { background: white; border: 1px solid #cbd5e1; padding: 10px 12px; border-radius: 8px; cursor: pointer; }
.btn-ghost:hover { background: #f8fafc; }

.summary { margin-top: 14px; padding: 12px; border-radius: 10px; background: #f0fdf4; border: 1px solid #d1fae5; }
.summary h2 { margin: 0 0 8px 0; font-size: 1rem; }

@media (max-width: 480px) {
  .card { padding: 18px; }
}
</style>