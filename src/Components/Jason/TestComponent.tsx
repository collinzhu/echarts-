import ReactEcharts from "echarts-for-react";
import transform from "../../AlternativeTransformer";
import { data } from "../../data/Set1/13.json";

const TestComponent = () => {
  const option = {};

  console.log(transform(data, "address"));

  return (
    <>
      <h1>See console</h1>
      <ReactEcharts option={option} />
    </>
  );
};

export default TestComponent;
