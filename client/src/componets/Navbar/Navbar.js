import './navbar.css';
import logo from '../../images/Premier_Foods-Logo.png';
import { UserContext } from '../../App.js';

import { Link, NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';

const Navbar = () => {

    const { state } = useContext(UserContext);
    const [ openMenu, setMenu ] = useState(false);

    if(state){
        return (
            <nav>
                <Link to='/'>
                    <img className="logo" src={logo} alt="Premier-Foods-Logo"/>
                </Link>

                <div className='menu' onClick={() => {
                    setMenu(!openMenu);
                } } >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={openMenu ? "open" : ""} >
                    <li  className='nav-links'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li  className='nav-links'>
                        <NavLink to='/products'>Products</NavLink>
                    </li>
                    <li  className='nav-links'>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li  className='nav-links'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                    <li  className='nav-links'>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                    <li  className='nav-links'>
                        <NavLink to='/logout'>Logout</NavLink>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return(
            <nav>
                <Link to='/'>
                    <img className="logo" src={logo} alt="Premier-Foods-Logo"/>
                </Link>

                <div className='menu' onClick={() => {
                    setMenu(!openMenu);
                } } >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={openMenu ? "open" : ""} >
                    <li  className='nav-links'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li  className='nav-links'>
                        <NavLink to='/products'>Products</NavLink>
                    </li>
                    <li  className='nav-links'>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li  className='nav-links'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                    <li  className='nav-links'>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                    
                    <li  className='nav-links'>
                        <NavLink to='/signup'>Sign Up</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default Navbar;