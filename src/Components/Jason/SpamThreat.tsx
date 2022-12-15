import ReactEcharts from "echarts-for-react";
import { useEffect, useState } from "react";
import theme from "../../data/theme.json";
import { registerTheme } from "echarts";

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
  height = 700,
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

    // apply formatting to the adresses
    newData = newData.map((dataObject: any) => {
      // replace null senders with (null sender)
      if (dataObject.address === "<>" || dataObject.address === "<>@<>") {
        dataObject.address = "(null sender)";
      }

      // hack for removing the previous \n
      dataObject.address = dataObject.address.replace("\n@", "@");

      // break at @
      dataObject.address = dataObject.address.replace("@", "\n@");

      return dataObject;
    });

    setGraphData(newData);
  }, [scope, direction]);

  // display data
  const option = {
    title: {
      text: `TOP TEN (${direction})`,
      subtext: `By ${scope}`,
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
        width: 150,
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

  registerTheme("theme", theme);

  return <ReactEcharts option={option} style={{ height }} theme="theme" />;
};

export default SpamThreat;
