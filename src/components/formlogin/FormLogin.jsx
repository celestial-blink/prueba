import React,{useRef} from 'react';

import './FormLogin.css';
import 'font-awesome/css/font-awesome.min.css';

const FormLogin = () =>{

    const formulario=useRef(null);

    const handleSubmitForm = () =>{
        let formdata = new FormData(formulario.current);
        let data = {
            username:formdata.get('username'),
            password:formdata.get('password'),
            action:'login'
        }
        console.log(data);
    };

    const handleShowPassword = (e) => {
        e.preventDefault();
        let input=e.currentTarget.previousElementSibling;
        console.log(input);
        if (input.getAttribute('type')==="text"){
            input.setAttribute('type','password');
        }else{
            input.setAttribute('type','text');
        }
    }

    return (
        <div className="wrapper-login">
            <form ref={formulario} action="login">
                <legend>Menber </legend>
                <div>
                    <input type="text" name="username" placeholder="INGRESE NOMBRE DE USUARIO"/>
                </div>
                <div>
                    <input type="password" name="password" placeholder="INGRESE CONTRASEÑA"/>
                    <a href="#" onClick={handleShowPassword}>
                        <i className="fa fa-eye" aria-hidden="true"> </i>
                    </a>
                </div>
            </form>
            <input type="button" onClick={handleSubmitForm} value="Ingresar"/>
        </div>
    );
}

export default FormLogin;