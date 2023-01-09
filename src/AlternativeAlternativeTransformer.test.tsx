import Transformer from "./AlternativeAlternativeTransformer";
import { data13 } from "./data/Set1";

it("transforms data and sets the x axis", () => {
  const transformer = new Transformer(data13.data);
  transformer.setXAxis("address");
  expect(transformer.header[0]).toBe("address");
  expect(transformer.data[0][0]).toBe("fmstats@oss.co.nz");
});
