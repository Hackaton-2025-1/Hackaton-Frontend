<script setup>
defineOptions({
  name: 'AcervoCard'
})

import logoImg from '@/assets/imagens/logo.png'

defineProps({
  titulo: { type: String, default: 'Título do Acervo' },
  criador: { type: String, default: 'Nome do Criador' },
  dataEntrada: { type: String, default: '21/11/2025' },
  dataSaida: { type: String, default: '22/11/2025' },
  descricao: { type: String, default: 'Descrição detalhada do acervo.' },
  imgSrc: { type: String, default: logoImg }
})
</script>

<template>
  <div class="acervo-card">
    <div class="acervo-img-wrap">
      <img :src="imgSrc" alt="Imagem do acervo" class="acervo-img" />
    </div>
    <div class="acervo-info">
      <h3 class="acervo-titulo">{{ titulo }}</h3>
      <div class="acervo-meta">
        <span class="acervo-criador"><i class="fas fa-user"></i> {{ criador }}</span>
        <span class="acervo-entrada"><i class="fas fa-calendar-plus"></i> {{ dataEntrada }}</span>
        <span class="acervo-saida"><i class="fas fa-calendar-minus"></i> {{ dataSaida }}</span>
      </div>
      <p class="acervo-descricao">{{ descricao }}</p>
    </div>
  </div>
</template>

<style scoped>
.acervo-card {
  background: #f7f3ec;
  border-radius: 18px;
  box-shadow: 0 4px 18px rgba(80, 50, 30, 0.10);
  padding: 18px 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  border: 1.5px solid #a67c52;
  gap: 24px;
}
.acervo-img-wrap {
  min-width: 120px;
  width: 120px;
  height: 120px;
  background: #fffbe6;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(166, 124, 82, 0.10);
  overflow: hidden;
}
.acervo-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  background: #fffbe6;
  border: 2px solid #a67c52;
}
.acervo-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-width: 0;
  justify-content: flex-start;
}
.acervo-titulo {
  font-size: 1.25rem;
  color: #a67c52;
  font-weight: 700;
  margin-bottom: 2px;
  font-family: 'Playfair Display', Georgia, serif;
  word-break: break-word;
}
.acervo-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 6px;
}
.acervo-criador, .acervo-entrada, .acervo-saida {
  font-size: 0.98rem;
  color: #6d5c3a;
  font-family: 'Roboto', sans-serif;
  background: #fffbe6;
  border-radius: 6px;
  padding: 4px 10px;
  box-shadow: 0 1px 4px rgba(166, 124, 82, 0.06);
  display: flex;
  align-items: center;
  gap: 6px;
}
.acervo-criador i, .acervo-entrada i, .acervo-saida i {
  color: #c49a3f;
  font-size: 1em;
}
.acervo-descricao {
  font-size: 1.05rem;
  color: #4e2e13;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  word-break: break-word;
  background: #fffbe6;
  border-radius: 8px;
  padding: 10px 14px;
  box-shadow: 0 1px 6px rgba(166, 124, 82, 0.06);
}
@media (max-width: 900px) {
  .acervo-card {
    flex-direction: column;
    align-items: stretch;
    max-width: 98vw;
    padding: 12px 6px;
    border-radius: 12px;
    gap: 12px;
  }
  .acervo-img-wrap {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
    border-radius: 8px;
  }
  .acervo-img {
    width: 54px;
    height: 54px;
    border-radius: 4px;
  }
  .acervo-titulo {
    font-size: 1rem;
  }
  .acervo-meta {
    gap: 8px;
  }
  .acervo-criador, .acervo-entrada, .acervo-saida {
    font-size: 0.92rem;
    padding: 3px 6px;
  }
}
@media (max-width: 400px) {
  .acervo-img-wrap {
    width: 38px;
    height: 38px;
  }
  .acervo-img {
    width: 28px;
    height: 28px;
  }
  .acervo-titulo {
    font-size: 0.85rem;
  }
  .acervo-criador, .acervo-entrada, .acervo-saida {
    font-size: 0.78rem;
    padding: 2px 3px;
  }
}
</style>
