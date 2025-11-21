<template>
  <div class="cadastro-imagens">
    <h2>Imagem</h2>
    <div class="image-upload">
      <div class="image-placeholder">
        <img src="/src/assets/imagens/camera-icon.png" alt="Camera Icon" />
      </div>
      <button class="add-image-button">+</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.cadastro-imagens {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.image-upload {
  display: flex;
  align-items: center;
  gap: 10px;
}

.image-placeholder {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-image-button {
  background-color: #d4a373;
  color: white;
  font-size: 24px;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.add-image-button:hover {
  background-color: #b5835a;
}
</style>
