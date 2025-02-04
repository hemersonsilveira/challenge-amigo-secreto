let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if (nome == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome);
        console.log(amigos);
    }
    document.getElementById('amigo').value = '';
}

