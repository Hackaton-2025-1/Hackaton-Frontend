// ...existing code...
export function salvarNoBanco(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
}

export function lerDoBanco(chave) {
  const dados = localStorage.getItem(chave);
  return dados ? JSON.parse(dados) : null;
}
// ...existing code...
