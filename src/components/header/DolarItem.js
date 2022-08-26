import React, { useState } from "react";
import "./DolarItem.css";

const DolarItem = (props) => {

   const totalPesos = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'USD' }).format(138.75*1.75);

   const [selected, setSelectd]=useState(totalPesos);   
   const [monedaSelected, setMonedaSelectd]=useState("U$D");   

    const monedaSelectedHandler = (event) => {               
        
        if(event.target.value === "Dolar"){
            const totalPesos = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'USD' }).format(138.75*1.75);
            setSelectd (totalPesos);
            setMonedaSelectd("U$D");
        }
        if(event.target.value === "Euro"){
            const totalPesos = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'USD' }).format(139.5*1.75);
            setSelectd (totalPesos);
            setMonedaSelectd("€");
        }
        

    }
    return (

        <div className="dolar-content">
            <div className="title-dolar-item">
                <label> Tasa de cambio</label>
            </div>
            <div>
                <label className="label-amount-tasa"> {monedaSelected} 1 = {selected}</label>

                <select className="selected-rate"  onChange={monedaSelectedHandler}>
                    <option value='Dolar'>Dolar</option>
                    <option value='Euro'>Euro</option>
                </select>

            </div>
        </div>
           
    );
}

export default DolarItem;