
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { lerDoBanco } from '@/services/localdb.js'

const email = ref('')
const senha = ref('')
const mensagem = ref('')
const router = useRouter()

const login = async () => {
  try {
    const usuarios = lerDoBanco('usuarios') || [];
    const usuario = usuarios.find(u => u.email === email.value && u.senha === senha.value);
    if (usuario) {
      localStorage.setItem('token', usuario.email);
      mensagem.value = 'Login realizado com sucesso!';
      setTimeout(() => router.push('/'), 1000);
    } else {
      mensagem.value = 'Email ou senha inválidos.';
    }
  } catch (error) {
    console.error(error);
    mensagem.value = 'Erro ao realizar login.';
  }
}
</script>


<template>
  <div class="container">
    <div class="textos">
      <h1 class="title">LOGIN</h1>
    </div>

    <div class="campos">
      <div class="input-group">
        <i class="fas fa-envelope icon"></i>
        <input class="input" type="email" placeholder="Email" aria-label="Email" />
      </div>

      <div class="input-group">
        <i class="fas fa-lock icon"></i>
        <input class="input" type="password" placeholder="Senha" aria-label="Senha" />
      </div>
    </div>

    <button class="btn-login">ENTRAR</button>
    <p class="footer-text">
      Ainda não possui cadastro?
      <router-link to="/cadastro" class="link">Clique Aqui</router-link>
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
  margin-bottom: 60px;
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
  color: #8ee8f8;
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
