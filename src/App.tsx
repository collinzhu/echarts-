import React, { useEffect, useState } from "react";
import { DataStore, Period } from "./DataStore";

type APIData = {id: string, isEmpty: boolean, title: string, data: object[]}

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
      {/* { graphData.data.map( () => <div>thing</div> )} */}
    </div>
  );
}
export default App;