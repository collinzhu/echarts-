import React from "react";
import ReactEcharts from "echarts-for-react";

// data: [
//     { value: 1048, name: 'Search Engine' },
//     { value: 735, name: 'Direct' },
//     { value: 580, name: 'Email' },
//     { value: 484, name: 'Union Ads' },
//     { value: 300, name: 'Video Ads' }
//   ],
interface IPieChartProps{
    up:any;
    color:any[];
}

function PieChart(props: IPieChartProps){
    const allData = props.up;
    //console.log("data",allData);

    const counting = new Map<string, number>();
    for (const item of allData) {
        //console.log("item",item.policyaction);
        let count = counting.get(item.policyaction) || 0;
        counting.set(item.policyaction, count + 1);
    }
   // console.log(counting);
   const data = [];
   for (const [key, value] of counting) {
     data.push({
       "value":value, "name": key
     });
   }
   console.log(data);
  
   
   // const [option, setOption] = useState({});
    const option = {
      color: props.color,
        tooltip: {
          trigger: 'item'
        },
        fontSize: 55,
        fontFamily: 'Arial',

        legend: {
   
        },
        dataset:{
            source: data
        },
        series: [
          {type: "pie"}
        ]
      }
   // setOption(PieChartOptions)
 return (
    <div>
    <ReactEcharts option={option} />;
   </div>
 );  

}

export default PieChart;