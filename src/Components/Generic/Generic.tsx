import ReactEcharts from "echarts-for-react";
import { data as defaultData } from "../../data/Set1/1.json";

const Generic = ({
  key = "domain",
  data = defaultData,
}: {
  key?: string;
  data?: any[];
}) => {
  // map the key field as categories
  const categories = data.map((dataObject) => dataObject[key]);

  // delete the key from the data dictionary
  data.map((dataObject) => delete dataObject[key]);

  // map the remaining fields as bar graphs
  const series = Object.keys(data[0]).map((dataField: string) => {
    return {
      name: dataField,
      type: "bar",
      data: data.map((dataObject) => dataObject[dataField]),
    };
  });

  const option = {
    grid: {
      containLabel: true,
    },
    title: {
      text: "VOID",
      subtext: "VOID",
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
      bottom: 10,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.1],
    },
    yAxis: {
      type: "category",
      data: categories,
    },
    series,
  };

  return (
    <ReactEcharts
      option={option}
      style={{
        height: 500,
      }}
    />
  );
};

export default Generic;
