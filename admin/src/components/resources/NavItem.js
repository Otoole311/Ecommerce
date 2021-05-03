import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import StyledNavItem from './styledComponents/StyledNavItem';
//import '../../css/Navbar.css'
/**
 * wrapper for icon in nav bar/navbar icons
 * @param {*} props 
 * @returns - div
 */
const NavIcon = (props) =>{
    return(
        <div className="StyledNavIcon">

        </div>
    )
}

/**
 * Nav item class is a wrapper for an item
 * within a defined navigation bar 
 */
class NavItem extends Component{

    handleClick = () =>{
        const {path, onItemClick} = this.props;
        onItemClick(path);
    }

    render(){
        const {active} = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }

}

export default NavItem;