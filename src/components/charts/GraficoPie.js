import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// import "./GraficoPie.css"


const GraficoPie = (props) => {

    const mano = props.totales.filter(eachExpense => eachExpense.seccion === "Mano de Obra");
    const mat = props.totales.filter(eachExpense => eachExpense.seccion === "Materiales");

    const totalDolarMano= mano.reduce((acumulador, actual) => actual.amountDolar + acumulador, 0);
    const totalDolarMat= mat.reduce((acumulador, actual) => actual.amountDolar + acumulador, 0);

    const dolaresMano = parseFloat((totalDolarMano).toFixed(2));
    const dolaresMat = parseFloat((totalDolarMat).toFixed(2)); 
   
    const options = {
        title: {
            text: 'Total en Dolares (U$D)'
        },
        accessibility:{
            enabled:false
        },
        series: [{
            type: 'pie',
            allowPointSelect: true,
            keys: ['name', 'y', 'selected', 'sliced'],
            colors: ['#FFC107','#71a54e'],
            data: [
                ['Mano De Obra', dolaresMano, true, true],
                ['Materiales', dolaresMat, false]
                // ['Xiaomi', 10.87, false],
                // ['Huawei', 8.48, false],
                // ['Oppo', 5.38, false],
                // ['Vivo', 4.17, false],
                // ['Realme', 2.57, false],
                // ['Unknown', 2.45, false],
                // ['Motorola', 2.22, false],
                // ['LG', 1.53, false],
                // ['Other', 7.2, false]
            ],
            showInLegend: true
        }]
    }


    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    );
}

export default GraficoPie;