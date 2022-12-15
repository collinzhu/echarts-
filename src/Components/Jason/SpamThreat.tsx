import ReactEcharts from "echarts-for-react";
import { useEffect, useState } from "react";

interface SpamThreatProps {
  data: any;
  scope: "domain" | "users";
  direction: "sender" | "recipient";
  height?: number;
}

const SpamThreat = ({
  data,
  scope,
  direction,
  height = 600,
}: SpamThreatProps) => {
  // narrow data
  const [graphData, setGraphData] = useState(data[scope][direction]);

  // re-apply narrowing on prop change
  useEffect(() => {
    let newData = data[scope][direction];

    // sort data by spam count
    newData = newData.sort(
      (objectOne: any, objectTwo: any) =>
        objectOne["spam:count"] - objectTwo["spam:count"]
    );

    // replace null senders
    newData = newData.map((dataObject: any) => {
      if (dataObject.address === "<>" || dataObject.address === "<>@<>") {
        dataObject.address = "(null sender)";
      }
      return dataObject;
    });

    setGraphData(newData);
  }, [scope, direction]);

  // display data
  const option = {
    title: {
      text: `Top ten ${direction}`,
      subtext: `Limited by ${scope}`,
      left: "center",
      top: 10,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      bottom: 10,
    },
    grid: {
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: graphData.map((dataObject: any) => dataObject.address),
      axisLabel: {
        width: 140,
        overflow: "break",
      },
    },
    series: [
      {
        name: "SPAM",
        type: "bar",
        data: graphData.map((dataObject: any) => dataObject["spam:count"]),
      },
      {
        name: "THREAT",
        type: "bar",
        data: graphData.map((dataObject: any) => dataObject["threat:count"]),
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height }} />;
};

export default SpamThreat;
