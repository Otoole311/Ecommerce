import React, {Component} from 'react';
import NavItem from './NavItem';
import { withRouter} from 'react-router-dom';
import '../../css/resources/Sidebar.css'



class SideNav extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: '/dashboard/home',
                    name: 'Home',
                    css: 'fa fa-fw fa-home',
                    key: 1
                },

                {
                    path: '/dashboard/shops',
                    name: "Shop",
                    css: 'fas fa-cart-arrow-down',
                    key: 2
                }
            ]
        }       
    }

    /**
     * 
     * @param {String} path - destination path
     */
    onItemClick = (path) =>{
        this.setState({activePath: path});
    }
    
    render(){
        const {items, activePath} = this.state;
        return(
            <div className="StyledSideNav">
                {items.map((item) =>{
                    return(
                        <NavItem path={item.path} name={item.name} css={item.css}
                        onItemClick={this.onItemClick} active={item.path === activePath} key={item.key}
                        />
                    )
                })}
            </div>

        );
    }
}

const RouterSideNav = withRouter(SideNav);

class Sidebar extends Component{
    render(){
        return(
            <RouterSideNav>

            </RouterSideNav>
        );
    }
}

export default Sidebar;
