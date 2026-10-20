const albumSuperache = [
    "Movies",
    "People Watching",
    "Disaster",
    "Best Friend",
    "Astronomy",
    "Yours",
    "Jigsaw",
    "Family Line",
    "Summer Child",
    "Footnote",
    "Memories",
    "The Exit"
];

// Seleção utilizando os IDs específicos do novo HTML
const botaoNova = document.getElementById('btnNova');
const textoFrase = document.getElementById('textoFrase');

function gerarOrdem() {
    const indiceAleatorio = Math.floor(Math.random() * albumSuperache.length);
    const musicaEscolhida = albumSuperache[indiceAleatorio];
    
    textoFrase.textContent = `Música selecionada: ${musicaEscolhida}`;
}

botaoNova.addEventListener('click', gerarOrdem);