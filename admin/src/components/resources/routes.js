import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';
import {AuthRoute} from '../resources/authRoute';

const Routes = () =>{
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage}></Route>
                <AuthRoute exact path="/dashboard" component={Dashboard}></AuthRoute>
                {/* <Route exact path="/home" component={Home}/> */}
            </Switch>
        </Router>
    )
}

export default Routes;