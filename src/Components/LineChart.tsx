import React, { useState, useEffect } from 'react'
import EChartsReact from 'echarts-for-react'

interface LCProps {
    title: string,
    xAxisType: 'time' | 'value', // can add more as needed
    yAxisType: 'value',
    data: [],
}


export default function LineChart(props: LCProps) {
    const [options, setOptions] = useState({})

    // from what i gather, useEffect is work that gets done when the view loads
    useEffect(() => {
        const opts = {
            title: {text: props.title},
            xAxis: { type: props.xAxisType, splitLine: { show: false } },
            yAxis: { type: props.yAxisType, splitLine: { show: false } },
            series: props.data.map( (element) => {

            })
        }

        setOptions(opts)
    })


    return (
        <div>
            <EChartsReact option={options} />
        </div>
    )
}