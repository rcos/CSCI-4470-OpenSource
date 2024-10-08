import { Component } from 'react';
import logo from '../assets/lockup-red.png';
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
                <img src={logo} width={120} height={60}/>
                <h1 className="navbar-logo"> Open Source Software </h1>

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
                                <a className={item.cName} href={item.url}>
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