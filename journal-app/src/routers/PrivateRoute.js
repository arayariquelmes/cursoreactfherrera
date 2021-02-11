import React from 'react'
import PropTypes from 'prop-types';
import {Route,Redirect} from 'react-router-dom';
export const PrivateRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {
   
    return (<Route {...rest} component={ (props)=>(isAuthenticated?<Component {...props}></Component>
        : <Redirect to="/auth/login"></Redirect>)

    } ></Route>
    )
}

PrivateRoute.propTypes ={
    isAuthenticated:PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
