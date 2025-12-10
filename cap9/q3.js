// ===== Classe Música =====
class Musica {
    constructor(titulo, artista, duracao, arquivo) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
        this.arquivo = arquivo;
        this.tocando = false;
    }

    reproduzir() {
        this.tocando = true;
        console.log(`▶ Tocando: ${this.titulo} - ${this.artista}`);
    }

    pausar() {
        this.tocando = false;
        console.log(`⏸ Pausado: ${this.titulo}`);
    }
}


// ===== Classe Artista =====
class Artista {
    constructor(nome, foto) {
        this.nome = nome;
        this.foto = foto;
        this.musicas = [];
    }

    listaDeMusicas() {
        return this.musicas;
    }

    adicionarMusica(musica) {
        this.musicas.push(musica);
    }

    removerMusica(musica) {
        this.musicas = this.musicas.filter(m => m !== musica);
    }
}


// ===== Classe Playlist =====
class Playlist {
    constructor(nome) {
        this.nome = nome;
        this.musicas = [];
        this.indexAtual = 0;
    }

    adicionarMusica(musica) {
        this.musicas.push(musica);
    }

    removerMusica(musica) {
        this.musicas = this.musicas.filter(m => m !== musica);
    }

    reproduzir() {
        if (this.musicas.length === 0) {
            console.log("Playlist vazia.");
            return;
        }

        const musicaAtual = this.musicas[this.indexAtual];
        musicaAtual.reproduzir();
    }

    avancarMusica() {
        if (this.musicas.length === 0) return;

        this.indexAtual = (this.indexAtual + 1) % this.musicas.length;
        this.reproduzir();
    }

    voltarMusica() {
        if (this.musicas.length === 0) return;

        this.indexAtual = (this.indexAtual - 1 + this.musicas.length) % this.musicas.length;
        this.reproduzir();
    }
}



// ===== EXEMPLO DE USO =====

// Artista
const artista = new Artista("The Weeknd", "foto.png");

// Músicas
const m1 = new Musica("Blinding Lights", "The Weeknd", "3:24", "blindinglights.mp3");
const m2 = new Musica("Save Your Tears", "The Weeknd", "3:30", "saveteas.mp3");

// Associar ao artista
artista.adicionarMusica(m1);
artista.adicionarMusica(m2);

// Playlist
const playlist = new Playlist("Minhas Favoritas");

playlist.adicionarMusica(m1);
playlist.adicionarMusica(m2);

// Testes
playlist.reproduzir();        // toca Blinding Lights
playlist.avancarMusica();    // toca Save Your Tears
playlist.voltarMusica();     // volta para Blinding Lights
