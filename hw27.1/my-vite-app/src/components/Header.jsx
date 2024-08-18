import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../components/ThemeSwitcher.jsx';

const Header = () => {
    return (
        <header >
            {/* <nav>
                <ul class="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <ThemeSwitcher />
                </ul>
            </nav> */}            
            <nav className="navbar navbar-expand-lg bg-body-tertiary">    
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">                      
                            <Link to="/" 
                            className="nav-link active" aria-current="page" href="#" >
                                Home</Link>                           
                            </li>
                            <li className="nav-item">                            
                            <Link to="/contacts" 
                            className="nav-link active" aria-current="page" href="#">
                                Contacts</Link>                          
                            </li>
                            <li className="nav-item">                            
                            <Link to="/about" 
                            className="nav-link active" aria-current="page" href="#">
                                About Me</Link>                         
                            </li>
                            <ThemeSwitcher />
                        </ul>  
                    </div>                 
                </div>     
            </nav>
        </header>
    );
};

export default Header;
