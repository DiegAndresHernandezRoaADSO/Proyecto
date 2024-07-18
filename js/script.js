let menu = document.querySelector(`#menu-icono`);
let lista_navegacion = document.querySelector(`.lista_navegacion`);

menu.onclick = () => {
    menu.classList.toggle(`bx-x`);
    lista_navegacion.classList.toggle(`open`);
}
