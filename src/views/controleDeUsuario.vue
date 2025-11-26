<script setup>
import NavBar from '@/componente/NavBar.vue'
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user.js'
import { storeToRefs } from 'pinia'
import { fetchUsuarios, updateUsuario } from '../services/api.js'

const userStore = useUserStore()
const { name, email, avatar, role } = storeToRefs(userStore)
const id = ref(null)
const isEditing = ref(false)
const originalAvatar = ref(null)
const tempName = ref('')
tempName.value = name.value
const tempEmail = ref('')
tempEmail.value = email.value
const tempRole = ref('')
tempRole.value = role.value
const mensagem = ref('')

function startEdit() {
  tempName.value = name.value
  tempEmail.value = email.value
  tempRole.value = role.value
  originalAvatar.value = avatar.value
  isEditing.value = true
}

function cancelEdit() {
  name.value = tempName.value
  email.value = tempEmail.value
  role.value = tempRole.value
  userStore.updateAvatar(originalAvatar.value || avatar.value)
  isEditing.value = false
}

function saveEdit() {
  userStore.name = name.value
  userStore.email = email.value
  userStore.role = role.value
  isEditing.value = false
  // Salva no backend
  if (id.value) {
    updateUsuario(id.value, {
      name: name.value,
      email: email.value,
      role: role.value,
    })
      .then(() => {
        mensagem.value = 'Dados atualizados com sucesso!'
      })
      .catch((err) => {
        mensagem.value = 'Erro ao atualizar: ' + err.message
      })
  }
}

function onAvatarChange(e) {
  const file = e.target.files && e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => {
    userStore.updateAvatar(reader.result)
  }
  reader.readAsDataURL(file)
}

function signOut() {
  userStore.clearUser()
  window.location.href = '/login'
}

// Buscar dados completos do usuário logado ao montar
onMounted(async () => {
  try {
    const usuarios = await fetchUsuarios()
    const lista = Array.isArray(usuarios.results)
      ? usuarios.results
      : Array.isArray(usuarios)
        ? usuarios
        : []
    const usuario = lista.find((u) => u.email === email.value)
    if (usuario) {
      id.value = usuario.id
      name.value = usuario.name
      email.value = usuario.email
      role.value = usuario.role || ''
      userStore.avatar = usuario.avatar || ''
    }
  } catch (err) {
    mensagem.value = 'Erro ao buscar usuário: ' + err.message
  }
})
</script>

<template>
  <Header :userSrc="userStore.avatar" :userName="userStore.name || 'Visitante'" />
  <NavBar />
  <div class="user-control container">
    <div class="user-card">
      <div class="user-top">
        <div class="user-meta-row">
          <div class="avatar-wrapper">
            <img class="avatar" :src="avatar" alt="avatar" />
          </div>
          <div class="user-info">
            <div><strong>ID:</strong> {{ id }}</div>
            <div><strong>Nome:</strong> {{ name }}</div>
            <div><strong>Email:</strong> {{ email }}</div>
            <div><strong>Role:</strong> {{ role }}</div>
          </div>
        </div>
        <button @click="startEdit" v-if="!isEditing">Editar</button>
        <button @click="signOut">Sair</button>
        <div v-if="mensagem" style="color: red; margin-top: 10px">{{ mensagem }}</div>
      </div>
      <div v-if="isEditing" class="edit-form">
        <label>Nome: <input v-model="name" /></label>
        <label>Email: <input v-model="email" /></label>
        <label>Role: <input v-model="role" /></label>
        <button @click="saveEdit">Salvar</button>
        <button @click="cancelEdit">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --bg: #ffffff;
  --muted: #7a6b6b;
  --accent: #c84b3a; /* warm coral */
  --accent-soft: #ffd9d2;
  --input-bg: #fcfbfb;
  --border: #eee7e7;
  --card-radius: 10px;
}

.user-control {
  padding: 20px;
}
.user-card {
  background: var(--bg);
  border-radius: var(--card-radius);
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px rgba(27, 20, 20, 0.04);
}

