import ReactEcharts from "echarts-for-react";
import unusedpolicies from "../../data/Set0/unusedpolicies.json";

const PieChart = ({
  title,
  description,
  displayMax,
  height,
}: {
  title: string;
  description: string;
  displayMax: number;
  height: number;
}) => {
  const allData = unusedpolicies.data;

  let policies = allData.map((data: any) => data.policyaction);

  // remove duplicates
  policies = policies.filter(
    (value: string, index: number) => policies.indexOf(value) === index
  );

  // take displayMax policies to process
  policies = policies.filter(
    (data: string, index: number) => index < displayMax
  );

  let amountOfEachPolicy = policies.map((policy: string) => {
    // get all occurances
    const occuranceOfPolicy = allData.filter(
      (data: any) => data.policyaction === policy
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

export default PieChart;
