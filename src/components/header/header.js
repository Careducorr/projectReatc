import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Logo from '../../assets/logo.jpg'

function Header(){

    return(

        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>

                    <Link to='/contato'>
                        <li>contato</li>
                    </Link>

                    <Link to='/fotos'>
                        <li>fotos</li>
                    </Link>
                    
                    <Link to='/comentarios'>
                        <li>comentarios</li>
                    </Link>

                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    nome: PropTypes.string
}


export default Header;