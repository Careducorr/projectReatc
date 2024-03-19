import React from "react";
import Header from "../../components/header/header";
import './style.css';
import Footer from "../../components/footer/footer";

function Comentarios() {
    return (
      <>
        <Header/>
        <div class="container">
          <div class="form-box">
              <p class="title">Deixe um Comentario</p>
              <form id="form">
                <textarea name="messege" placeholder="Digite seu comentario"></textarea>
                  
                <button type="submit">Enviar Comentario</button>
              </form>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
  
  export default Comentarios;