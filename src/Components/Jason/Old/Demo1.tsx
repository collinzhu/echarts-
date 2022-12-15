import ReactEcharts from "echarts-for-react";
import unusedpolicies from "../../../data/Set0/unusedpolicies.json";
import theme2 from "../../../data/theme2.json";
import { registerTheme } from "echarts";

interface Props {
  title?: string;
  description?: string;
  displayMax?: number;
  height?: number;
  color?: string[];
}

const Demo1 = ({
  title = "Unused Policies",
  description = "The proportion of Unused Policies, grouped by total hit-count",
  displayMax = 15,
  height = 500,
  color = [],
}: Props) => {
  const allData = unusedpolicies.data;

  let policies = allData.map((data) => data.policyaction);

  // remove duplicates
  policies = policies.filter(
    (value, index) => policies.indexOf(value) === index
  );

  // take displayMax policies to process
  policies = policies.filter((data, index) => index < displayMax);

  let amountOfEachPolicy = policies.map((policy) => {
    // get all occurances
    const occuranceOfPolicy = allData.filter(
      (data) => data.policyaction === policy
    );

    const value = occuranceOfPolicy.length;
    const name = policy;

    return { value, name };
  });

  const option = {
    color,
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
    grid: {
      containLabel: true,
    },
    series: [
      {
        type: "pie",
        radius: "65%",
        center: ["50%", "50%"],
        selectedMode: "single",
        data: amountOfEachPolicy,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  registerTheme("theme2", theme2);

  return (
    <ReactEcharts
      option={option}
      style={{
        height,
      }}
      theme="theme2"
    />
  );
};

export default Demo1;
