import ReactEcharts from "echarts-for-react";
import theme from "../../data/theme.json";
import { registerTheme } from "echarts";

interface PolicyUsageInboundOutboundProps {
  data: any;
  state?: "inbound" | "outbound";
}

const PolicyUsageInboundOutbound = ({
  data,
  state = "inbound",
}: PolicyUsageInboundOutboundProps) => {
  console.log(data);
  data = data[state];

  let actions = data.map((dataObject: any) => dataObject.action);

  // remove duplicates
  actions = actions.filter(
    (value: string, index: number) => actions.indexOf(value) === index
  );

  let totalCountOfHits = actions.map((action: string) => {
    let hitCount = 0;

    data
      .filter((dataObject: any) => dataObject.action === action)
      .map((dataObject: any) => {
        hitCount += dataObject.countofhits;
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
