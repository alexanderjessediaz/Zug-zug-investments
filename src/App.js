import React from 'react'
import SelectionNavbar from "./Components/SelectionNavbar"
// { useState, useEffect }
// import CommoditiesTable from "./Components/CommodityTable/GoodsTable.js"
// import {BrowserRouter as Router} from 'react-router-dom'


const App = () => {


  // const [nexusData, setNexusData] = useState({})
    
  //   useEffect(() => {
  //       if(!nexusQuery){
  //           console.log("nexusQuery is empty")
  //           return
  //       } else {
  //      async function nexusCall(){
  //           try {
  //              await axios.get("http://localhost:5555/")
  //                   .then((response) => {
  //                       console.log("success:", response)
  //                       setNexusData(response.data)
  //                   })
  //               }
  //                 catch(error) {
  //                   console.error("Error:", error)
  //                 }}
  //                 nexusCall()
  //               }
  //   },[handleSubmit])

    return (
        <div className="App">
          <SelectionNavbar />
        </div>
    )

  }

export default App
        
