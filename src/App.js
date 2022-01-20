import './App.css';
import "./style.css";
import logo from './assets/logo.jpeg';
import React, {useState, useRef} from "react";
import ListaCarros from './Components/ListaCarros/ListaCarros.js';

function App() {
  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState();
  const [cor, setCor] = useState();
  const [ano, setAno] = useState();
  const [motor, setMotor] = useState();
  const [estoque, setEstoque] = useState();
  const [preço, setPreço] = useState();

  const handleAddCarro=()=>{
    const newItem={id:1, marca:marca, modelo:modelo, cor:cor, ano:ano, motor:motor, estoque:estoque, preço:preço}
    const newList=list.concat(newItem)
    setList(newList) 
  }

  const oldList=[
    {marca: "CHEVROLET",
    modelo: "CORVETTE",
    cor: "VERMELHO",
    ano: 2021,
    motor: "V8 LT6 5-5I",
    estoque: 2,
    preço: "R$ 9.999,99"
  }
  ];

  const[list, setList]=useState(oldList)

  const renderList = list.map((item,index)=>(
    <li key={index}>
      <div className='card-container'>
        <h3>
          <strong className='card-title'>Marca</strong>: {item.marca}
        </h3>
        <h3>
          <strong className='card-title'>Modelo</strong>: {item.modelo}
        </h3>
        <h3>
          <strong className='card-title'>Cor</strong>: {item.cor}
        </h3>
        <h3>
          <strong className='card-title'>Ano</strong>: {item.ano}
        </h3>
        <h3>
          <strong className='card-title'>Motor</strong>: {item.motor}
        </h3>
        <h3>
          <strong className='card-title'>Estoque</strong>: {item.estoque}
        </h3>
        <h3>
          <strong className='card-title'>Preço</strong>: {item.preço}
        </h3>
      </div>
      
    </li>
    ));

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
      
        <input class="inputVeiculos" type="text" placeholder='Marca' onChange={(e)=>setMarca(e.currentTarget.value)}/>
        <input class="inputVeiculos" type="text" placeholder='Modelo' onChange={(e)=>setModelo(e.currentTarget.value)}/>
        <input class="inputVeiculos" type="text" placeholder='Cor' onChange={(e)=>setCor(e.currentTarget.value)}/>
        <input class="inputVeiculos" type="text" placeholder='Ano de Fabricaçao' onChange={(e)=>setAno(e.currentTarget.value)}/>
        <input class="inputVeiculos" type="text" placeholder='Motor' onChange={(e)=>setMotor(e.currentTarget.value)}/>
        <input class="inputVeiculos" type="text" placeholder='Estoque' onChange={(e)=>setEstoque(e.currentTarget.value)}/>
        <input class="inputVeiculos" type="text" placeholder='Preço' onChange={(e)=>setPreço(e.currentTarget.value)}/>

        <button onClick={handleAddCarro}> Adicionar Veículo</button>

        
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
