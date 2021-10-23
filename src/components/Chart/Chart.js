import React from 'react';
import ChartBar from './ChartBar';

import './Chart.css'

const Chart = props => {
    const dataPointsValues = props.dataPoints.map(datapoint => datapoint.value);
    const totalMax = Math.max(...dataPointsValues);

    return ( 
        <div className='chart'>
            {props.dataPoints.map(datapoint => {
                return <ChartBar 
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={totalMax}
                    label={datapoint.label}
                />
            })}
        </div>
     );
}
 
export default Chart;