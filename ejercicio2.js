
const textarea = document.getElementById("texto");
const contador = document.getElementById("contador");


function actualizarContador() {
    const longitudTexto = textarea.value.length;
    contador.textContent = longitudTexto;
}
textarea.addEventListener("input", actualizarContador);

actualizarContador();