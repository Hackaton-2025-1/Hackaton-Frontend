// Serviço localStorage para usuários e artefatos

// Usuários
export const fetchUsuarios = async () => {
  return JSON.parse(localStorage.getItem('usuarios') || '[]')
}

export const createUsuario = async (usuario) => {
  const usuarios = await fetchUsuarios()
  // Verifica se já existe email
  if (usuarios.some((u) => u.email === usuario.email)) {
    throw new Error('Email já cadastrado')
  }
  usuarios.push(usuario)
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
  return usuario
}

export const updateUsuario = async (email, usuario) => {
  let usuarios = await fetchUsuarios()
  usuarios = usuarios.map((u) => (u.email === email ? usuario : u))
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
  return usuario
}

export const deleteUsuario = async (email) => {
  let usuarios = await fetchUsuarios()
  usuarios = usuarios.filter((u) => u.email !== email)
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

export const login = async (email, password) => {
  const usuarios = await fetchUsuarios()
  const user = usuarios.find((u) => u.email === email && u.password === password)
  if (!user) throw new Error('Email ou senha inválidos')
  return user
}

// Artefatos
export const fetchArtefatos = async () => {
  return JSON.parse(localStorage.getItem('artefatos') || '[]')
}

export const createArtefato = async (artefato) => {
  const artefatos = await fetchArtefatos()
  artefatos.push(artefato)
  localStorage.setItem('artefatos', JSON.stringify(artefatos))
  return artefato
}

export const updateArtefato = async (id, artefato) => {
  let artefatos = await fetchArtefatos()
  artefatos = artefatos.map((a) => (a.id === id ? artefato : a))
  localStorage.setItem('artefatos', JSON.stringify(artefatos))
  return artefato
}

export const deleteArtefato = async (id) => {
  let artefatos = await fetchArtefatos()
  artefatos = artefatos.filter((a) => a.id !== id)
  localStorage.setItem('artefatos', JSON.stringify(artefatos))
}
