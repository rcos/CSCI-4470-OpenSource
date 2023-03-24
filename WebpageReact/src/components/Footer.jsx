import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">    
            <div className='footLeft'> 
                We love feedback! Please visit our { }
                <a href="https://github.com/rcos/CSCI-4470-OpenSource" style={{ color: 'rgb(198,83,83)' }}>  
                    Github Repository
                    <i class="fab fa-github"/>
                </a> 
            </div>
            <div className='footRight'>  {`OSS © ${year}`}   </div>
        </div>
    );
  };
  

export default Footer;