import React from "react";
import inboundJson from "./example/inbound-message-counts.json";
import unusedPolicy from "./example/14.json";
import BarChart from "./Components/Collin/BarChart";
import PieChart from "./Components/Collin/PieChart";
import TypeOfEvent from "./Components/Collin/TypeOfEvent";
import inboundpo from "./data/Set1/2.json";
import SmartRuleHitsCount from "./Components/Collin/SmartRuleHitsCount";
import outboundpo from "./data/Set1/3.json";
import smartRuleData from "./data/Set1/4.json"
import TimeInboundSpam from "./Components/Collin/TimeInboundSpam";
import { useState, useEffect } from "react";
import file from './data/Set1/11.json'
import echartsify from "./Transformer";
//import { DataStore, Period } from './DataStore'


// "totalthreat": 0,

// "totaldenypolicy": 0,
// "domain": "fbl.vadesecure.com",
// "totalspam": 0,
// "totalclean": 72,
// "totalallowpolicy": 357

//state for the data
// interface IState {
//   totalThreat: number | any;
//   totalDenyPolicy: number | any;
//   domain: string | any;
//   totalSpam: number | any;
//   totalClean: number | any;
//   totalAllowPolicy: number | any;
// }
let colorTheme = 
['#003F5C',
'#2F4B7C',
'#665191',
'#A05195',
'#D45087',
'#F95D6A',
'#FF7C43',
'#FFA600']
function App() {
  // const [data, setData] = useState(Object)

  const [x, y] = echartsify(file.data, 'clean:count', 'address')

  return (
    // <div>
    //   <TimeInboundSpam tis={smartRuleData.data} color = {colorTheme}/>
    //   {/* <BarChart imc={inboundJson.data}></BarChart> */}
    //   <PieChart up={unusedPolicy.data} color = {colorTheme}></PieChart> 
    //   <SmartRuleHitsCount srd = {smartRuleData.data} color = {colorTheme}/>
    //   {/* <TypeOfEvent
    //     inbound={inboundpo.data}
    //     outbound={outboundpo.data}
    //   ></TypeOfEvent> */}

    // </div>

    <div>
      { x }
    </div>
  );
}
export default App;