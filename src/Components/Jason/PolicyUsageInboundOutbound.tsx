import ReactEcharts from "echarts-for-react";
import theme from "../../data/theme.json";
import { registerTheme } from "echarts";
import Transformer from "../../AlternativeAlternativeTransformer";
import SmartRuleHitsCount from "../Collin/SmartRuleHitsCount";

interface PolicyUsageInboundOutboundProps {
  data: any;
  state?: "inbound" | "outbound";
}

const PolicyUsageInboundOutbound = ({
  data,
  state = "inbound",
}: PolicyUsageInboundOutboundProps) => {
  data = data[state];
  const transformer = new Transformer(data);
  transformer.setXAxis("action");

  data = transformer.data;

  // extract actions
  let actions = data.map((row: (string | number)[]) => {
    return row[0];
  });

  // remove duplicates
  actions = actions.filter(
    (value: string, index: number) => actions.indexOf(value) === index
  );

  // count hits for each action
  let hitCounts = actions.map((action: string) =>
    data
      .filter((row: any) => row[0] === action)
      .reduce((accumulator: number, row: any) => {
        return accumulator + row[3];
      }, 0)
  );

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
        data: hitCounts,
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
