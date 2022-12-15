import ReactEcharts from "echarts-for-react";
import SpamThreatStories from "../../stories/Jason/SpamThreat.stories";
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
  height = 500,
}: SpamThreatProps) => {
  // narrow data
  const [graphData, setGraphData] = useState(data[scope][direction]);

  // re-apply narrowing on prop change
  useEffect(() => {
    let newData = data[scope][direction];
    newData = newData.sort(
      (objectOne: any, objectTwo: any) =>
        objectOne["spam:count"] - objectTwo["spam:count"]
    );

    setGraphData(newData);
    console.log("Narrowed graph data");
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
