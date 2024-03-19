import React from "react";
import './style.css'
import Logo from '../../assets/logo.jpg'
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaGithub} from "react-icons/fa";

function Footer(){

    return(
        <>
        <footer>
            <img id="logo-footer" src={Logo}/>
            <span>Desenvolvido por: Carlos Correia</span>

            <div id="icons-footer">

                <a href="https://www.instagram.com/carlos.e.correia/" target="_blank">
                   <FaInstagram className={'icon'}/>
                </a>

                <a href="https://www.facebook.com/Carloseduardo34567" target="_blank">
                    <FaFacebookF className={'icon'}/>
                </a>

                <a href="https://github.com/Careducorr" target="_blank">
                    <FaGithub className={'icon'}/>
                </a>

                <a href="https://www.linkedin.com/in/carlos-eduardo-correia-9bab16277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                    <FaLinkedinIn className={'icon'}/>
                </a>

            </div>
        </footer>

        
        </>
        
    )
}

export default Footer;