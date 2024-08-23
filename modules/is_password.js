const validarcontraseña = (event)=>{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(regex.test(contraseña)){
        return true;
    }else{
        return false;
    }
}

export default validarcontraseña;