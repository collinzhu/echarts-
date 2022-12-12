import React, { useEffect } from "react";
import LineChart from './Components/LineChart'
import smartRuleUsage from './4.json'

function App() {
  return (
    <div>
        <LineChart
            title={smartRuleUsage.title} 
            xAxisType='time'
            // yAxisType='value'
            data={smartRuleUsage.data} />
            
    </div>
  );
}
export default App;
