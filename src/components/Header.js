import React from 'react'
import './Header.css'
import logo from './Images/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
export default function Header() {
    return (
        <div className='header'>
            <div className='container'>
            <div className='logo'>
            <img src={logo} alt="logo"/>
            <p>Menoufia University</p>
             </div>

            <div className='unorder'>
            <ul className="mainul">
            <li><a href="#">Adminstration</a></li>
            <li><a href="#">About</a></li> 
            <li><a href="#">Students</a></li> 
            <li><a href="#">Media</a></li>
            <li><a href="#">Home</a></li>
            </ul>
            <div className='bars'>
            <FontAwesomeIcon  icon={faBars}></FontAwesomeIcon>
            <div className='drop'>
            <ul>
            <li><a href="#">Adminstration</a></li>
            <li><a href="#">About</a></li> 
            <li><a href="#">Students</a></li> 
            <li><a href="#">Media</a></li>
            <li><a href="#">Home</a></li>
            </ul>
            </div>

            </div>
            </div>
            </div>
        </div>
    );
}
