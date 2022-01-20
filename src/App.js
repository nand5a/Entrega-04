import React from 'react';
import "./style.css";
import logo from './assets/logo.jpeg';
import flyer from './assets/flyer.jpeg';

import ListaCarros from './Components/ListaCarros/ListaCarros.js';

export default function App() {

  return (

    /*A ideia final do projeto é que o usuário possa navegar entre várias páginas
    de acordo com os botões presentes na header que funcionaria como um menu
    porém o processo de navegação entre elas ainda não foi feito então todas se encontram
    em uma página só */

    /* div geral que engloba todo o conteúdo */
    <div id="Wrapper">

    {/* div que contém a header do site*/}
      <div id = "header">

        <div class="logo">
          <img class="foto" src={logo} alt="imagem" height={50}/>  
        </div>

        <div class="menu">
          <button class="menu item">Início</button>    
          <button class="menu item">Veículos</button>  
          <button class="menu item">Serviços</button>  
          <button class="menu item">Adicionar Veículo</button>            
        </div>    

        <div class="busca">
          <input class="inputText" type="text" placeholder='Buscar por modelo ou marca'/>         
        </div> 
            
      </div>   

      {/* seria a página renderizada inicialmente e ao clicar no botão "Início" da header
      nela o cliente poderia divulgar alguma promoção ou algum carro em lançamento para chamar a atenção dos usuários */}
      <div class="promoção">
        <img class="foto" src={flyer} alt="imagem" height={700}/>
      </div> 

      {/* seria a página renderizada ao clicar no botão "Veículos" da header a a parte de "Adicionar Veículo"
      só poderia ser visualizada e acessada caso o usuário entrasse com um login de "gerenciador" */}
      <div class="lista">
        <ListaCarros/>
      </div> 

      {/* seria a página renderizada ao clicar no botão "Serviços" da header*/}
      <div class="outrosServiços">

        <h1 class="título">NOSSOS SERVIÇOS</h1>

        <div class="fileira1">
          <button class="serviço">REVISÃO</button>    
          <button class="serviço">PEÇAS</button> 
        </div>
        
        <div class="fileira2">
          <button class="serviço">ACESSÓRIOS</button>    
          <button class="serviço">OUTRO SERVIÇO</button>
        </div>
        
      </div>

      {/* footer da página */}
      <div class="footer">
        <div class="bloco sobre">
          <h1 class="titulo">Sobre nós</h1>
          <h2 class="info">História</h2>
          <h2 class="info">Fale conosco</h2>
        </div>

        <div class="bloco redes">
          <h1 class="titulo">Redes Sociais</h1>
          <h2 class="info">Facebook</h2>
          <h2 class="info">Instagram</h2>
          <h2 class="info">Twitter</h2>
        </div>
      </div>
    </div>
  );
}
