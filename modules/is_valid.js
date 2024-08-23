const is_valid = (event, form) => {
    event.preventDefault();
    const elementos = document.querySelectorAll(form);
    let todosLlenos = true;

    elementos.forEach(elemento => {
        if (elemento.value.trim() === "") {
            elemento.classList.add("error");
            elemento.classList.remove("correcto");
            todosLlenos = false;
        } else {
            elemento.classList.remove("error");
            elemento.classList.add("correcto");
        }
    });

    if (todosLlenos) {
        alert("Correcto, todos los campos están llenos y validados");
    } else {
        alert("Incorrecto, algunos campos están vacíos o no son válidos");
    }
    
    return todosLlenos;
};

export default is_valid;
