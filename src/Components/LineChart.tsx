import React, { useState, useEffect } from 'react'
import EChartsReact from 'echarts-for-react'
// import inboundMessageCounts from '../Data/'

interface LCProps {
    data: any[]
    options: {}
}

// expects data as [[1, 2, 3]]
export default function LineChart(props: LCProps) {
    const [options, setOptions] = useState({})

    // from what i gather, useEffect is work that gets done when the view loads
    useEffect(() => {

        // if the options property is set, use that, else fallback to defaults
        if (Object.keys(props.options).length != 0) {
            setOptions(props.options)
        } else {
            setOptions({
                series: props.data.map((e) => { return {data: e, type: 'line'} })
            })
        }
    })


    return (
        <div>
            <EChartsReact option={options} />
        </div>
    )
}