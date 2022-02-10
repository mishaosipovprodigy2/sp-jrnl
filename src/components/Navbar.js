import React from 'react';
import around1 from './around1.png';
import './Navbar.css';

export default function Navbar(){
    return(
        <div className='navbar'>
            <div className='navbar'>
        <img className='logo' src={around1} alt='somethin' width='45px' height='45px'/>
        <h2>my travel journal.</h2>
        </div>
        </div>
    )
}