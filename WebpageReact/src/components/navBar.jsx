import { Component } from 'react';
import {Link} from "react-router-dom";
import logo from '../images/lockup-red.png';
import "../styles/NavBarStyle.css";
import { MenuItems } from './Menuitems';

class NavBar extends Component {
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavBarItems">
                <img src={logo} width={140} height={60}/>
                <h1 className="navbar-logo"> CSCI4470 Open Source Software</h1>

                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} 
                    onClick={this.handleClick}>
                    </i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {
                    MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href="/">
                                    <i className={item.icon}></i>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })
                }
                </ul>
            </nav>
        )
    }
}

export default NavBar;