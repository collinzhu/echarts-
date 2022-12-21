import ReactEcharts from "echarts-for-react";
import transform from "../../AlternativeTransformer";
import { data6, data7, data8, data9, data10 } from "../../data/Set1";

interface TestComponentProps {
  datastream: "data6" | "data7" | "data8" | "data9" | "data10";
}

const TestComponent = ({ datastream }: TestComponentProps) => {
  let data;

  switch (datastream) {
    case "data6":
      data = transform(data6.data, "address");
      break;
    case "data7":
      data = transform(data7.data, "address");
      break;
    case "data8":
      data = transform(data8.data, "address");
      break;
    case "data9":
      data = transform(data9.data, "address");
      break;
    case "data10":
      data = transform(data10.data, "address");
      break;
    default:
      data = transform(data6.data, "address");
      break;
  }

  console.log(data);

  const option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: data,
    },
    xAxis: {},
    yAxis: { type: "category" },
    series: data.map((row: (number | string | undefined)[]) => {
      return { type: "bar", seriesLayoutBy: "column" };
    }),
  };

  return (
    <>
      <h1>See console</h1>
      <ReactEcharts option={option} style={{ height: 600 }} />
    </>
  );
};

export default TestComponent;
