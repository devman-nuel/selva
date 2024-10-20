import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  './Navbar.css'




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
                  <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1728971234/Frame_1707479660_dyidcz.jpg' alt='logo'></img>
                    <Link to="/">Devlender</Link>
                </div>

                <nav>
                  <li>Features</li>
                  <li>Products</li>
                  <li>Resources</li>
                  <li>Pricing</li>
                </nav>

               <div className='nav-btn'>
                <button>
                  <a href="htt" target="_blank" rel="noopener noreferrer">Get in touch</a>        
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
                <a href="htt" target="_blank" rel="noopener noreferrer">Features</a>
                <a href="htt" target="_blank" rel="noopener noreferrer">Products</a>
                <a href="htt" target="_blank" rel="noopener noreferrer">Resources</a> 
                <a href="htt" target="_blank" rel="noopener noreferrer">Pricing</a> 
                <button>Get Started</button>
                </div>
            </div>
            )}       
            </div>
           </div> 
        </div>       
    )
  }


export default Navbar