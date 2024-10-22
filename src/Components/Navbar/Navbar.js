import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false); // Track menu visibility

    const toggleMenu = () => {
        setShowMenu(!showMenu); // Toggle menu visibility
    };

    return (
        <div className='nav'>
            <div className='nav-container'>
                <div className='navbar'>
                    <div className='logo'>
                        <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1728971234/Frame_1707479660_dyidcz.jpg' alt='logo' />
                        <Link to="/">Devlender</Link>
                    </div>

                    <nav>
                        <li><Link to="/">Features</Link></li>
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/">Resources</Link></li>
                        <li><Link to="/">Pricing</Link></li>
                    </nav>

                    <div className='nav-btn'>
                        <button>
                            <Link to="/">Get in touch</Link>
                        </button>
                    </div>

                    <div className='menu-toggle' onClick={toggleMenu}>
                        <div className={showMenu ? "hamBox hamBoxOpen" : "hamBox"}>
                            <span className={showMenu ? "lineTop spin" : "lineTop"}></span>
                            <span className={showMenu ? "lineBottom spin" : "lineBottom"}></span>
                        </div>
                    </div>

                    {showMenu && (
                        <div className="fixed-component">
                            <div className='menu-con'>
                                <p>MENU</p>
                                <Link to="/">Features</Link>
                                <Link to="/">Products</Link>
                                <Link to="/">Resources</Link>
                                <Link to="/">Pricing</Link>
                                <button>Get Started</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
