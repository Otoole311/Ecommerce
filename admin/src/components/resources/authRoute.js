import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {authenticationService} from '../../services/authentication';

export const AuthRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if(!currentUser){
            //user not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/',state: {from: props.location }}} />
        }
        return <Component {...props} />
    }} />
)