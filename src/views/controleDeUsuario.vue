<script setup>
import Header from '@/componente/header.vue'
import { ref } from 'vue'

const user = ref({
	name: 'Higor do Amaral Fritz',
	email: 'amarahigor@gmail.com',
	role: 'Pesquisador',
	avatar: '/public/avatar-placeholder.png'
})

const isEditing = ref(false)
const originalAvatar = ref(null)

function startEdit() {
	originalAvatar.value = user.value.avatar
	isEditing.value = true
}

function cancelEdit() {
	user.value.avatar = originalAvatar.value || user.value.avatar
	isEditing.value = false
}

function saveEdit() {
	isEditing.value = false
}

function onAvatarChange(e) {
	const file = e.target.files && e.target.files[0]
	if (!file) return
	const reader = new FileReader()
	reader.onload = () => {
		user.value.avatar = reader.result
	}
	reader.readAsDataURL(file)
}
</script>

<template>
	<Header :userSrc="user.avatar" :userName="user.name" />
	<div class="user-control container">
		<div class="user-card">
			<div class="user-banner">Controle de Usuario</div>
			<div class="user-top">
				<div class="user-meta">
					<div class="avatar-wrapper">
						<img class="avatar" :src="user.avatar" alt="avatar" />
						<label v-if="isEditing" class="avatar-edit" title="Alterar avatar">
							<input type="file" accept="image/*" @change="onAvatarChange" />
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</label>
					</div>
					<div class="meta-text">
						<div class="meta-name">{{ user.name }}</div>
						<div class="meta-email">{{ user.email }}</div>
					</div>
				</div>
				<div class="actions">
					<button v-if="!isEditing" class="btn-edit" @click="startEdit">Editar Perfil</button>
					<div v-else class="edit-actions">
						<button class="btn-save" @click="saveEdit">Salvar</button>
						<button class="btn-cancel" @click="cancelEdit">Cancelar</button>
					</div>
				</div>
			</div>

			<div class="user-body">
				<div class="form-grid">
					<div class="col">
						<label>Nome</label>
						<input v-model="user.name" :disabled="!isEditing" placeholder="Nome" />

						<label>Gênero</label>
						<select>
							<option>Masculino</option>
							<option>Feminino</option>
							<option>Outro</option>
						</select>

						<label>Número</label>
						<input placeholder="Numero de telefone" />

						<div class="email-badges">
							<span class="badge email"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 5h18v14H3z" stroke="#d35442" stroke-width="1.2" fill="#fff"/></svg> {{ user.email }}</span>
							<span class="badge role"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2a5 5 0 0 1 5 5v1H7V7a5 5 0 0 1 5-5z" stroke="#d35442" stroke-width="1.2" fill="#fff"/></svg> {{ user.role }}</span>
						</div>
					</div>

					<div class="col">
						<label>CPF</label>
						<input placeholder="CPF" />

						<label>País</label>
						<input placeholder="Pais" />

						<label>Cidade</label>
						<input placeholder="Cidade" />

						<div class="signout">
							<button class="btn-logout">Sair do Usuario</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
:root{
	--bg: #ffffff;
	--muted: #7a6b6b;
	--accent: #c84b3a; /* warm coral */
	--accent-soft: #ffd9d2;
	--input-bg: #fcfbfb;
	--border: #eee7e7;
	--card-radius: 10px;
}


.user-control{ padding:20px }
.user-card { 
    background:var(--bg);
    border-radius:var(--card-radius); 
    overflow:hidden; border:1px solid var(--border); 
    box-shadow: 0 10px 30px rgba(27,20,20,0.04) }

.user-banner{ 
    background:linear-gradient(90deg,#af873d,#efe6e4);
    text-align:center; 
    padding:22px; 
    font-size:20px; 
    font-weight:600; 
    color:#fff; 
    letter-spacing:0.6px }

.user-top{ display:flex; align-items:center; justify-content:space-between; padding:18px 26px }
.user-meta{ display:flex; align-items:center; gap:16px }

.avatar{
     width:80px;
     height:80px; 
     border-radius:50%; 
     object-fit:cover; 
     border:6px solid #fff; 
     box-shadow:0 10px 30px rgba(0,0,0,0.08) }

.meta-name{ font-weight:700; color:#362f2f; font-size:16px }
.meta-email{ color:var(--muted); font-size:13px }

.btn-edit{
    background: #ffe3db;
    color: #d35442;
    border: 1.5px solid #ffd9d2;
    padding: 10px 20px;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
    box-shadow: 0 4px 16px rgba(255,127,89,0.08);
    transition: transform .14s ease }

.btn-edit:hover{
    background: #ffd9d2;
    color: #b93c2c;
    transform: translateY(-2px);
}

.user-body{ padding:22px }

.form-grid{ display:grid; grid-template-columns: 1fr 1fr; gap:28px }

.col{ 
    display:flex;
    flex-direction:column;
    gap:14px }

label { 
    display:block; 
    font-size:13px;
    color:#6e4f4f; 
    font-weight:600
}

input, select, textarea{
	padding:12px 14px;
	border-radius:12px;
	border:1px solid var(--border);
	background:var(--input-bg);
	transition: all 160ms cubic-bezier(.2,.9,.2,1);
	box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
	color:#3b3b3b;
	font-size:14px;
    border: 1px solid #3b3b3b;
}
input::placeholder, textarea::placeholder{ color:#c8bcbc }

select{
    appearance:none; 
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23b6a6a6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
    background-repeat:no-repeat;
    background-position:right 12px center; 
    padding-right:38px }

textarea{ min-height:120px; resize:vertical }

input:focus, select:focus, textarea:focus{
	outline: none;
	border-color: rgba(200,75,58,0.95);
	box-shadow: 0 10px 30px rgba(200,75,58,0.08);
	background: #fff;
}

.email-badges{ 
    display:flex;
    gap:14px; margin-top:8px 
}

.badge{ 
    display:inline-flex;
    align-items:center;
    gap:10px;
    background:#fff;
    padding:8px 12px;
    border-radius:999px;
    box-shadow:0 10px 30px rgba(10,10,10,0.04);
    color:#4b3a3a 
}

.badge svg { 
    display:inline-block; 
    background:#fff; 
    border-radius:50%; 
    padding:6px }


.signout{ display:flex; justify-content:flex-end; margin-top:18px }

.btn-logout{ 
    background: #d35442;
    color: #fff;
    border: 1px solid #d35442;
    padding: 10px 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: all .12s ease;
    font-weight: 600;
}


.btn-logout:hover{ 
    background: #b93c2c;
    color: #fff;
    box-shadow: 0 8px 20px rgba(200,75,58,0.12);
    transform: translateY(-2px);
}

/* Small screens: stack and adjust spacing */
@media (max-width:900px){
	.form-grid{ grid-template-columns: 1fr; }
	.user-top{ flex-direction:column; align-items:flex-start; gap:12px }
	.btn-edit{ align-self:flex-end }
	.avatar{ width:64px; height:64px }
}

@media (max-width:420px){
	.user-card{ border-radius:6px }
	.meta-name{ font-size:15px }
	input, select, textarea{ font-size:13px }
}
</style>