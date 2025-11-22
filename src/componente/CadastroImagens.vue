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
import { defineProps, defineEmits, ref, watch } from 'vue'

const props = defineProps({ imagens: Object })
const emit = defineEmits(['updateImagens'])

const images = ref(props.imagens?.imagens || [])

watch(
  () => props.imagens,
  (novo) => {
    images.value = novo?.imagens || []
  },
  { deep: true },
)

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      images.value.push({ id: Date.now(), src: e.target.result })
      emit('updateImagens', { imagens: [...images.value] })
    }
    reader.readAsDataURL(file)
  }
}
</script>

<style scoped>
/* CONTAINER DE IMAGENS */
.cadastro-imagens {
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: fadeIn 0.4s ease;
  font-family: Arial, sans-serif;
}

/* Galeria */
.image-gallery {
  display: flex;
  gap: 20px;
}

/* Caixa da galeria */
.image-list {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  border: 1px solid rgba(0, 0, 0, 0.17);
  border-radius: 8px;
  padding: 12px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

/* Espaço vazio */
.image-placeholder {
  width: 150px;
  height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.17);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
}

/* Ícone de câmera */
.camera-icon {
  width: 90px;
  height: 90px;
  opacity: 0.5;
}

/* Imagens enviadas */
.image-item {
  width: 150px;
  height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.17);
  border-radius: 6px;
  overflow: hidden;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.uploaded-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* FORMULÁRIO */
.cadastro-form {
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

/* GRUPOS DO FORM */
.form-group {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
}

/* LABELS */
.form-label {
  flex: 0 0 220px;
  font-weight: bold;
  color: #444444;
  font-size: 15px;
}

/* CAMPOS */
.form-input {
  flex: 1;
  padding: 10px 12px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.17);
  border-radius: 6px;
  background: #fafafa;
  transition: 0.2s;
  font-size: 14px;
}

/* TEXTAREAS */
textarea {
  width: 100%;
  padding: 10px 12px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.17);
  border-radius: 6px;
  background: #fafafa;
  transition: 0.2s;
  font-size: 14px;
}

/* FOCO NOS CAMPOS */
.form-input:focus,
textarea:focus {
  outline: none;
  border-color: #555555;
  background: #fff;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
}

/* TEXTO OBRIGATÓRIO */
.required {
  color: red;
  margin-right: 5px;
}

/* ANIMAÇÃO DE ENTRADA */
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
</style>
