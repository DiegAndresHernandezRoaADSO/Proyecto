// Importación de módulos
import is_Email from "../modules/is_email.js";
import is_letters from "../modules/is_letters.js";
import is_number from "../modules/is_number.js";
import is_valid from "../modules/is_valid.js";
import remover from "../modules/remove.js";
import validarcontraseña from "../modules/is_password.js";

const $formulario = document.querySelector("form");

// Variables para el formulario de registro
const nombres = document.querySelector("#nombres");
const apellidos = document.querySelector("#apellidos");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const contraseña = document.querySelector("#contraseña");

// Manejar el envío del formulario
$formulario.addEventListener("submit", (event) => {
    if (!is_valid(event, `${$formulario} [required]`)) {
        event.preventDefault(); 
    }
});

[nombres, apellidos, correo, telefono, contraseña].forEach(input => {
    input.addEventListener("keyup", () => {
        remover(input);
    });
});

// Remover clases de error en tiempo real y validar campos

// Validación del telefono
telefono.addEventListener("keypress", is_number);

// Validación del nombre 
nombres.addEventListener("keypress", (event) => {
    is_letters(event, nombres);
});

// Validación del apellido
apellidos.addEventListener("keypress", (event) => {
    is_letters(event, apellidos);
});

// Validación del correo electrónico
correo.addEventListener("blur", (event) => {
    is_Email(event, correo);
});

contraseña.addEventListener("keypres", (event)=>{
    is_valid(event,contraseña)
    validarcontraseña(event,contraseña)


})



















