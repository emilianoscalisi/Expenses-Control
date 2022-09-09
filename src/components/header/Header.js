import React from "react";

import CardHeader from "../cards/CardHeader";
import TotalesItem from "./TotalesItem";
import DolarItem from "./DolarItem";
import Seccion from "./Seccion";
import Subtotales from "./Subtotales";

const Header =()=>{ 
    
    return(
        
        <CardHeader className="headerstyle">

            <Subtotales/>
            <Seccion/>
            <TotalesItem/>
            <DolarItem/>                        
        
        </CardHeader>       
    );
}

export default Header;