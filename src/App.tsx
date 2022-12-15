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

function App() {
  return (
    <div>
      {/* <BarChart imc={inboundJson.data}></BarChart>
      <PieChart up={unusedPolicy.data}></PieChart> */}
      <SmartRuleHitsCount srd = {smartRuleData.data}/>
      {/* <TypeOfEvent
        inbound={inboundpo.data}
        outbound={outboundpo.data}
      ></TypeOfEvent> */}
    </div>
  );
}
export default App;
