import React, { useState } from "react";
import "./DolarItem.css";
import dolarHoy from "../../APIs/dolarHoy";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
const DolarItem = (props) => {
    
    const [valorPesos, setValorPesos]=useState("$***.**");   

    const  callBackDolar =(data)=>{
        const valorDolarHoy = data[0].casa.venta;
        const dolar =  parseFloat(valorDolarHoy.replace(',', '.'));            
        const pesos = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'USD' }).format(dolar*1.75);
        setValorPesos(pesos) 
      }
      dolarHoy(callBackDolar); 
   
    return (

        <div className="dolar-content">
            <div className="title-dolar-item">
                <label> Tasa de cambio</label>
            </div>
            <div>
                <h6 className="label-amount-tasa"> U$D 1 = {valorPesos}</h6>

                {valorPesos === "$***.**" ? <h6 className="sc">Sin conexion<CloseIcon/></h6>:
                <h6 className="cc">Actualizado<CheckIcon/></h6>}

                
                

            </div>
        </div>
           
    );
}

export default DolarItem;