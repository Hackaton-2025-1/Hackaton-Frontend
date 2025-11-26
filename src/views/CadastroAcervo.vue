<template>
    <NavBar :userSrc="userStore.avatar" :userName="userStore.name || 'Visitante'" />

  <router-link to="gerenciamento" class="btn-voltar">
  <i class="fas fa-arrow-left"></i>
</router-link>




  <h1 class="cadastro-title">CADASTRO DE ITENS DO ACERVO</h1>

  <main class="cadastro-container">
    <div class="cadastro-tabs">
      <button
        class="tab-button"
        :class="{ active: activeTab === 'Geral' }"
        @click="activeTab = 'Geral'"
      >
        Geral
      </button>

      <button
        class="tab-button"
        :class="{ active: activeTab === 'Dados' }"
        @click="activeTab = 'Dados'"
      >
        Dados
      </button>

      <button
        class="tab-button"
        :class="{ active: activeTab === 'Imagens' }"
        @click="activeTab = 'Imagens'"
      >
        Imagens
      </button>
      <button
        class="tab-button"
        :class="{ active: activeTab === 'Localizacao' }"
        @click="activeTab = 'Localizacao'"
      >
        Localização
      </button>
    </div>

    <CadastroGeral
      v-if="activeTab === 'Geral'"
      :geral="geral.value"
      @update-geral="(val) => (geral.value = val)"
    />
    <CadastroDados
      v-if="activeTab === 'Dados'"
      :dados="dados.value"
      @update-dados="(val) => (dados.value = val)"
    />
    <CadastroImagens
      v-if="activeTab === 'Imagens'"
      :imagens="imagens"
      @update-imagens="
        (val) => {
          console.log('Atualizando imagens:', val)
          imagens.value = { imagens: Array.isArray(val.imagens) ? [...val.imagens] : [] }
        }
      "
    />
    <CadastroLocalizacao
      v-if="activeTab === 'Localização'"
      :localizacao="localizacao.value"
      @update-localizacao="(val) => (localizacao.value = val)"
    />

    <button
      class="btn-adicionar"
      :disabled="carregando"
      @click="adicionarNovoItem"
      style="margin-top: 32px"
    >
      <span v-if="carregando">Salvando...</span>
      <span v-else>Adicionar ao Acervo</span>
    </button>
    <div v-if="mensagem" style="margin: 16px 0; color: #c45d4c; font-weight: bold">
      {{ mensagem }}
    </div>
  </div>
</template>

