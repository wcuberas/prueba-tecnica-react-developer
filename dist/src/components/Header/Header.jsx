import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <Link to={`/`} >
                    <h2>DEMO Streaming</h2>
                </Link>
            </div>
            <div className="header__right">
                <div className="header__right-login">Log in</div>
                <div className="header__right-free-trial">
                    <button className='btn' >Start your free trial</button>
                </div>
            </div>
        </div>
    );
}

export default Header
