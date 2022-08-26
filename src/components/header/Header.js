import React from "react";
import "./Header.css"
import CardHeader from "../cards/CardHeader";
import TotalesItem from "./TotalesItem";
import DolarItem from "./DolarItem";
import Seccion from "./Seccion";
import Subtotales from "./Subtotales";

const Header =()=>{ 
    
    return(
        
        <CardHeader>

            <Subtotales/>
            <Seccion/>
            <TotalesItem/>
            <DolarItem/>                        
        
        </CardHeader>       
    );
}

export default Header;