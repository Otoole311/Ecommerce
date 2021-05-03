import React from 'react';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";  
import { NavigationBar } from '../resources/NavigationBar';
import Sidebar from '../resources/Sidebar';
import {Home} from '../resources/home';
import Shops from '../resources/shopData';

const dashboard = (props) =>{
    return(
        <React.Fragment>
            <Router>
                <NavigationBar />
                <Sidebar/>
                {/* <Home/> */}
                <Switch>
                    <Route exact path="/dashboard/home" component={Home}/>
                    <Route exact path="/dashboard/shops" component={Shops}/>
                        {/* <Route exact path="/VideoEdit" component={VideoEdit}/> */}
                </Switch> 
            </Router>
        </React.Fragment>
    );
}

export default dashboard;