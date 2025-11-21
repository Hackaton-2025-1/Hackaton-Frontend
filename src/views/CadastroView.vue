<script setup></script>

<template>
  <div class="container">
    <div class="textos">
      <h1 class="title">Crie sua conta</h1>
      <p class="text">Preencha seus dados</p>
    </div>

    <div class="campos">
      <div class="input-group">
        <i class="fas fa-user icon"></i>
        <input class="input" type="text" placeholder="Nome" />
      </div>

      <div class="input-group">
        <i class="fas fa-envelope icon"></i>
        <input class="input" type="text" placeholder="Email" />
      </div>

      <div class="input-group">
        <i class="fas fa-lock icon"></i>
        <input class="input" type="password" placeholder="Senha" />
      </div>
    </div>

    <button class="btn-login">CADASTRAR</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

.btn-login {
  background-color: #000000;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px;
  height: 56px;
  width: 300px;
}

.btn-login:hover {
  background-color: #333333;
  transition: 0.3s;
}

.campos {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 76px;
}

.input-group {
  position: relative;
}

.icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #666;
}

.input {
  background-color: #f3ebeb;
  height: 66px;
  width: 540px;
  border: none;
  padding-left: 50px;
  font-size: 16px;
}

.input:hover {
  background-color: #e0d7d7;
  transition: 0.3s;
}

.text {
  color: #949494;
  margin-top: 4px;
  font-size: 20px;
}

.title {
  font-size: 40px;
  margin: 0;
}

.textos {
  text-align: center;
  margin-bottom: 30px;
  margin-bottom: 70px;
}
</style>
