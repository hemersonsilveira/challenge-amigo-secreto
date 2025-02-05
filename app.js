let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if (nome === '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome);
        atualizarLista();
    }
    document.getElementById('amigo').value = '';
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    if (amigos.length === 0) {
        alert('Não foi adicionado nenhum nome.');
    } else {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoAleatorio = amigos[numeroAleatorio];
        
        let mensagemSorteado = document.getElementById('resultado');
        mensagemSorteado.innerHTML = `O amigo secreto sorteado é: ${amigoAleatorio}`;
    }
}
