import ReactEcharts from "echarts-for-react";
import unusedpolicies from "../../../data/Set0/unusedpolicies.json";

interface Props {
  title?: string;
  description?: string;
  displayMax?: number;
  height?: number;
}

const Demo1 = ({
  title = "Unused Policies",
  description = "The proportion of unused policies, by hitcount",
  displayMax = 15,
  height = 500,
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

  return (
    <ReactEcharts
      option={option}
      style={{
        height,
      }}
    />
  );
};

export default Demo1;
