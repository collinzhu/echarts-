import React from "react";
import inboundJson from "./example/inbound-message-counts.json"
import unusedPolicy from "./example/14.json"
import BarChart from "./Components/BarChart";
import PieChart from "./Components/PieChart";
import LineChart from "./Components/LineChart";

// "totalthreat": 0,
// "totaldenypolicy": 0,
// "domain": "fbl.vadesecure.com",
// "totalspam": 0,
// "totalclean": 72,
// "totalallowpolicy": 357

//state for the data
interface IState {
  totalThreat: number | any;
  totalDenyPolicy: number | any;
  domain: string | any;
  totalSpam: number | any;
  totalClean: number | any;
  totalAllowPolicy: number | any;
}

function App() {
  return (
    <div>
      <BarChart imc={inboundJson.data}></BarChart>
      <PieChart up = {unusedPolicy.data}></PieChart>
      <LineChart></LineChart>
    </div>
  );
}
export default App;
