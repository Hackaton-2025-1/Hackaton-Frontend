// Configuração da URL base da API Django
const API_BASE = 'http://127.0.0.1:19003/api'

// Usuários
export const fetchUsuarios = async () => {
  const res = await fetch(`${API_BASE}/usuarios/`)
  if (!res.ok) throw new Error('Erro ao buscar usuários')
  return await res.json()
}

export const createUsuario = async (usuario) => {
  const res = await fetch(`${API_BASE}/usuarios/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(usuario),
  })
  if (!res.ok) throw new Error('Erro ao criar usuário')
  return await res.json()
}

export const updateUsuario = async (id, usuario) => {
  const res = await fetch(`${API_BASE}/usuarios/${id}/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(usuario),
  })
  if (!res.ok) throw new Error('Erro ao atualizar usuário')
  return await res.json()
}

export const deleteUsuario = async (id) => {
  const res = await fetch(`${API_BASE}/usuarios/${id}/`, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error('Erro ao deletar usuário')
}

export const login = async (email, password) => {
  const res = await fetch(`${API_BASE}/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  if (!res.ok) throw new Error('Email ou senha inválidos')
  return await res.json()
}

// Artefatos
export const fetchArtefatos = async () => {
  const res = await fetch(`${API_BASE}/artefatos/`)
  if (!res.ok) throw new Error('Erro ao buscar artefatos')
  const data = await res.json()
  // Se vier paginado, retorna apenas o array de resultados
  if (Array.isArray(data.results)) {
    return data.results
  }
  // Se vier array direto, retorna como está
  if (Array.isArray(data)) {
    return data
  }
  // Se vier objeto único, retorna em array
  if (typeof data === 'object') {
    return [data]
  }
  return []
}

export const createArtefato = async (artefato) => {
  const res = await fetch(`${API_BASE}/artefatos/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(artefato),
  })
  if (!res.ok) {
    let detail = 'Erro ao criar artefato'
    try {
      const data = await res.json()
      detail = data?.detail || JSON.stringify(data)
    } catch {}
    throw new Error(detail)
  }
  return await res.json()
}

export const updateArtefato = async (id, artefato) => {
  const res = await fetch(`${API_BASE}/artefatos/${id}/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(artefato),
  })
  if (!res.ok) throw new Error('Erro ao atualizar artefato')
  return await res.json()
}

export const deleteArtefato = async (id) => {
  const res = await fetch(`${API_BASE}/artefatos/${id}/`, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error('Erro ao deletar artefato')
}
