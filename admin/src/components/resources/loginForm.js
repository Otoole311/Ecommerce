import React, { Component } from 'react';
import { withRouter } from 'react-router';
import '../../css/resources/LoginForm.css'
import {authenticationService} from '../../services/authentication';
//import {history} from '../../helpers/helpers';

class LoginForm extends Component{
    constructor(props){
        super(props)

        if(authenticationService.currentUserValue){
            this.props.history.push('/dashboard');
        }

        this.state={
            email: null,
            password: null
        }

        this.handleChange = this.handleChange.bind(this); //monitor change in input fields and update the state fields
        this.handleSubmit = this.handleSubmit.bind(this); //submit the form data to api.
    }

    handleChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        //alert('helo')
        authenticationService.login(this.state.email,this.state.password)
        .then(
            user =>{
                const {from} = this.props.location.state || {from: {pathname: "/dashboard"}};
                this.props.history.push(from);
                //set response message here
            }
        )    
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <center><h3>Admin Login</h3></center>
                    <div className="form-group">
                        <label>Username</label>
                        <input name="email" className="form-control" placeholder="John@gmail.com" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" type="password" className="form-control" onChange={this.handleChange} placeholder="******" />
                    </div>

                    <div>
                        <input  className="btn btn-primary btn-block" type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);