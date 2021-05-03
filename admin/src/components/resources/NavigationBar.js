import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';// imports for later: Form,FormControl
import Styles from './styledComponents/navStyle';
import {authenticationService} from  '../../services/authentication';

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

        {/*  <Form className="form-center">
            <FormControl type="text" placeholder="Search" className="" />
            </Form> */}

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {/* <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>  */}
                    <Nav.Item><Nav.Link href="/" onClick={authenticationService.logout}>Logout</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)