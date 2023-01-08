import transform from "./AlternativeTransformer";
import { data13 } from "./data/Set1";

it("transforms data", () => {
  let data = transform(data13.data);
  console.log(data);
});

it("transforms data with key", () => {
  let data = transform(data13.data, "address");
  console.log(data);
});
