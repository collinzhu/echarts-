/* SMX format
{
    id: number
    isEmpty: bool
    title: string
    data: object[]
}
*/

interface dataShape {
  [index: string]: string | number;
}

/**
 * Transform SMX data to the ECharts format, designed to be a temporary solution
 * @param inputData The `data` field from an SMX API request.
 * @param xKey The key to be used for the X Axis
 * @param yKey The key to be used for the Y Axis
 * @param mapper Optional mapper function to be run before any filtering happens
 */
export default function transform(
  inputData: dataShape[],
  xKey: string,
  mapper?: (val: dataShape) => dataShape
) {
  // 1. preprocess using parameters
  let data: dataShape[] = applyMapper(inputData, mapper);

  // 2. standardize each object in the data array
  printDataLengths(data);
  data = standardizeFields(data);
  printDataLengths(data);

  return data;
}

const getDefaultObject = (data: dataShape[]) => {
  let defaultObject: dataShape = {};

  data.forEach((value) => {
    defaultObject = { ...defaultObject, ...value };
  });

  // make fields default
  Object.keys(defaultObject).forEach((field: string) => {
    let fieldType = typeof defaultObject[field];

    if (fieldType === "string") {
      defaultObject[field] = "";
    } else if (fieldType === "number") {
      defaultObject[field] = 0;
    }
  });

  return defaultObject;
};

const standardizeFields = (data: dataShape[]) => {
  let defaultObject: dataShape = getDefaultObject(data);

  return data.map((value) => {
    return { ...defaultObject, ...value };
  });
};

const applyMapper = (
  data: dataShape[],
  mapper?: (val: dataShape) => dataShape
) => {
  if (mapper !== undefined) {
    return data.map(mapper);
  } else {
    return data;
  }
};

const printDataLengths = (data: any) => {
  let dataLengths: number[] = [];

  data.forEach((value: dataShape) => {
    dataLengths.push(Object.keys(value).length);
  });

  console.log(dataLengths);
};

const extractFields = (data: Object[]): string[] => {
  let fields = new Set();

  data.forEach((item: any) => {
    Object.keys(item).forEach((field: string) => {
      fields.add(field);
    });
  });

  return Array.from(fields) as string[];
};

const getLargestObject = (data: Object[]) => {
  let largestObject: Object = {};
  data.forEach((val) => {
    if (Object.keys(val).length > Object.keys(largestObject).length) {
      largestObject = val;
    }
  });
  return largestObject;
};

const standardizeFieldsLegacy = (data: any) => {
  let fields: string[] = extractFields(data);
  data.forEach((item: any) => {
    fields.forEach((field: string) => {
      item[field] = item[field] || 0;
    });
  });
};

const extractDimensions = (data: any): string[] => {
  return Object.keys(data[0]);
};

const makeTwoDimensionalArray = (data: any): string[] => {
  let demensions = extractDimensions(data);
  data = data.map((item: any) =>
    Object.keys(item).map((key: string) => item[key])
  );

  return [demensions, ...data];
};

const processData = (data: any) => {
  standardizeFields(data);
  return makeTwoDimensionalArray(data);
};
