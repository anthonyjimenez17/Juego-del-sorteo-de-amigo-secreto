let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    if (!nombreAmigo) { 
        alert('Por favor ingresa un nombre válido');
        return;
    }
    if (amigos.includes(nombreAmigo)) {
        alert('Este amigo ya fue añadido');
        return;
    }

    amigos.push(nombreAmigo);
    input.value = '';
    actualizarLista();
}

// Muestra la lista de amigos en el HTML
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    lista.style.display = 'block';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').textContent = amigoSorteado;

    amigos = [];
    actualizarLista();
    document.getElementById('listaAmigos').style.display = 'none';
}
