import ReactEcharts from "echarts-for-react";
import { StringLiteral } from "typescript";
import { data as defaultData } from "../../data/Set1/0.json";

const Generic = ({
  title = "Example Title",
  description = "Example Description",
  height = 500,
  key = "domain",
  data = defaultData,
}: {
  title?: string;
  description?: string;
  height?: number;
  key?: string;
  data?: any[];
}) => {
  // map the key field as categories
  const categories = data.map((dataObject) => dataObject[key]);

  // delete the key from the data dictionary
  data.map((dataObject) => delete dataObject[key]);

  // find the 'longest' (most fields) data object as reference for the fields
  let referenceDataObject: { [key: string]: number } = {};
  for (let i = 0; i < data.length; i++) {
    if (Object.keys(data[i]).length > Object.keys(referenceDataObject).length) {
      referenceDataObject = data[i];
    }
  }

  // map the remaining fields as bar graphs
  const series = Object.keys(referenceDataObject).map((dataField: string) => {
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
