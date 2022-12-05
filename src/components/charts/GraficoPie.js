import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// import "./GraficoPie.css"


const GraficoPie = (props) => {

   
    const pesos = parseFloat((props.totales.totalPesos).toFixed(2));
    const dolares = parseFloat((props.totales.totalDolar).toFixed(2)); 
   
    const options = {
        title: {
            text: 'Totales en Pesos ($) & Dolares (U$D)'
        },
        accessibility:{
            enabled:false
        },
        series: [{
            type: 'pie',
            allowPointSelect: true,
            keys: ['name', 'y', 'selected', 'sliced'],
            colors: ['#4572A7','#71a54e'],
            data: [
                ['Totale en $', pesos, true, true],
                ['Total en U$D', dolares, false]
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