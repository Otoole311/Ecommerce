import React from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShopsPage from '../pages/ShopsPage';
import ContactUs from '../pages/ContactUsPage';
import ServicesPage from '../pages/ServicesPage';

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/home" component={HomePage}></Route>
            <Route path="/shops" component={ShopsPage}></Route>
            <Route path="/contactus" component={ContactUs}></Route>
            <Route path="/services" component={ServicesPage}></Route>
        </Switch>
    )
}

export default Routes;