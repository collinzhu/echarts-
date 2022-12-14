import ReactEcharts from "echarts-for-react";
import SpamThreatStories from "../../stories/Jason/SpamThreat.stories";

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
  data = data[scope][direction];
  console.log(data);

  // display data
  const option = {
    title: {
      text: `Top ten ${direction}`,
      subtext: `Limited by ${scope}`,
      left: "center",
      top: 10,
    },
  };

  return <ReactEcharts option={option} style={{ height }} />;
};

export default SpamThreat;
