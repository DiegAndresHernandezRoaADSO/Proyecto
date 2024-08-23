const remover = (input) => {
    if (input.value !== "") {
        input.classList.add("correcto"); // Añade la clase correcto
        input.classList.remove("error"); // Quita la clase error
        
    } else {
        input.classList.remove("correcto");
        input.classList.add("error");
    }
};

export default remover;