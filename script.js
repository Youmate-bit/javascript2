// Obtener referencias a los elementos del formulario
const formulario = document.getElementById('registroForm');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajesDiv = document.getElementById('mensajes');

// Funcion para validar el email (ejemplo simple)
const validarEmail = email => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Funcion para mostrar mensajes de error
const mostrarError = mensaje => {
  const p = document.createElement('p');
  p.textContent = mensaje;
  mensajesDiv.appendChild(p);
};

// Manejador del evento submit del formulario
formulario.addEventListener('submit', event => {
  event.preventDefault();// Evitar el envio del formulario por defecto

  const nombre = nombreInput.value;
  const email = emailInput.value;

  // Validacion de los datos
  if (!nombre) {
    mostrarError('Por favor, ingresa tu nombre.');
  }

  if (!validarEmail(email)) {
    mostrarError('Por favor, ingresa un email valido.');
  }

  // si los datos son validos, mostrar un mensaje de exito (implementar aqui)
  if (nombre && validarEmail(email)) {
    console.log("Mensaje de la consola-Formulario enviado correctamente");
    alert("Formulario enviado correctamente")
    // Aqui puedes agregar codigo para enviar los datos a un servidor, por ejemplo
  }
});