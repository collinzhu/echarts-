import React from "react";
import ReactEcharts from "echarts-for-react";
import { isBindingName } from "typescript";

interface ITypeOfEvent{
    inbound:any[];
    outbound:any[];

}


function TypeOfEvent(props:ITypeOfEvent){
    // const inboundData = props.inbound;
    // const counting = new Map<string, number>();
    // for (const item of inboundData) {
    //     //console.log("item",item.policyaction);
    //     let count = counting.get(item.action) || 0;
    //     counting.set(item.action, count + 1);
    // }
    // //console.log("inbound map", counting);
    // const outboundData = props.outbound;
    // //console.log("OUTBOUND", outboundData);
    // const counting1 = new Map<string, number>();
    //  for (const ok of outboundData) {
    //     //console.log("item",ok.action);
    //      let yes = counting1.get(ok.action) || 0;
    //      counting1.set(ok.action, yes + 1);
    // }
    // //console.log("outbound map",counting1);

    // const ib = [];
    // for( const [key, value] of counting){
    //     ib.push({
    //         "value": value, "name":key
    //     });
    // }
    // //console.log("ib",ib);
    // const ob = [];
    // for( const [key, value] of counting1){
    //     ob.push({
    //         "value": value, "name":key
    //     });
    // }
   
   
    const head = [
        "product",
        "inbound",
        "outbound"
    ];


    const option = {
        legend:{},
        tooltip:{},
        dataset:{
            source: [
                ['product', 'inbound', 'outbound'],
                ['ALLOW TO USER', 0, 343],
                ['ALLOW FROM USER', 4085, 741],
                ['ALLOW FROM DOMAIN', 60, 9],
                ['ALLOW TO DOMAIN', 0, 1665],
                ['ALLOW IP ADRESS', 60, 0]
              ],
        },
        xAxis:{type:"category"},
        yAxis:{},
        series:[
            {type: "bar"},
            {type: "bar"}
        ]
    }
    return(
        <div>
            <ReactEcharts option={option}/>
        </div>
    );
}

export default TypeOfEvent;