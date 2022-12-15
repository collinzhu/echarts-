import React from "react";
import ReactEcharts from "echarts-for-react";


interface ISmartRuleHitsCount{
    srd: any[];
}

let data = [
    ['product', '2015', '2016', '2017'],
    ['Matcha Latte', 43.3, 85.8, 93.7],
    ['Milk Tea', 83.1, 73.4, 55.1],
    ['Cheese Cocoa', 86.4, 65.2, 82.5],
    ['Walnut Brownie', 72.4, 53.9, 39.1]
  ]
function SmartRuleHitsCount (props:ISmartRuleHitsCount){
    let ok = props.srd
    console.log("data", ok);
    

   
    const option = {
        legend: {},
        tooltip: {},
        dataset: {
          source: data,
        },
        xAxis: {},
        yAxis: { type: "category" },
        series: [
          { type: "bar" },
          { type: "bar" },
          { type: "bar" },
          { type: "bar" },
          { type: "bar" },
        ],
    };
    
    return (
        <div> 
            <ReactEcharts option={option}/>
        </div>
    )
}

export default SmartRuleHitsCount;