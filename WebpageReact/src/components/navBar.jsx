import { Component } from 'react';
import {Link} from "react-router-dom";
import logo from '../images/lockup-red.png';
import "../styles/NavBarStyle.css";
import { MenuItems } from './Menuitems';

class NavBar extends Component {
    state={clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavBarItems">
                <img src={logo} width={100} height={60}/>
                <h1 className="navbar-logo" style={{ fontSize: 35 }}>CSCI4470 OSS</h1>
                  <ul className='nav-menu'>
                    {
                        MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href="/">
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