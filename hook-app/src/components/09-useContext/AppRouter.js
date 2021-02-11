import React from 'react'
import {AboutScreen} from './AboutScreen';
import {LoginScreen} from './LoginScreen';
import {HomeScreen} from './HomeScreen';
import{ BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import { NavBar } from './NavBar';
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar></NavBar>
                <Switch>
                    <Route exact path="/about" component={AboutScreen} ></Route>
                    <Route exact path="/login" component={LoginScreen} ></Route>
                    <Route exact path="/" component={HomeScreen} ></Route>
                    <Redirect to="/"></Redirect>
                </Switch>
            </div>
        </Router>
    )
}
