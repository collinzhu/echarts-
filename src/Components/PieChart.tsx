import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

// data: [
//     { value: 1048, name: 'Search Engine' },
//     { value: 735, name: 'Direct' },
//     { value: 580, name: 'Email' },
//     { value: 484, name: 'Union Ads' },
//     { value: 300, name: 'Video Ads' }
//   ],
interface IPieChartProps{
    up:any[];
}

function PieChart(props: IPieChartProps){
    const allData = props.up;

    let policies = allData.map((data) => data.policyaction);
    console.log("lldata", policies)
    const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const counts = {};

for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts);
console.log(counts[5], counts[2], counts[9], counts[4]);
  
    // remove duplicates
    //policies = [...new Set(policies)];
  
    // take displayMax policies to process
    //policies = policies.filter((data, index) => index < displayMax);
  
    let amountOfEachPolicy = policies.map((policy) => {
      // get all occurances
      const occuranceOfPolicy = allData.filter(
        (data) => data.policyaction === policy
      );
  
      const value = occuranceOfPolicy.length;
      const name = policy;
  
      return { value, name };
    });
   // const [option, setOption] = useState({});
    const option = {
        // tooltip: {
        //   trigger: 'item'
        // },
        // legend: {
        //   top: '5%',
        //   left: 'center'
        // },
        // dataset:{
        //     source: data
        // },
        // series: [
        //   {type: "pie"}
        // ]
      }
   // setOption(PieChartOptions)
 return (
    <div>
    <ReactEcharts option={option} />;
   </div>
 );  

}

export default PieChart;