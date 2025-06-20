import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='space-x-4'>
                <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600" : "text-black hover:font-bold"}>Home</NavLink> 
                <NavLink to="/about" className={({isActive}) => isActive ? "text-blue-600" : "text-black hover:font-bold"}>About</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? "text-blue-600" : "text-black hover:font-bold"}>Contact</NavLink>
            </nav>
            <hr className='my-4' />

        </div>
    );
}

export default Header;
