import React, { useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import inboundJson from "./Data/inbound-message-counts.json";
import BarChart from "./Components/BarChart";
import { DataStore } from "./DataStore";

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
      {/* <BarChart imc={inboundJson.data}></BarChart> */}

      { DataStore.global.request(1, "asdasd") }
    </div>
  );
}
export default App;