.user-banner {
  background: linear-gradient(90deg, #db9c25, #efe6e4);
  text-align: center;
  padding: 22px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.6px;
}

.user-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 26px;
}
.user-meta {
  display: flex;
  align-items: center;
  gap: 16px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.avatar-edit {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: #4bb36a;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(75, 179, 106, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  z-index: 2;
}
.avatar-edit:hover {
  background: #399a56;
}
.avatar-edit input[type='file'] {
  display: none;
}
.avatar-edit svg {
  display: block;
  fill: #fff;
}
.user-control ontainer {
  margin-top: 100px;
}

.meta-name {
  font-weight: 700;
  color: #362f2f;
  font-size: 16px;
}
.meta-email {
  color: var(--muted);
  font-size: 13px;
}

.btn-edit {
  background: #ffe3db;
  color: #d35442;
  border: 1.5px solid #ffd9d2;
  padding: 10px 20px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  box-shadow: 0 4px 16px rgba(255, 127, 89, 0.08);
  transition: transform 0.14s ease;
}

.btn-save {
  background: #4bb36a;
  color: #fff;
  border: 1.5px solid #4bb36a;
  padding: 12px 24px;
  border-radius: 13px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 0 4px 16px rgba(75, 179, 106, 0.08);
  transition: transform 0.14s ease;
}

.btn-cancel {
  background: #ffe3db;
  color: #d35442;
  border: 1.5px solid #ffd9d2;
  padding: 12px 24px;
  border-radius: 13px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 0 4px 16px rgba(255, 127, 89, 0.08);
  transition: transform 0.14s ease;
  margin-left: 10px;
}

.edit-actions {
  display: flex;
  align-items: center;
}

.user-body {
  padding: 22px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

label {
  display: block;
  font-size: 13px;
  color: #6e4f4f;
  font-weight: 600;
}

input,
select,
textarea {
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--input-bg);
  transition: all 160ms cubic-bezier(0.2, 0.9, 0.2, 1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
  color: #3b3b3b;
  font-size: 14px;
  border: 1px solid #3b3b3b;
}
input::placeholder,
textarea::placeholder {
  color: #c8bcbc;
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23b6a6a6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 38px;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: rgba(200, 75, 58, 0.95);
  box-shadow: 0 10px 30px rgba(200, 75, 58, 0.08);
  background: #fff;
}

.email-badges {
  display: flex;
  gap: 14px;
  margin-top: 8px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  padding: 8px 12px;
  border-radius: 999px;
  box-shadow: 0 10px 30px rgba(10, 10, 10, 0.04);
  color: #4b3a3a;
}

.badge svg {
  display: inline-block;
  background: none;
  border-radius: 50%;
  padding: 0;
  margin-right: 4px;
  vertical-align: middle;
}

.signout {
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
}

.btn-logout {
  background: #d35442;
  color: #fff;
  border: 1px solid #d35442;
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.12s ease;
  font-weight: 600;
}

/* Small screens: stack and adjust spacing */
@media (max-width: 900px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  .user-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .btn-edit {
    align-self: flex-end;
  }
  .avatar {
    width: 64px;
    height: 64px;
  }
}

@media (max-width: 420px) {
  .user-card {
    border-radius: 6px;
  }
  .meta-name {
    font-size: 15px;
  }
  input,
  select,
  textarea {
    font-size: 13px;
  }
}

/* ===========================
   LAYOUT MAIS ENXUTO E ESTREITO (AUMENTADO NOVAMENTE)
=========================== */
.user-control {
  padding: 150px;
  max-width: 700px;
  margin: 48px auto 0 auto;
}
.avatar {
  width: 72px;
  height: 72px;
  border: 3px solid #fff;
}
.user-banner {
  padding: 28px;
  font-size: 20px;
}
.user-top {
  padding: 22px 32px;
  gap: 24px;
}
.user-meta {
  gap: 26px;
}
.meta-name {
  font-size: 19px;
}
.meta-email {
  font-size: 15px;
}
.btn-edit {
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 13px;
}
.user-body {
  padding: 28px;
}
.form-grid {
  gap: 26px;
}
.col {
  gap: 18px;
}
label {
  font-size: 15px;
}
input,
select,
textarea {
  padding: 16px 22px;
  border-radius: 13px;
  font-size: 16px;
}
.badge {
  padding: 10px 20px;
  font-size: 15px;
}
.badge svg {
  padding: 8px;
}
.signout {
  margin-top: 20px;
}
.btn-logout {
  padding: 12px 22px;
  border-radius: 12px;
  font-size: 16px;
}
@media (max-width: 900px) {
  .avatar {
    width: 60px;
    height: 60px;
  }
}
@media (max-width: 420px) {
  .user-card {
    border-radius: 10px;
  }
  .meta-name {
    font-size: 16px;
  }
  input,
  select,
  textarea {
    font-size: 15px;
  }
}

.user-meta-row {
  display: flex;
  align-items: center;
  gap: 26px;
  position: relative;
}
.avatar-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
