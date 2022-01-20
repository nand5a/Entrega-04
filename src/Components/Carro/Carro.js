import React from 'react';
import './style.css'

export default function Card({data}){
    return (
        <div className='card-container'>
            <h3>
            <strong className='card-title'>Marca</strong>: {data.marca}
            </h3>
            <h3>
            <strong className='card-title'>Modelo</strong>: {data.modelo}
            </h3>
            <h3>
            <strong className='card-title'>Cor</strong>: {data.cor}
            </h3>
            <h3>
            <strong className='card-title'>Ano</strong>: {data.ano}
            </h3>
            <h3>
            <strong className='card-title'>Motor</strong>: {data.motor}
            </h3>
            <h3>
            <strong className='card-title'>Estoque</strong>: {data.estoque}
            </h3>
            <h3>
            <strong className='card-title'>Preço</strong>: {data.preço}
            </h3>
      </div>
        );
}
