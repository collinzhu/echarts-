import React from "react";
import ReactEcharts from "echarts-for-react";
// source: [
//     ['product', '2015', '2016', '2017'],
//     ['Matcha Latte', 43.3, 85.8, 93.7],
//     ['Milk Tea', 83.1, 73.4, 55.1],
//     ['Cheese Cocoa', 86.4, 65.2, 82.5],
//     ['Walnut Brownie', 72.4, 53.9, 39.1]
//   ]
function LineChart(){
    const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
   
          left: 'center'
        },
        dataset:{
            source: data
        },
        series: [
          {type: "line"}
        ]
      }
    return (
        <div>
            This is the line chart
        </div>
    )
}

export default LineChart;