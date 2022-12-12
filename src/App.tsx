// import React, { useEffect } from "react";
import LineChart from './Components/LineChart'
import smartRuleUsage from './4.json'

function App() {
  return (
    <div>
      {LineChart(smartRuleUsage.title, 'time', smartRuleUsage.data)}
    </div>
  );
}
export default App;
