import { useState } from "react";
import ToggleChart from "./ToggleChart";
import TogglePane from "./TogglePane";

const ToggleDemo = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <ToggleChart toggle={toggle} />
      <TogglePane
        onChange={() => {
          setToggle(!toggle);
        }}
      />
    </>
  );
};

export default ToggleDemo;
