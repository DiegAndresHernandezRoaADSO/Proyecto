// Importación de módulos
import isEmail from "../modules/is_email.js";
import is_letters from "../modules/is_letters.js";
import is_number from "../modules/is_number.js";
import is_valid from "../modules/is_valid.js";
import remover from "../modules/remove.js";

const $formulario = document.querySelector("form");

// Variables para el formulario de registro
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const contrasena = document.querySelector("#contrasena");
const button = document.querySelector("#submitButton");

// Manejar el envío del formulario
$formulario.addEventListener("submit", (event) => {
    if (!is_valid(event, "$formulario [required]")) {
        event.preventDefault(); // Prevenir el envío si la validación falla
    }
});

// Remover clases de error en tiempo real
[nombre, apellido, telefono, correo, contrasena].forEach(input => {
    input.addEventListener("input", () => remover(input));
});

// Validación en tiempo real del teléfono
telefono.addEventListener("input", is_number); // 'input' es más adecuado que 'keypress' para campos de entrada

// Validación en tiempo real del nombre
nombre.addEventListener("input", (event) => {
    is_letters(event, nombre);
});

// Validación en tiempo real del apellido
apellido.addEventListener("input", (event) => {
    is_letters(event, apellido);
});

// Validación del correo electrónico al perder el foco
correo.addEventListener("blur", (event) => {
    isEmail(event, correo);
});

// Validación de la contraseña al perder el foco (añade lógica según lo necesario)
contrasena.addEventListener("blur", (event) => is_valid(event, contrasena));






