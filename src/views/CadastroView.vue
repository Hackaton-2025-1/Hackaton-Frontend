<script setup>
import { ref } from 'vue'
import { createUsuario } from '../services/api.js'

function gerarPassageId() {
  // Gera um passage_id aleatório (ex: UUID simples)
  return 'passage_' + Math.random().toString(36).substring(2, 12) + Date.now().toString().slice(-4)
}

const nome = ref('')
const email = ref('')
const senha = ref('')
const mensagem = ref('')

const cadastrar = async () => {
  try {
    const res = await createUsuario({
      name: nome.value,
      email: email.value,
      password: senha.value,
      passage_id: gerarPassageId(),
    })
    alert('Cadastro realizado com sucesso! Você será redirecionado para o login.')

    mensagem.value = 'Cadastro realizado com sucesso!'
    nome.value = ''
    email.value = ''
    senha.value = ''
    window.location.href = '/login'
  } catch (error) {
    // Tenta extrair mensagem detalhada do backend
    if (error instanceof Response) {
      try {
        const data = await error.json()
        mensagem.value =
          'Erro ao cadastrar: ' + (data?.detail || JSON.stringify(data) || error.statusText)
      } catch (e) {
        mensagem.value = 'Erro ao cadastrar: ' + error.statusText
      }
    } else {
      mensagem.value = 'Erro ao cadastrar: ' + error.message
    }
  }
}
</script>

<template>
  <div class="background-wrapper">
    <div class="container">
      <h1 class="title">CADASTRO</h1>

      <div class="campos">
        <div class="input-group">
          <i class="fas fa-user icon"></i>
          <input class="input" type="text" placeholder="Nome" aria-label="Name" v-model="nome" />
        </div>
        <div class="input-group">
          <i class="fas fa-envelope icon"></i>
          <input
            class="input"
            type="email"
            placeholder="Email"
            v-model="email"
            aria-label="Email"
          />
        </div>

        <div class="input-group">
          <i class="fas fa-lock icon"></i>
          <input
            class="input"
            type="password"
            placeholder="Senha"
            aria-label="Senha"
            v-model="senha"
          />
        </div>

        <button class="btn-login" @click="cadastrar">CADASTRAR</button>
        <p class="footer-text">
          Ja possui cadastro?
          <router-link to="/login" class="link">Clique Aqui</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-wrapper {
  background-image: url('../assets/imagens/fabrizio-conti-jq4uwBTvBv4-unsplash.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  font-family: 'Poppins', sans-serif;
}

/* ANIMAÇÃO */
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

/* CARD */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  height: 430px;

  padding: 35px 25px;
  background: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(12px);

  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.22);

  text-align: center;
  animation: fadeInUp 0.6s ease forwards;
}

/* TÍTULO */
.title {
  font-size: 2.3rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 40px;
}

/* CAMPOS */
.campos {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 30px;
}

/* INPUT GROUP */
.input-group {
  position: relative;
  width: 100%;
  max-width: 350px;
  margin: auto;
}

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
  color: #fff;

  font-size: 1rem;
}

.input::placeholder {
  color: #ffffffaa;
}

.input:focus {
  background-color: rgba(255, 255, 255, 0.28);
  outline: none;
}

/* BOTÃO */
.btn-login {
  width: 400px;
  background-color: black;
  border: none;
  color: white;
  padding: 15px;
  border-radius: 10px;
}

.btn-login:hover {
  background-color: #222;
  cursor: pointer;
  transition: 0.3s;
}

/* FOOTER */
.footer-text {
  margin-top: 15px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
}

.link {
  color: #b0effa;
  text-decoration: none;
  font-weight: 600;
}

/* MOBILE */
@media (max-width: 500px) {
  .container {
    width: 90%;
    padding: 25px;
  }
}
</style>
