const textoInput = document.getElementById('texto');
const contadorSpan = document.getElementById('contador');

// Funcion para contar las palabras en un texto
const contarPalabras = (texto) => {
  return texto.trim().split(/\s+/).length;
};

// Funcion para actualizar el contador
const actualizarContador = () => {
  const texto = textoInput.value;
  const cantidadPalabras = contarPalabras(texto);
  contadorSpan.textContent = cantidadPalabras;
};

// Actualizar el contador cada vez que el usuario escribe
textoInput.addEventListener('input', actualizarContador);