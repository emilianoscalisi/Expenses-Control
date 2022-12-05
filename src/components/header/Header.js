import React from "react";

import CardHeader from "../cards/CardHeader";
import TotalesItem from "./TotalesItem";
import DolarItem from "./DolarItem";
import Seccion from "./Seccion";
import Subtotales from "./Subtotales";
import WhatItem from "./WhatItem";
import Graficos from "./Graficos";

const Header =(props)=>{ 

  
    const itemSelectedHandler = (selected) => {
      props.onSelected(selected);      
      
    }

    const seccionSelectedHandler = (selected) => {
        props.onSeccion(selected);
        
      }

      const getValorDolar=(valorDolar)=>{
        props.onValorDolar (valorDolar);

      }


    
    return(
        
        <CardHeader className="headerstyle">
            <Graficos totales={props.totales}/>
            <WhatItem onItemSelected={itemSelectedHandler} onSeccionSelected={seccionSelectedHandler}/>
            <Subtotales data={props.data}/>
            <Seccion onSeccionSelected={seccionSelectedHandler} itemSelected={props.item}/>
            <TotalesItem totales={props.totales}/>
            <DolarItem onValorDolar={getValorDolar}/>                        
        
        </CardHeader>       
    );
}

export default Header;