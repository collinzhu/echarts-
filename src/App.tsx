import React, { useEffect, useState } from "react";
import { DataStore, Period } from "./DataStore";

function App() {
  // const [data, setData] = useState(Object)
  const [graphData, setGraphData] = useState(Object)

  useEffect( () => {

    const fetchData = async () => {
      const data = await DataStore.global.request(1, 'a', Period.M1)
      return Promise.resolve(data)
    }

    fetchData().then( data => console.log(data) )

  })

  return (
    <div>
      {/* { data.first_page_url  } */}
      {/* { data.map ( (el: object) => { <div>el.fact</div> } ) } */}
    </div>
  );
}
export default App;