import React from "react";
import Carro from "../Carro/Carro"

export default function ListaCarros({carro}){
    return carro.map((carro) => {
        return < Carro carro ={ carro }/>;
    })
}

