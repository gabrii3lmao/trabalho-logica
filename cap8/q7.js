
export function usuariosDB() {
  // lista privada
  const usuarios = [];

  const adicionar = (nome, email, senha) => {
    usuarios.push({ nome, email, senha });
  };

  const remover = (email) => {
    const index = usuarios.findIndex((u) => u.email === email);
    if (index !== -1) usuarios.splice(index, 1);
  };

  const atualizar = (email, novosDados) => {
    const user = usuarios.find((u) => u.email === email);
    if (user) Object.assign(user, novosDados);
  };

  return {
    adicionar,
    remover,
    atualizar
  };
}