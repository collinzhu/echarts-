interface dataShape {
  [index: string]: string | number | undefined;
}

/* SMX format
  {
      id: number
      isEmpty: bool
      title: string
      data: dataShape[]
  }
  */

/**
 * WARNING - THIS IS INSANELY UNOPTIMISED
 */
export default class Transformer {
  rawData: dataShape[];
  header: string[];
  data: (string | number | undefined)[][];

  constructor(rawData: dataShape[]) {
    this.rawData = rawData;

    let data = this.standardizeFields(rawData);

    this.header = Object.keys(data[0]);

    this.data = data.map((item: dataShape) =>
      this.header.map((field) => item[field])
    );
  }

  defaultFields = (dataObject: dataShape) => {
    Object.keys(dataObject).forEach((field: string) => {
      let fieldType = typeof dataObject[field];

      if (fieldType === "string") {
        dataObject[field] = "";
      } else if (fieldType === "number") {
        dataObject[field] = 0;
      }
    });

    return dataObject;
  };

  getDefaultObject = (data: dataShape[]) => {
    let defaultObject: dataShape = {};

    data.forEach((value) => {
      defaultObject = { ...defaultObject, ...value };
    });

    defaultObject = this.defaultFields(defaultObject);

    return defaultObject;
  };

  standardizeFields = (data: dataShape[]) => {
    let defaultObject: dataShape = this.getDefaultObject(data);

    return data.map((value) => {
      return { ...defaultObject, ...value };
    });
  };

  swap = (
    row: (number | string | undefined)[],
    indexOne: number,
    indexTwo: number
  ) => {
    const temp = row[indexOne];
    row[indexOne] = row[indexTwo];
    row[indexTwo] = temp;

    return row;
  };

  setXAxis = (field: string) => {
    const fieldIndex = this.header.indexOf(field);

    this.header = this.swap(this.header, 0, fieldIndex) as string[];
    this.data = this.data.map((row: (number | string | undefined)[]) =>
      this.swap(row, 0, fieldIndex)
    );
  };
}
