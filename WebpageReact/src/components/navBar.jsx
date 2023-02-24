import { Component } from 'react';
import logo from '../images/logo.svg';
import "../styles/NavBarStyle.css";

class NavBar extends Component {
    state={clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
        <>
            <nav>
                <a href="index.html">
                <img src={logo} width={100} height={100} />
                </a>
            
                <div>
                    <ul id="navbar">
                        <li><a className="active" href="index.html">Home</a></li>
                        <li><a href="index.html">Syllabus</a></li>
                        <li><a href="index.html">Modules</a></li>
                        <li><a href="index.html">Discussion forum</a></li>
                    </ul>
                </div>
            </nav>
        </>
        )
    }
}

export default NavBar;