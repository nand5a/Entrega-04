import React,{useState} from  'react';
import Card from '../../Components/Carro/Carro';
import './style.css';

export default function ListaCarros(){
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

  const oldList=[{
    marca: "CHEVROLET",
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
      <Card  data={item}/>
    </li>
    ));

return (
    <div className='container'>

        <div className='add-container'>

            <h1 class="título"> Adicionar Veículo</h1>

            <div className='input-container'>        
                <input class="inputVeiculos top" type="text" placeholder='Marca:' onChange={(e)=>setMarca(e.currentTarget.value)}/>
                <input class="inputVeiculos" type="text" placeholder='Modelo:' onChange={(e)=>setModelo(e.currentTarget.value)}/>
                <input class="inputVeiculos" type="text" placeholder='Cor:' onChange={(e)=>setCor(e.currentTarget.value)}/>
                <input class="inputVeiculos" type="text" placeholder='Ano de Fabricaçao:' onChange={(e)=>setAno(e.currentTarget.value)}/>
                <input class="inputVeiculos" type="text" placeholder='Motor:' onChange={(e)=>setMotor(e.currentTarget.value)}/>
                <input class="inputVeiculos" type="text" placeholder='Estoque:' onChange={(e)=>setEstoque(e.currentTarget.value)}/>
                <input class="inputVeiculos bottom" type="text" placeholder='Preço:' onChange={(e)=>setPreço(e.currentTarget.value)}/>
            </div>

            <button onClick={handleAddCarro}>
                <div className='button-container'>Adicionar Veículo</div>
            </button> 
        </div> 

        <div>
            <h1 class="título"> Veículos</h1>
            <ul class="lista">
                {renderList}
            </ul>
        </div>
        
      </div> 
    );
}

