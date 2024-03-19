import React from "react";
import Trailer from '../../assets/trailer.mp4';
import './style.css';

function Video(){
    return(
        <div className="content">

            <video controls className="trailer">
                <source src={Trailer}/>
                Seu navegador não possui suporte para vídeos
            </video>
        </div>
    )
}

export default Video;