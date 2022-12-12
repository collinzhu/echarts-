import ReactEcharts from "echarts-for-react";
import policyUsage from "../data/Set0/policyusage.json";

interface Props {
  title?: string;
  description?: string;
  height?: number;
}

const Demo3 = ({
  title = "Policy Usage",
  description = "How much each policy is used",
  height = 500,
}: Props) => {
  let allData = policyUsage.data;

  let actions = allData.map((data) => data.action);

  // remove duplicates
  actions = actions.filter((value, index) => actions.indexOf(value) === index);

  let countOfHits = actions.map((action) => {
    let hitCount = 0;

    allData
      .filter((data) => data.action === action)
      .map((data) => {
        hitCount += data.countofhits;
        return null;
      });

    return hitCount;
  });

  const option = {
    title: {
      text: title,
      subtext: description,
      left: "center",
      top: 10,
    },
    xAxis: {
      type: "category",
      data: actions,
    },
    yAxis: {
      type: "value",
    },
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c}",
    },
    series: [
      {
        data: countOfHits,
        type: "bar",
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

export default Demo3;
