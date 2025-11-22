import axios from 'axios'

const api = axios.create({
  baseURL: 'http://0.0.0.0:19003/api/',
})

// Adiciona o token JWT em todas as requisições autenticadaass
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Autenticação (login)
export const login = async (email, password) => {
  const response = await api.post('token/', { email, password })
  return response.data // { access, refresh }
}

// CRUD Usuários
export const fetchUsuarios = async () => {
  const response = await api.get('usuarios/')
  return response.data
}

export const createUsuario = async (usuario) => {
  const response = await api.post('usuarios/', usuario)
  return response.data
}

export const updateUsuario = async (id, usuario) => {
  const response = await api.put(`usuarios/${id}/`, usuario)
  return response.data
}

export const deleteUsuario = async (id) => {
  await api.delete(`usuarios/${id}/`)
}

// CRUD Artefatos
export const fetchArtefatos = async () => {
  const response = await api.get('artefatos/')
  return response.data
}

export const createArtefato = async (artefato) => {
  const response = await api.post('artefatos/', artefato)
  return response.data
}

export const updateArtefato = async (id, artefato) => {
  const response = await api.put(`artefatos/${id}/`, artefato)
  return response.data
}

export const deleteArtefato = async (id) => {
  await api.delete(`artefatos/${id}/`)
}
