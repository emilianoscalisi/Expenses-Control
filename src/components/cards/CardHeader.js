import React from "react";
import "./CardHeader.css";


const CardHeader =(props)=>{

    const cls = "card " + props.className;
       
    return(
        <div className={cls}>
            {props.children}
        </div>
    );
}

export default CardHeader;