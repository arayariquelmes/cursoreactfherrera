import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {useDispatch,useSelector} from 'react-redux';
import { login, startGoogleLogin, startLoginWithEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
export const LoginScreen = () => {

    const dispatch = useDispatch();
    const {msgError,loading} = useSelector(state => state.ui);
    const [formValues,handleInputChange]= useForm({
        email:'seba@gmail.com',
        password:'12345'
    })
    const {email,password} = formValues;
    const handleLogin = (e)=>{
        e.preventDefault();
        if(email.trim().length == 0){
            dispatch(setError("Debe ingresar correo"));
        }else if(password.trim().length == 0){
            dispatch(setError("Debe ingresar clave"));
        }else{
            dispatch(removeError());
            dispatch(startLoginWithEmailPassword(email,password));
        }
    }
    const handleGoogleLogin = ()=>{
        dispatch(startGoogleLogin());
    }
    return (
        <>
        <h3 className="auth__title">Login</h3>

        <form onSubmit={handleLogin}>
            {msgError && <div className="auth__alert-error">
                {msgError}
            </div>}
            <input type="text" placeholder="email"
            className="auth__input"
            onChange={handleInputChange}
            value={email}
            name="email"></input>
            <input type="password"
            placeholder="Password"
            className="auth__input"
            onChange={handleInputChange}
            value={password}
            name="password"></input>
            <button className="btn btn-primary btn-block" disabled={loading} type="submit">
                Login
            </button>

            <div className="auth__social-networks">
                <p>Login with social networkds</p>
                <div 
                    className="google-btn"
                    onClick={handleGoogleLogin}
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
            </div>
            <Link className="link" to="/auth/register">
                Create new account
            </Link>
        </form>
        </>
    )
}
