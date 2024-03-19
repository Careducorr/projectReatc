import React from "react";
import './style.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Fotos(){
    return(
        <>
            <Header/>
            <div id="texto-fotos-container">
                <div id="fotos-span">
                Algumas fotos destaques.
                </div>
            </div>

            <div id="photo-container">

                <a href="https://cdn.kinocheck.com/i/ovo6ge0ccj.jpg" target="blank">
                    <div className="card photo1"></div>
                </a>

                <a target="blank" href="https://townsquare.media/site/442/files/2018/01/batman-returns.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89">
                    <div className="card photo2"></div>
                </a>

                <a target="blank" href="https://hips.hearstapps.com/hmg-prod/images/batman-review-1646354817.jpg">
                    <div className="card photo3"></div>
                </a>

                <a target="blank" href="https://cinepop.com.br/wp-content/uploads/2020/06/the-batman-1.jpg">
                    <div className="card photo4"></div>
                </a>

                <a target="blank" href="https://www.denofgeek.com/wp-content/uploads/2022/03/Robert-Pattinson-and-Zoe-Kravitz-as-The-Batman-and-Catwoman.jpeg?resize=768%2C432">
                    <div className="card photo5"></div>
                </a>

                <a target="blank" href="https://blogger.googleusercontent.com/img/a/AVvXsEh5_Y45Y42JbTbf5jjVcvkSrPTak11b53pLULzZKuU7ALiy8EewBAbMAE-idsWypy2SKRYDPSRyRNHM2qmiVsk1aj8YyWYcxFAbfCAvt2ryrAqisMCj-geq_uqUWXttK7W5FfQ0hPVBW1hDqXnUoo-8WLJ0oxJGRrC4wQRcNipB53vsCLj_94a42Vee=w640-h338">
                    <div className="card photo6"></div>
                </a>

            </div>

            <Footer/>

        </>
    )
}

export default Fotos;
