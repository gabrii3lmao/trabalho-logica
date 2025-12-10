class Publicacao {
    constructor(conteudo, autor) {
        this.conteudo = conteudo;
        this.autor = autor;
        this.data = new Date();
        this.curtidas = [];
        this.comentarios = [];
    }

    curtir(usuario) {
        if (!this.curtidas.includes(usuario)) {
            this.curtidas.push(usuario);
        }
    }

    comentar(usuario, texto) {
        this.comentarios.push({
            usuario,
            texto,
            data: new Date()
        });
    }

    exibirPublicacao() {
        console.log(`Autor: ${this.autor.nome}`);
        console.log(`Data: ${this.data}`);
        console.log(`Conteúdo: ${this.conteudo}`);
        console.log(`Curtidas: ${this.curtidas.length}`);
        console.log("Comentários:");
        this.comentarios.forEach((c) => {
            console.log(` - ${c.usuario.nome}: ${c.texto}`);
        });
    }
}

// ===============
// Classe Usuario
// ===============

class Usuario {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dtNascimento = dataNascimento;
        this.seguidores = [];
        this.seguindo = [];
        this.publicacoes = [];
    }

    seguirUsuario(usuario) {
        if (usuario !== this && !this.seguindo.includes(usuario)) {
            this.seguindo.push(usuario);
            usuario.seguidores.push(this);
        }
    }

    deixarDeSeguir(usuario) {
        this.seguindo = this.seguindo.filter(u => u !== usuario);
        usuario.seguidores = usuario.seguidores.filter(s => s !== this);
    }

    publicar(conteudo) {
        const pub = new Publicacao(conteudo, this);
        this.publicacoes.push(pub);
        return pub;
    }

    exibirFeed() {
        console.log(`Feed de ${this.nome}`);
        this.seguindo.forEach((usuario) => {
            usuario.publicacoes.forEach((pub) => {
                pub.exibirPublicacao();
                console.log("---------------");
            });
        });
    }

    exibirPerfil() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Nasc.: ${this.dtNascimento}`);
        console.log(`Seguidores: ${this.seguidores.length}`);
        console.log(`Seguindo: ${this.seguindo.length}`);
        console.log(`Publicações: ${this.publicacoes.length}`);
    }
}

// ===============
// Classe RedeSocial
// ===============

class RedeSocial {
    constructor(nome) {
        this.nome = nome;
        this.usuarios = [];
    }

    cadastrarUsuario(nome, dataNascimento) {
        const user = new Usuario(nome, dataNascimento);
        this.usuarios.push(user);
        return user;
    }

    removerUsuario(usuario) {
        this.usuarios = this.usuarios.filter(u => u !== usuario);

        // remover o usuário de seguidores e seguindo
        this.usuarios.forEach(u => {
            u.seguidos = u?.seguidos?.filter(s => s !== usuario);
            u.seguidores = u.seguidores.filter(s => s !== usuario);
        });
    }

    buscarUsuario(nome) {
        return this.usuarios.find(u => u.nome === nome);
    }

    exibirUsuarios() {
        console.log(`Usuários cadastrados na rede ${this.nome}:`);
        this.usuarios.forEach(u => console.log(`- ${u.nome}`));
    }
}