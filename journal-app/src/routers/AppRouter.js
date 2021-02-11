import React, { useEffect,useState } from 'react'
import {  BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import {firebase} from '../firebase/firebase-config';
import {useDispatch} from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import {  startLoadingNotes } from '../actions/notes';
export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user)=>{
            if(user?.uid){
                dispatch(login(user.uid,user.displayName));
                dispatch(startLoadingNotes(user.uid));
                setLoggedIn(true);
            }else {
                setLoggedIn(false);
            }
            setChecking(false);
        });
        
    }, [dispatch,setChecking])

    if(checking){
        return <h1>Espere...</h1>;
    }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/auth" isAuthenticated={isLoggedIn} component={AuthRouter}></PublicRoute>
                    <PrivateRoute isAuthenticated={isLoggedIn} exact path="/" component={JournalScreen}></PrivateRoute>
                    <Redirect to="/auth/login"></Redirect>
                </Switch>
            </div>
        </Router>
    )
}
