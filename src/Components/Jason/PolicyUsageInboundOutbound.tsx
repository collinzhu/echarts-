import ReactEcharts from "echarts-for-react";
import theme from "../../data/theme.json";
import { registerTheme } from "echarts";
import transform from "../../AlternativeTransformer";

interface PolicyUsageInboundOutboundProps {
  data: any;
  state?: "inbound" | "outbound";
}

const PolicyUsageInboundOutbound = ({
  data,
  state = "inbound",
}: PolicyUsageInboundOutboundProps) => {
  console.log(data);
  data = transform(data[state], false, "action");

  // extract actions
  let actions = data.map((row: (string | number)[]) => {
    return row[0];
  });

  // remove duplicates
  actions = actions.filter(
    (value: string, index: number) => actions.indexOf(value) === index
  );

  console.log(data);

  let totalCountOfHits = actions.map((action: string) => {
    let hitCount = 0;

    data
      .filter((row: any) => row[0] === action)
      .map((row: any) => {
        hitCount += row[3];
        return null;
      });

    return hitCount;
  });

  const option = {
    title: {
      text: `Policy usage for ${state.toUpperCase()} data`,
      subtext: `The total hit-count of each policy action`,
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
        data: totalCountOfHits,
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

  registerTheme("theme", theme);

  return <ReactEcharts option={option} style={{ height: 600 }} theme="theme" />;
};

export default PolicyUsageInboundOutbound;
