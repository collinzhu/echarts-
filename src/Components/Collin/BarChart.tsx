import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

// "totalthreat": 0,
// "totaldenypolicy": 0,
// "domain": "local.smxemail.com",
// "totalspam": 0,
// "totalclean": 7513,
// "totalallowpolicy": 0
//Bar Chart  props for inbound message counts
// interface IBarChartProps{
//     totalThreat: number | any;
//     totalDenyPolicy:number | any;
//     domain: string | any;
//     totalSpam: number | any;
//     totalClean: number | any;
//     totalAllowPolicy: number | any;
//   }
interface IBarChartProps {
  imc: any[];
}
function BarChart(props: IBarChartProps) {
  const [option, setOption] = useState({});

  useEffect(() => {
    const head = [
      "product",
      "total thread",
      "total Deny policy",
      "total spam",
      "total clean",
      "total allow policy",
    ];
    const body = props.imc.map((data) => {
      return [
        data.domain,
        data.totaldenypolicy,
        data.totalclean,
        data.totaldenypolicy,
        data.totalspam,
        data.totalthreat,
      ];
    });
    const data = [head, ...body];
    //console.log(data);
    const barChartOption = {
      color: [
        '#c23531',
        '#2f4554',
        '#61a0a8',
        '#d48265',
        '#91c7ae',
        '#749f83',
        '#ca8622',
        '#bda29a',
        '#6e7074',
        '#546570',
        '#c4ccd3'
      ],
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
    setOption(barChartOption);
  }, []);

  return (
    <div>
      <ReactEcharts option={option} />;
    </div>
  );
}

export default BarChart;
