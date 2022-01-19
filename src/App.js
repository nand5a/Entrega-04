import './App.css';
import "./style.css";
import logo from './assets/logo.jpeg';
import React, {useState, useRef} from "react";
import ListaCarros from './Components/ListaCarros/ListaCarros.js';

function App() {
  const [carro, setCarro] = useState([]);
  const carroInfoRef = useRef();

  function handleAddCarro() {
    const infoCarro = carroInfoRef.current.value
    if (infoCarro === "") return; 
    setCarro((carrosAnteriores) => {
      return [...carrosAnteriores, {id: 1, infoCarro: infoCarro}]
    });
    carroInfoRef.current.value = null;
  }

  return (
    <div id="Wrapper">

      <div id = "header">

        <div class="logo">
          <img class="foto" src={logo} alt="imagem" height={60}/>  
        </div>

        <div class="menu">
          <button class="menu item">Início</button>    
          <button class="menu item">Veículos</button>  
          <button class="menu item">Serviços</button>  
          <button class="menu item">Adicionar Carro</button>            
        </div>    

        <div class="busca">
          <input class="inputText" type="text" placeholder='Buscar por modelo ou marca'/>         
        </div> 
            
      </div>    

      <div class="main">
      
        <input class="inputVeiculos" type="text" placeholder='Marca' ref={carroInfoRef}/>
        <input class="inputVeiculos" type="text" placeholder='Modelo'/>
        <input class="inputVeiculos" type="text" placeholder='Cor'/>
        <input class="inputVeiculos" type="text" placeholder='Ano de Fabricaçao'/>
        <input class="inputVeiculos" type="text" placeholder='Motor'/>
        <input class="inputVeiculos" type="text" placeholder='Estoque'/>
        <input class="inputVeiculos" type="text" placeholder='Preço'/>

        <button onClick={handleAddCarro}> Adicionar Veículo</button>

        <ListaCarros carro={carro}/>
      </div>  

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

export default App;
