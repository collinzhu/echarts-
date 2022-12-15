import React from "react";
import ReactEcharts from "echarts-for-react";


interface ISmartRuleHitsCount{
    srd: any[];
    color:any[];
}

// let data = [
//     ['product', '2015'],
//     ['Matcha Latte', 43.3],
//     ['Milk Tea', 83.1],
//     ['Cheese Cocoa', 86.4],
//     ['Walnut Brownie', 72.4]
//   ]
function SmartRuleHitsCount (props:ISmartRuleHitsCount){
    let ok = props.srd
   // console.log("data", ok);
    const yes = ok.map(data =>({
      'name': data.rule, 'value': data.executioncount
    }))
    //console.log("yes",yes);
    
    let haha = [
      {name:"Inbound - Quarantine Unscannable Attachments",value:2969},
      {name: "Inbound - Quarantine Executables", value:76},
      {name:"Inbound - Quarantine Suspicious Attachments",value:12},
      {name: "Bypass Offensive Content Filter for Scheduled Reports", value:26338},
      {name:"Inbound - Explicit Address Block List",value:7712},
      {name:"Inbound - Bypass Explicit Address Block List",value:619},
      {name:"Gmail Spam",value:111},
      {name:"Drop Emails",value:136},
      {name:"Inbound - Strip oledata files",value:60},
      {name:"Whaling Protection",value:2},
      {name:"icloud Spam",value:7}
    
    ]
    const head = [
      "rule", "execution count"
    ]
    const body = haha.map((data) =>{
      return [
        data.name,
        data.value
      ]
    })
    console.log(body);
     
    const data = [head, ...body];
    const option = {
        color: props.color,
        title: {
          text:"Count of hits for each smart rule"
        },
        legend: {},
        tooltip: {},
        dataset: {
          source: data,
        },
        xAxis: {},
        yAxis: {  
          type: "category",
          axisLabel: {
            rotate: 30
          },
      
      },
        series: [
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