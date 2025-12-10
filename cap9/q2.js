// ----- Classe Livro -----
class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }

    emprestar() {
        this.disponivel = false;
    }

    devolver() {
        this.disponivel = true;
    }
}


// ----- Classe Usuario -----
class Usuario {
    constructor(nome) {
        this.nome = nome;
    }
}


// ----- Classe Emprestimo -----
class Emprestimo {
    constructor(usuario, livro) {
        this.usuario = usuario;
        this.livro = livro;
        this.data = new Date();
    }
}


// ----- Classe Biblioteca -----
class Biblioteca {
    constructor() {
        this.livros = [];
        this.usuarios = [];
        this.emprestimos = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    emprestarLivro(nomeUsuario, tituloLivro) {
        const usuario = this.usuarios.find(u => u.nome === nomeUsuario);
        const livro = this.livros.find(l => l.titulo === tituloLivro);

        if (!usuario) return "Usuário não encontrado.";
        if (!livro) return "Livro não encontrado.";
        if (!livro.disponivel) return "Livro já emprestado.";

        livro.emprestar();

        const emp = new Emprestimo(usuario, livro);
        this.emprestimos.push(emp);

        return `Livro "${tituloLivro}" emprestado para ${nomeUsuario}.`;
    }

    devolverLivro(tituloLivro) {
        const emprestimo = this.emprestimos.find(e => 
            e.livro.titulo === tituloLivro && e.livro.disponivel === false
        );

        if (!emprestimo) return "Esse livro não está emprestado.";

        emprestimo.livro.devolver();

        return `Livro "${tituloLivro}" devolvido.`;
    }

    listarLivros() {
        return this.livros;
    }
}


// ===== EXEMPLO DE USO =====
const biblioteca = new Biblioteca();

// Criar livros
const l1 = new Livro("Clean Code", "Robert Martin");
const l2 = new Livro("1984", "George Orwell");

// Criar usuários
const u1 = new Usuario("Gabriel");
const u2 = new Usuario("Ana");

// Registrar
biblioteca.adicionarLivro(l1);
biblioteca.adicionarLivro(l2);
biblioteca.adicionarUsuario(u1);
biblioteca.adicionarUsuario(u2);

// Operações
console.log(biblioteca.emprestarLivro("Gabriel", "Clean Code"));
console.log(biblioteca.devolverLivro("Clean Code"));
console.log(biblioteca.emprestarLivro("Ana", "Clean Code"));

console.log(biblioteca.listarLivros());
