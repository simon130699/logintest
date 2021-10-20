import React, { useState } from 'react';
import './Login.css';
import Label from './components/label/Label';
import Title from './components/title/title';
import Input from './components/input/Input';
import { FaUser } from "react-icons/fa";

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, setHasError] = useState(false);

    function handleChange (name, value){
        if (name === 'usuario'){
        setUser(value)
        } else {
        if (value.length < 6){
            setPasswordError(true)
        }else{
            setPasswordError(false)
            setPassword(value)
        }
        
        }
    }
    function ifMatch(param){ 
        if(param.user.length > 0 && param.password.length > 0 ){
            if (param.user === 'simon99' && param.password === '123456'){
                const {user, password} = param;
                let ac = { user , password };
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            
        }else{
            setIsLogin(false);
            setHasError(true);
        }
        }else{
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit(){
        let account = {user, password}
        if(account){
            ifMatch(account);
            console.log('account', account);
        }
    }
    

    return (
        <div className="padre-container">
        <div className="login-container">
           <Title text='Bienvenido!' />
           
           {hasError &&
            <label className="label-alert"> Su contraseña o usuario son incorrectos </label>
            }
           
            <Input
             
            
            attribute ={{
                id: 'usuario', 
                name: 'usuario',
                type: 'text',
                placeholder: 'usuario'
            }}
            
            handleChange={handleChange}
            />
            
            <Input 
           
            
            attribute={{
                
                id: 'contraseña', 
                name: 'contraseña',
                type: 'password',
                placeholder: 'contraseña'
            }}
            handleChange={handleChange}
            param={passwordError}
            />

            {passwordError && <label className="label-error">
                Contraseña invalida o incompleta 
            </label>}
            
            <button onClick={(e) => handleSubmit()}>
                ingresar
            </button>
            

        </div>
        </div>
    )
}

export default Login;