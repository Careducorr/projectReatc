import React, { useContext } from "react";
import Header from '../../components/header/header';
import './style.css'
import Footer from "../../components/footer/footer";
import { UserContext } from "../../contexts/userContext";

function Contato() {

  const {send, setSend} = useContext(UserContext)

  return (
      <>
        <Header/>
        <div id="texto-container">
          <div id="texto-contato">
            Para entrar em contato conosco,
            preencha o formulário abaixo e em seguida escreva
            sua mensagem, responderemos o mais breve possível! 
          </div>
        </div>

        <div id="texto-container-responsive">
            <div id="texto-contato">
              Para entrar em contato conosco,
              preencha o formulário abaixo e em seguida escreva
              sua mensagem, responderemos o mais breve possível! 
            </div>
          </div>

        <form>
          <label for="nome">Nome</label>
          <input id="nome" type="text" name="Nome" placeholder="Digite seu nome" />

          <label for="number">Telefone</label>
          <input id="number" type="number" name="Telefone" placeholder="DDD+ Número"/>

          <label for="email">E-mail</label>
          <input id="email" type="email" name="email" placeholder="Digite seu E-mail"/>

          <label for="message">Digite sua mensagem</label>
          <textarea id="message" name="mensagem" cols="25" rows="5"></textarea>

          <button onClick={ () => setSend(!send)}>{send ? 'Enviado' : 'Enviar'}</button>

          <div style={{color: 'aliceblue'}}>
            {send ? 'Dados enviados' : 'Envie seus dados'}
        </div>
        </form>
        <Footer/>
      </>
  );
}
  
  export default Contato;