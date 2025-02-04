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

