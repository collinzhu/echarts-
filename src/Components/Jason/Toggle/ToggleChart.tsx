import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";
import { data as inboundData } from "../../../data/Set1/2.json";
import { data as outboundData } from "../../../data/Set1/3.json";

const ToggleChart = ({
  toggle = false,
  title = "Policy Usage",
  description = `Type of Events = Whitelist, Direction = ${
    toggle ? "INBOUND" : "OUTBOUND"
  }`,
  height = 500,
}: {
  toggle?: boolean;
  title?: string;
  description?: string;
  height?: number;
}) => {
  const [allData, setAllData] = useState(
    [] as { action: string; countofhits: number }[]
  );

  useEffect(() => {
    if (toggle) {
      setAllData(inboundData);
    } else {
      setAllData(outboundData);
    }
  }, [toggle]);

  // list of all policies
  let policies = allData.map((data) => data.action);

  // remove duplicates
  policies = policies.filter(
    (value, index) => policies.indexOf(value) === index
  );

  let amountOfEachPolicy = policies.map((policy) => {
    // get all occurances
    const occuranceOfPolicy = allData.filter((data) => data.action === policy);

    const value = occuranceOfPolicy.length;
    const name = policy;

    return { value, name };
  });

  const option = {
    title: {
      text: title,
      subtext: description,
      left: "center",
      top: 10,
    },
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c} ({d}%)",
    },
    legend: {
      left: "center",
      data: policies,
      bottom: 10,
      selectedMode: false,
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        selectedMode: false,
        data: amountOfEachPolicy,
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height }} />;
};

export default ToggleChart;