<script setup>
async function adicionarNovoItem() {
  carregando.value = true
  mensagem.value = ''
  try {
    // Monta o objeto do artefato
    const artefato = {
      nome: geral.value.nome,
      descricao: dados.value.descricao,
      datado: dados.value.datado,
      materiaPrima: dados.value.materiaPrima,
      SubMatPrima: dados.value.SubMatPrima,
      imagem: imagens.value.imagens?.[0] || null,
      categoria: geral.value.categoria,
      peso: dados.value.peso,
      dimensoes: dados.value.dimensoes,
      sitio: localizacao.value.sitio,
      estado: localizacao.value.estado,
      cidade: localizacao.value.cidade,
      grupo_etnico: dados.value.grupo_etnico,
      sala: localizacao.value.sala,
      estante: localizacao.value.estante,
      prateleira: localizacao.value.prateleira,
      observacoes_gerais: dados.value.generalObservations,
      responsavel: dados.value.responsavel,
      colecao: geral.value.colecao,
      categoria_nome: geral.value.categoria,
      subtipo: geral.value.subtipo,
      nivel_conservacao: geral.value.nivelConservacao,
      integridade: geral.value.integridade,
      detalhe_conservacao: geral.value.detalheConservacao,
      bloco: localizacao.value.bloco,
      predio: localizacao.value.predio,
      dataEntrada: localizacao.value.dataEntrada,
      data_saida: localizacao.value.dataSaida,
    }
    await createArtefato(artefato)
    mensagem.value = 'Item cadastrado com sucesso!'
    geral.value = {
      nome: '',
      categoria: '',
      colecao: '',
      subtipo: '',
      nivelConservacao: '',
      integridade: '',
      detalheConservacao: '',
    }
    dados.value = {
      dimensoes: '',
      peso: '',
      descricao: '',
      material: '',
      sitio: '',
      estado: '',
      cidade: '',
      grupo: '',
      room: '',
      shelf: '',
      rack: '',
      generalObservations: '',
      responsible: '',
    }
    localizacao.value = {
      sitio: '',
      cidade: '',
      estado: '',
      bloco: '',
      predio: '',
      sala: '',
      prateleira: '',
      dataEntrada: '',
      dataSaida: '',
    }
    imagens.value = { imagens: [] }
  } catch (err) {
    // Tenta extrair mensagem detalhada do backend
    if (err instanceof Response) {
      try {
        const data = await err.json()
        mensagem.value =
          'Erro ao cadastrar: ' + (data?.detail || JSON.stringify(data) || err.statusText)
      } catch (e) {
        mensagem.value = 'Erro ao cadastrar: ' + err.statusText
      }
    } else {
      mensagem.value = 'Erro ao cadastrar: ' + (err?.message || err)
    }
  } finally {
    carregando.value = false
  }
}
const imagens = ref({ imagens: [] })
const dados = ref({
  dimensoes: '',
  peso: '',
  descricao: '',
  material: '',
  sitio: '',
  estado: '',
  cidade: '',
  grupo: '',
  room: '',
  shelf: '',
  rack: '',
  generalObservations: '',
  responsible: '',
})
import NavBar from '@/componente/NavBar.vue'
import CadastroGeral from '../componente/CadastroGeral.vue'
import CadastroDados from '../componente/CadastroDados.vue'
import CadastroImagens from '../componente/CadastroImagens.vue'
import CadastroLocalizacao from '../componente/CadastroLocalizacao.vue'
import { ref } from 'vue'
import { createArtefato } from '@/services/api.js'

const carregando = ref(false)
const mensagem = ref('')
const activeTab = ref('Geral')

// Estado centralizado dos formulários
const geral = ref({
  nome: '',
  categoria: '',
  colecao: '',
  subtipo: '',
  nivelConservacao: '',
  integridade: '',
  detalheConservacao: '',
})

const localizacao = ref({
  sitio: '',
  cidade: '',
  estado: '',
  bloco: '',
  predio: '',
  sala: '',
  prateleira: '',
  dataEntrada: '',
  dataSaida: '',
})
</script>

<style scoped>
.cadastro-container {
  padding: 40px;
  max-width: 93%;
  margin: 30px auto 0;
  background-color: #ffffff;
  border-radius: 5px;
  border: rgba(0, 0, 0, 0.17) 1px solid;
}

.linha {
  display: block;
  width: calc(100% - 48px);
  height: 1px;
  background-color: rgba(0, 0, 0, 0.17);
  margin-left: 24px;
  margin-bottom: 10px;
}

.cadastro-title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  color: #c45d4c;
  margin-left: 110px;
  margin-top: 16vh;
}

.cadastro-tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 35px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.17);
}

.tab-button {
  padding: 15px 30px;
  border: none;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s, border-color 0.3s;
}

.tab-button.active {
  color: rgba(0, 0, 0, 1);
  border-top: 1px solid rgba(0, 0, 0, 0.17);
  border-left: 1px solid rgba(0, 0, 0, 0.17);
  border-right: 1px solid rgba(0, 0, 0, 0.17);
  border-bottom: none;
  background-color: #f9f9f9;
}

.tab-button:hover:not(.active) {
  color: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}


.btn-voltar {
  position: absolute;
  top: 150px;
  left: 30px;
  background-color: #c45d4c;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 100px;
  cursor: pointer;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: 0.3s;
  width: 35px;
}


.btn-voltar i {
  font-size: 16px;
}

.btn-voltar:hover {
  background-color: #a94b3c;
}

</style>
