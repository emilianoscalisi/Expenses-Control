import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// import "./GraficoPie.css"


const GraficoPie = (props) => {

    const options = {
        title: {
            text: 'My chart'
        },
        series: [{
            type: 'pie',
            allowPointSelect: true,
            keys: ['name', 'y', 'selected', 'sliced'],
            data: [
                ['Samsung', 27.79, true, true],
                ['Apple', 27.34, false],
                ['Xiaomi', 10.87, false],
                ['Huawei', 8.48, false],
                ['Oppo', 5.38, false],
                ['Vivo', 4.17, false],
                ['Realme', 2.57, false],
                ['Unknown', 2.45, false],
                ['Motorola', 2.22, false],
                ['LG', 1.53, false],
                ['Other', 7.2, false]
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