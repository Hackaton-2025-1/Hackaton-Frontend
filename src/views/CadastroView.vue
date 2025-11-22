
<script setup>
import { ref } from 'vue'
import { createUsuario } from '../services/api.js'

const nome = ref('')
const email = ref('')
const senha = ref('')
const mensagem = ref('')

const cadastrar = async () => {
  try {
    await createUsuario({ name: nome.value, email: email.value, password: senha.value })

    // Busca usuários existentes
    const usuarios = lerDoBanco('usuarios') || [];
    // Adiciona novo usuário
    usuarios.push({ nome: nome.value, email: email.value, senha: senha.value })
    // Salva no banco local
    salvarNoBanco('usuarios', usuarios)
    mensagem.value = 'Cadastro realizado com sucesso!'
    nome.value = ''
    email.value = ''
    senha.value = ''
  } catch (error) {
    mensagem.value = 'Erro ao cadastrar: ' + error.message
  }
  }
  {
    console.log('Erro detalhado:', error)
    mensagem.value = 'Erro ao cadastrar.'
  }
}
</script>


<template>
  <div class="container">
    <div class="textos">
      <h1 class="title">CADASTRO</h1>
    </div>

    <div class="campos">
      <div class="input-group">
        <i class="fas fa-user icon"></i>
        <input class="input" type="email" placeholder="Nome" aria-label="Name" />
      </div>
      <div class="input-group">
        <i class="fas fa-envelope icon"></i>
        <input class="input" type="email" placeholder="Email" v-model="email" aria-label="Email" />
      </div>

      <div class="input-group">
        <i class="fas fa-lock icon"></i>
        <input class="input" type="password" placeholder="Senha" aria-label="Senha" />
      </div>
    </div>

    <button class="btn-login">CADASTRAR</button>
    <p class="footer-text">
      Ja possui cadastro?
      <router-link to="/login" class="link">Clique Aqui</router-link>
    </p>
  </div>
</template>

<style scoped>
:global(body) {
  background-image: url('../assets/imagens/fabrizio-conti-jq4uwBTvBv4-unsplash.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 400px;
  padding: 35px 25px;
  background: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(12px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  text-align: center;
  animation: fadeInUp 0.6s ease forwards;
}

.title {
  font-size: 2.3rem;
  margin: 0;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  margin-bottom: 40px;
}

.text {
  margin-top: 10px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.campos {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 30px;
  margin-right: 30px;
}

.input-group {
  position: relative;
  width: 100%;
  max-width: 350px;
  align-items: center;
  justify-content: center;
  margin-right: 80px;
  margin: auto;
}

/* ÍCONES */
.icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #ffffffaa;
  font-size: 1.2rem;
}

.input {
  background-color: rgba(255, 255, 255, 0.18);
  height: 52px;
  width: 100%;

  border-radius: 10px;
  border: 1px solid transparent;

  padding-left: 50px;
  font-size: 1rem;
  color: #fff;
  transition: 0.3s;
}

.input::placeholder {
  color: #ffffffaa;
}

.input:focus {
  background-color: rgba(255, 255, 255, 0.28);
  outline: none;
}

.btn-login {
  width: 400px;
  background-color: black;
  border: none;
  color: white;
  padding: 15px;
  border-radius: 10px;
  margin-left: 20px;
}

.btn-login:hover {
  background-color: #222;
  cursor: pointer;
  transition: 0.3s;
}

.footer-text {
  font-size: 0.9rem;
  margin-top: 15px;
  color: rgba(255, 255, 255, 0.85);
}

.link {
  color: #b0effa;
  font-weight: 600;
  text-decoration: none;
}

@media (max-width: 500px) {
  .container {
    width: 90%;
    padding: 25px;
  }
}
</style>
