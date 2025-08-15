let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo === '') { 
        alert('Por favor ingresa un nombre válido');
        return;
    }
    // Verifica si ya existe
    if (amigos.includes(nombreAmigo)) {
        alert('Este amigo ya fue añadido');
        return;
    }

    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = '';
    actualizarLista(); // función para mostrar en el HTML
    console.log(amigos);
}
// Función para actualizar visualmente la lista
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
function sortearAmigo(){
    ocultarLista();
    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length+1)]
    const ulSorteada = document.getElementById('resultado');
    ulSorteada.textContent= amigoSorteado;
    amigos = [];
    actualizarLista();
    
}
function ocultarLista(){
    const lista = document.getElementById('listaAmigos');

    // Si está oculta, la mostramos; si está visible, la ocultamos
    if (lista.style.display === 'none') {
        lista.style.display = 'block';  // muestra la lista
    } else {
        lista.style.display = 'none';   // oculta la lista
    }
}