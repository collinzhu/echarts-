// import React, { useState, useEffect } from 'react'
import ReactECharts from 'echarts-for-react'


export default function LineChart(title: string, xAxisType: 'time' | 'value', data: any[]) {

    //.const [options, setOptions] = useState({})
    let units: any[] = data.filter(e => (e.rule === "Inbound - Quarantine Unscannable Attachments"))
    let times: number[] = units.map(e => e.date)

    // gather times into an array if it is time series data
    // let times: number[] = []
    // if (props.xAxisType == 'time') {
    //     times = props.data.map(e => e.date)
    //     // console.log('asd', times)
    // }

    const opts = {
        title: { text: title },
        xAxis: { type: xAxisType, data: times, splitLine: { show: false } },
        yAxis: { type: 'value', splitLine: { show: false } },
        series: {
            // data: props.data.map( (element) => {
            //     return element
            // })
            data: units
        }
    }

    //setOptions(opts)

    return (
        <div>
            <ReactECharts option={opts} lazyUpdate={true} />
        </div>
    )
}
