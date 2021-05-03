import React, { Component } from 'react';
import LoginForm from '../resources/loginForm';
import PageNav from '../resources/landingPageNav';
import '../../css/pages/LoginPage.css'
import {history} from '../../helpers/helpers';
import {authenticationService} from '../../services/authentication';

class LoginPage extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            currentUser:null
        };
    }

    componentDidMount(){
        authenticationService.currentUser.subscribe(x => this.setState({currentUser: x}));
    }
    
    logout() {
        authenticationService.logout();
        history.push('/login');
    }
    render(){
        return(
            <div className="">
                <PageNav/>
                <LoginForm/>
            </div>
        );
    }
}

export default LoginPage;