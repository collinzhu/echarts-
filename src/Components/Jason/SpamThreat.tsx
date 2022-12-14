import ReactEcharts from "echarts-for-react";

const SpamThreat = ({ height = 500 }: { height?: number }) => {
  const option = {
    title: {
      text: "TITLE",
      subtext: "DESCRIPTION",
      left: "center",
      top: 10,
    },
  };

  return <ReactEcharts option={option} style={{ height }} />;
};

export default SpamThreat;
