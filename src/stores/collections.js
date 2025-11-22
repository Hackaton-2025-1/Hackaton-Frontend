import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCollectionsStore = defineStore('collections', () => {
  const collections = ref([
    {
      id: 1,
      name: 'Coleção Dr. Paulo Duarte',
      backgroundImage: 'https://aventurasnahistoria.com.br/wp-content/uploads/capa_esqueelto_sitio_brasil.jpeg',
      banner: 'https://aventurasnahistoria.com.br/wp-content/uploads/capa_esqueelto_sitio_brasil.jpeg',
      description: 'Artefatos líticos e cerâmicos coletados nas primeiras escavações sistemáticas do Sambaqui do Morro',
      items: [
        {
          id: 1,
          name: 'Machado Polido',
          photo: 'https://live.staticflickr.com/8058/8253409368_ae7726b8f6_z.jpg',
          description: 'Instrumento lítico polido utilizado para corte e processamento de alimentos. Peça fundamental para compreensão das técnicas de manufatura dos povos sambaquieiros.',
          date: '3.500 a.C.',
          location: 'Sambaqui do Morro - Camada III'
        },
        {
          id: 2,
          name: 'Ponta de Projétil em Osso',
          photo: 'https://aventurasnahistoria.com.br/wp-content/uploads/capa_esqueelto_sitio_brasil.jpeg',
          description: 'Artefato ósseo finamente trabalhado, utilizado em atividades de caça e pesca. Demonstra habilidade técnica avançada.',
          date: '4.200 a.C.',
          location: 'Sambaqui do Morro - Camada V'
        },
        {
          id: 3,
          name: 'Vasilhame Cerâmico',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Vasilha_Guarani_restaurada..jpg/640px-Vasilha_Guarani_restaurada..jpg',
          description: 'Recipiente cerâmico com decoração incisa. Evidencia práticas culinárias e possível armazenamento de alimentos.',
          date: '2.800 a.C.',
          location: 'Sambaqui do Morro - Camada II'
        },
        {
          id: 4,
          name: 'Anzol de Osso',
          photo: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop',
          description: 'Pequeno anzol confeccionado em osso de peixe, evidenciando técnicas de pesca especializadas.',
          date: '3.900 a.C.',
          location: 'Sambaqui do Morro - Camada IV'
        },
        {
          id: 5,
          name: 'Contas de Colar',
          photo: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=300&h=300&fit=crop',
          description: 'Conjunto de contas perfuradas em conchas marinhas, utilizadas como adornos corporais e indicadores de status social.',
          date: '3.200 a.C.',
          location: 'Sambaqui do Morro - Sepultamento 12'
        },
        {
          id: 6,
          name: 'Lâmina de Machado',
          photo: 'https://vault.pulsarimagens.com.br/file/thumb/25RA656.jpg',
          description: 'Lâmina lítica de grandes dimensões, provavelmente utilizada em atividades de desbaste e construção.',
          date: '4.500 a.C.',
          location: 'Sambaqui do Morro - Camada VI'
        },
        {
          id: 8,
          name: 'Zoólito de Baleia',
          photo: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=300&h=300&fit=crop',
          description: 'Escultura zoomórfica em pedra representando cetáceo. Objeto de possível uso ritual ou simbólico.',
          date: '3.700 a.C.',
          location: 'Sambaqui do Morro - Camada IV'
        },
         {
          id: 9,
          name: 'Machado',
          photo: 'https://vault.pulsarimagens.com.br/file/thumb/25RA656.jpg',
          description: 'Lâmina lítica de grandes dimensões, provavelmente utilizada em atividades de desbaste e construção.',
          date: '4.500 a.C.',
          location: 'Sambaqui do Morro - Camada VI'
        },
          {
          id: 10,
          name: 'Lâmina de Machado',
          photo: 'https://vault.pulsarimagens.com.br/file/thumb/25RA656.jpg',
          description: 'Lâmina lítica de grandes dimensões, provavelmente utilizada em atividades de desbaste e construção.',
          date: '4.500 a.C.',
          location: 'Sambaqui do Morro - Camada VI'
        },
      ]
    },
    {
      id: 2,
      name: 'Coleção Dra. Maria Clara',
      backgroundImage: 'https://www.infoescola.com/wp-content/uploads/2008/05/sambaqui.jpg',
      banner: 'https://www.infoescola.com/wp-content/uploads/2008/05/sambaqui.jpg',
      description: 'Artefatos ósseos e zoólitos encontrados em contextos funerários, revelando práticas rituais dos sambaquieiros',
      items: [
        {
          id: 1,
          name: 'Pingente Antropomorfo',
          photo: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=300&h=300&fit=crop',
          description: 'Adorno confeccionado em osso com representação humana estilizada. Encontrado junto a sepultamento de prestígio.',
          date: '3.400 a.C.',
          location: 'Sambaqui da Figueira - Sepultamento 8'
        },
        {
          id: 2,
          name: 'Zoólito de Peixe',
          photo: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=300&h=300&fit=crop',
          description: 'Escultura em pedra polida representando peixe. Artefato de significado simbólico associado a rituais aquáticos.',
          date: '3.800 a.C.',
          location: 'Sambaqui da Figueira - Área Cerimonial'
        },
        {
          id: 3,
          name: 'Furador de Osso',
          photo: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop',
          description: 'Instrumento perfurante em osso, utilizado para perfuração de conchas e confecção de adornos.',
          date: '4.000 a.C.',
          location: 'Sambaqui da Figueira - Oficina Lítica'
        },
        {
          id: 4,
          name: 'Mandíbula Perfurada',
          photo: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=300&h=300&fit=crop',
          description: 'Osso mandibular humano com perfuração intencional, possivelmente utilizado como pendente ritual.',
          date: '3.600 a.C.',
          location: 'Sambaqui da Figueira - Sepultamento 15'
        }
      ]
    },
    {
      id: 3,
      name: 'Coleção Prof. Castro Faria',
      backgroundImage: 'https://conhecimentocientifico.r7.com/wp-content/uploads/2020/08/sambaquis-o-que-sao-formacao-estudos-da-pre-historia-e-curiosidades-1.jpg.webp',
      banner: 'https://conhecimentocientifico.r7.com/wp-content/uploads/2020/08/sambaquis-o-que-sao-formacao-estudos-da-pre-historia-e-curiosidades-1.jpg.webp',
      description: 'Instrumentos de trabalho e ferramentas líticas que documentam o cotidiano e tecnologia sambaquieira',
      items: [
        {
          id: 1,
          name: 'Bigorna Lítica',
          photo: 'https://images.unsplash.com/photo-1628008000805-65c6e6257e4e?w=300&h=300&fit=crop',
          description: 'Bloco de pedra utilizado como base para lascamento e processamento de materiais líticos.',
          date: '4.300 a.C.',
          location: 'Sambaqui Comprido - Área de Lascamento'
        },
        {
          id: 2,
          name: 'Percutor Circular',
          photo: 'https://images.unsplash.com/photo-1628008000805-65c6e6257e4e?w=300&h=300&fit=crop',
          description: 'Seixo arredondado utilizado para percussão no processo de fabricação de instrumentos líticos.',
          date: '4.400 a.C.',
          location: 'Sambaqui Comprido - Oficina 2'
        },
        {
          id: 3,
          name: 'Raspador Circular',
          photo: 'https://images.unsplash.com/photo-1628008000805-65c6e6257e4e?w=300&h=300&fit=crop',
          description: 'Ferramenta de pedra lascada com gume circular, utilizada no processamento de peles e fibras vegetais.',
          date: '3.900 a.C.',
          location: 'Sambaqui Comprido - Habitação 5'
        }
      ]
    },
    {
      id: 4,
      name: 'Coleção Dra. Dorath Pinto Uchôa',
      backgroundImage: 'https://portalamazonia.com/wp-content/uploads/2023/03/DSC_0873.jpg',
      banner: 'https://portalamazonia.com/wp-content/uploads/2023/03/DSC_0873.jpg',
      description: 'Remanescentes faunísticos e artefatos associados às práticas alimentares e subsistência dos grupos litorâneos',
      items: [
        {
          id: 1,
          name: 'Vértebras de Peixe Perfuradas',
          photo: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop',
          description: 'Conjunto de vértebras de grandes peixes perfuradas intencionalmente, possivelmente para uso como adorno.',
          date: '3.500 a.C.',
          location: 'Sambaqui do Rio Comprido - Lixeira'
        },
        {
          id: 2,
          name: 'Carapaça de Tartaruga Marinha',
          photo: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop',
          description: 'Fragmento de carapaça com marcas de corte, evidenciando consumo e possível uso utilitário.',
          date: '3.700 a.C.',
          location: 'Sambaqui do Rio Comprido - Área de Descarte'
        }
      ]
    }
  ])

  function getCollectionById(id) {
    return collections.value.find(c => c.id === parseInt(id))
  }

  return { collections, getCollectionById }
})
