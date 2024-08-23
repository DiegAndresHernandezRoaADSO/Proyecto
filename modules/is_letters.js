const is_letters =(event, elemento) =>{
    let Letras = /^[a-zA-ZÀ-ÿ\s]+$/; 
    if (Letras.test(event.key)) {
    }else{
        event.preventDefault();
    }
}

export default is_letters