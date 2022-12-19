import ReactEcharts from "echarts-for-react";
import { useEffect, useState } from "react";
import transform from "../../AlternativeTransformer";
import { data6, data7, data8, data9, data10 } from "../../data/Set1";

const TestComponent = ({
  datastream,
}: {
  datastream: "data6" | "data7" | "data8" | "data9" | "data10";
}) => {
  const [data, setData] = useState(transform(data7.data, "address"));

  useEffect(() => {
    switch (datastream) {
      case "data6":
        setData(transform(data6.data, "address"));
        break;
      case "data7":
        setData(transform(data7.data, "address"));
        break;
      case "data8":
        setData(transform(data8.data, "address"));
        break;
      case "data9":
        setData(transform(data9.data, "address"));
        break;
      case "data10":
        setData(transform(data10.data, "address"));
        break;
      default:
        setData(transform(data6.data, "address"));
        break;
    }
  }, [datastream]);

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
