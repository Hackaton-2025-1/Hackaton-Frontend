<template>
  <div class="cadastro-imagens">
    <h2>Imagem</h2>
    <div class="image-gallery">
      <div class="image-list">
        <div v-if="images.length === 0" class="image-placeholder">
          <img src="/src/assets/imagens/camera-icon.png" alt="Camera Icon" class="camera-icon" />
        </div>
        <div class="image-item" v-for="image in images" :key="image.id">
          <img :src="image.src" alt="Uploaded Image" class="uploaded-image" />
        </div>
      </div>
    </div>
  </div>

  <form class="cadastro-form">
    <div class="form-group">
      <label for="image-upload" class="form-label">
        <span class="required">*</span> Upload da Imagem
      </label>
      <input
        class="form-input"
        type="file"
        id="image-upload"
        @change="handleImageUpload"
        required
      />
    </div>

    <div class="form-group">
      <label for="image-description" class="form-label"> Descrição da Imagem </label>
      <textarea
        id="image-description"
        class="form-input"
        placeholder="Digite a descrição da imagem"
      ></textarea>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([])

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      images.value.push({ id: Date.now(), src: e.target.result })
    }
    reader.readAsDataURL(file)
  }
}
</script>

<style scoped>
.cadastro-imagens {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.image-gallery {
  display: flex;
  gap: 20px;
}

.image-list {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.image-placeholder {
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.camera-icon {
  width: 100px;
  height: 100px;
}

.image-item {
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.uploaded-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.required {
  color: red;
  margin-right: 5px;
}

.form-group {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.form-label {
  flex: 0 0 200px;
  font-weight: bold;
  color: #555555;
}

.form-input {
  flex: 1;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.17);
}

textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.17);
}
</style>
