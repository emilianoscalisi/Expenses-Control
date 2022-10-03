import React from "react";

import CardHeader from "../cards/CardHeader";
import TotalesItem from "./TotalesItem";
import DolarItem from "./DolarItem";
import Seccion from "./Seccion";
import Subtotales from "./Subtotales";
import WhatItem from "./WhatItem";

const Header =(props)=>{ 

    
    const itemSelectedHandler = (selected) => {
      props.onSelected(selected);
      
    }

    const seccionSelectedHandler = (selected) => {
        props.onSeccion(selected);
        
      }
    
    return(
        
        <CardHeader className="headerstyle">
        
            <WhatItem onItemSelected={itemSelectedHandler} />
            <Subtotales/>
            <Seccion onSeccionSelected={seccionSelectedHandler}/>
            <TotalesItem totales={props.totales}/>
            <DolarItem/>                        
        
        </CardHeader>       
    );
}

export default Header;