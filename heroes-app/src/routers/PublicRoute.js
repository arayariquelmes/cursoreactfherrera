import React from 'react'
import PropTypes from 'prop-types';
import {Route,Redirect} from 'react-router-dom';
export const PublicRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {
    return (<Route {...rest} component={ (props)=>(!isAuthenticated?<Component {...props}></Component>
        : <Redirect to="/"></Redirect>)

    } ></Route>
    )
}

PublicRoute.propTypes ={
    isAuthenticated:PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
