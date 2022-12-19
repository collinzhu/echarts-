import ReactEcharts from "echarts-for-react";
import transform from "../../AlternativeTransformer";
import { data } from "../../data/Set1/9.json";

const TestComponent = () => {
  let data2D = transform(data, "address");

  const option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: data2D,
    },
    xAxis: { type: "category" },
    yAxis: {},
    series: data2D.map((row: (number | string | undefined)[]) => {
      return { type: "bar" };
    }),
  };

  console.log(transform(data, "address"));

  return (
    <>
      <h1>See console</h1>
      <ReactEcharts option={option} />
    </>
  );
};

export default TestComponent;
