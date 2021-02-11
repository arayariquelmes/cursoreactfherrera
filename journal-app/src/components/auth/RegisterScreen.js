import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from '../../hooks/useForm';
import validator from 'validator';
import {useDispatch,useSelector} from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);
    const [formValues, handleInputChange] = useForm({
        name:'Seba',
        email:'seba@gmail.com',
        password:'123456',
        confirm:'123456'
    });
    const {name,
        email,
        password,
        confirm} = formValues;

    const handleRegister = (e)=>{
        e.preventDefault();
        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email,password,name));
        }
    }
    const isFormValid = ()=>{
        if(name.trim().length === 0){
            dispatch(setError("name es required"));
            return false;
            
        }else if(!validator.isEmail(email.trim())){
            dispatch(setError("Email invalido"));
            return false;
        }else if (password !== confirm || password.length < 5){
            dispatch(setError("error passwrod"));
            return false;
        }
        dispatch(removeError());
        return true;
    };
    return (
        <>
        <h3 className="auth__title">Login</h3>
        <form onSubmit={handleRegister}>
            {msgError && <div className="auth__alert-error">
                {msgError}
            </div>}
        <input type="text" placeholder="Name"
            className="auth__input"
            value={name}
            onChange={handleInputChange}
            name="name"></input>
            <input type="text" placeholder="email"
            className="auth__input"
            value={email}
            onChange={handleInputChange}
            name="email"></input>
            <input type="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
            className="auth__input"
            name="password"></input>
            <input type="password"
            placeholder="Confirm"
            className="auth__input"
            value={confirm}
            onChange={handleInputChange}
            name="confirm"></input>
            <button className="btn btn-primary btn-block mb-5" type="submit">
                Register
            </button>

     
            <Link className="link mt-5" to="/auth/login">
                Already registered?
            </Link>
        </form>
        </>
    )
}
