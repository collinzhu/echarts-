import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import inboundJson from "./Data/inbound-message-counts.json";
import BarChart from "./Components/BarChart";
import { DataStore, Period } from "./DataStore";

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
  const [data, setData] = useState(Object)

  useEffect( () => {
    DataStore.global.request(1, 'a', Period.M1).then( result => setData(result) )
    console.log('data: ', data)
  })

  return (
    <div>
      {/* { data.map ( (el: object) => { <div>el.fact</div> } ) } */}
    </div>
  );
}
export default App;
