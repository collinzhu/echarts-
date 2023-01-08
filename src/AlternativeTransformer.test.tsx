import transform from "./AlternativeTransformer";
import { data13 } from "./data/Set1";

it("transforms data", () => {
  let data = transform(data13.data, "address");
  console.log(data);
});
