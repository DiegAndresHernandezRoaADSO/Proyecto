//importaciones
import is_Email from "../modules/is_email.js";
import is_valid from "../modules/is_valid.js";
import remover from "../modules/remove.js";


const $formulario = document.querySelector("form");

// Variables para el formulario de registro
const Correo = document.querySelector("#correo");
const contraseña = document.querySelector("#contraseña");


$formulario.addEventListener("submit", (event) => {
    if (!is_valid(event, `${$formulario} [required]`)) {
        event.preventDefault(); 
    }
});

[Correo, contraseña].forEach(input => {
    input.addEventListener("keyup", () => {
        remover(input);
    });
});


// Validación del correo electrónico
Correo.addEventListener("blur", (event) => {
    is_Email(event, Correo);
});


function redireccionar() {
    window.location.href = "menu.html";
}

