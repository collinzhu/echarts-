import ReactEcharts from "echarts-for-react";
import inboundMessageCounts from "../../../data/Set0/inbound-message-counts.json";

interface Props {
  title?: string;
  description?: string;
  displayMax?: number;
  height?: number;
}

const Demo2 = ({
  title = "Inbound Message Counts",
  description = "Various data for each domain",
  height = 500,
  displayMax = 15,
}: Props) => {
  let allData = inboundMessageCounts.data;

  // take displayMax data to process
  allData = allData.filter((data, index) => index < displayMax);

  const option = {
    grid: {
      containLabel: true,
    },
    title: {
      text: title,
      subtext: description,
      left: "center",
      top: 10,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      bottom: 0,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.1],
    },
    yAxis: {
      type: "category",
      data: allData.map((data) => data.domain),
    },
    series: [
      {
        name: "SPAM",
        type: "bar",
        data: allData.map((data) => data.totalspam),
      },
      {
        name: "DENY POLICY",
        type: "bar",
        data: allData.map((data) => data.totaldenypolicy),
      },
      {
        name: "THREAT",
        type: "bar",
        data: allData.map((data) => data.totalthreat),
      },
      {
        name: "CLEAN",
        type: "bar",
        data: allData.map((data) => data.totalclean),
      },
      {
        name: "ALLOW",
        type: "bar",
        data: allData.map((data) => data.totalallowpolicy),
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

export default Demo2;
