import ReactEcharts from "echarts-for-react";

interface GenericProps {
  title?: string;
  description?: string;
  barHeight?: number;
  displayMax?: number;
  keyValue: string;
  data: { [index: string]: number | string }[];
}

const Generic = ({
  title = "A Generic Graph",
  description = "=That displays generic data=",
  barHeight = 60,
  displayMax = 10,
  keyValue,
  data,
}: GenericProps) => {
  // extract displayMax data items from the data
  data = data.filter((dataObject, index) => index < displayMax);

  // map the keyValue as categories
  let categories: any[] = data.map((dataObject) => {
    let category = dataObject[keyValue];

    if (category === "<>" || category === "<>@<>") {
      category = "(null sender)";
    }

    return category;
  });

  // set the chart height to accomodate the categories
  const height = categories.length * barHeight;

  // apply formatting to the categories
  categories = categories.map((category) => {
    return { value: category, textStyle: { width: 100, overflow: "truncate" } };
  });

  // remove the keyValue from the data set
  data = data.map((dataObject) => {
    let newDataObject: { [key: string]: number | string } = {};
    Object.keys(dataObject)
      .filter((dataKey) => dataKey !== keyValue)
      .map((dataKey) => (newDataObject[dataKey] = dataObject[dataKey]));
    return newDataObject;
  });

  // find the 'longest' (most fields) data object as reference for the fields
  let referenceDataObject: { [key: string]: number | string } = {};
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
      data: categories,
    },
    series,
  };

  return <ReactEcharts option={option} style={{ height }} />;
};

export default Generic;
