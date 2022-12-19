import ReactEcharts from "echarts-for-react";
import transform from "../../AlternativeTransformer";
import { data } from "../../data/Set1/12.json";

const TestComponent = () => {
  const option = {};

  console.log(transform(data, "clean:size"));

  return (
    <>
      <h1>See console</h1>
      <ReactEcharts option={option} />
    </>
  );
};

export default TestComponent;
