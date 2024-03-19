import React from "react";
import Header from "../../components/header/header";
import './style.css';
import Video from "../../components/video/video";
import Cards from "../../components/cads/cards";
import Footer from "../../components/footer/footer";

function Home() {

    return (
      <>
        <Header/>
        <div id="banner"></div>
        <div className="trailer-container">

          <div className="content">
            <Video/>
            <div id="sinopse">
              <p className="description">
                    Após dois anos espreitando as ruas como Batman,
                    Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City.
                    Com poucos aliados confiáveis, o vigilante solitário se estabelece 
                    como a personificação da vingança para a população.
              </p>
              <button className="button" onClick={ () => alert('Esgotado! entre em contato')}>Comprar ingressos</button>
            </div>
          </div>
        </div>

        <Cards/>
        <Footer/>
      </>
    );
  }
  
  export default Home;