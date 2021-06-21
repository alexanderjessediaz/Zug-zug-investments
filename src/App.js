import React, { useState, useEffect } from 'react';
import SelectionNavbar from "./Components/SelectionNavbar.js";
import GoodsContainer from "./GoodsContainer/GoodsContainer.js";
import axios from 'axios';

const App = () => {

  const [serverQueryString, setServerQuery] = useState('');
    
  const updateServerString = (e) => {
    setServerQuery(e);
  };

  const [factionQueryString, setFactionQueryString] = useState('');
  
  const updateFactionString = (e) => {
    setFactionQueryString(e);
  };
  
  const [nexusQuery, setNexusQuery] = useState(``);

  const updateNexusQuery = () => {
    setNexusQuery(`/wow-classic/v1/items/${serverQueryString.split(" ").join("-")}-${factionQueryString}/21884/prices`);
  };


  useEffect(() => {
      // if(nexusQuery === ""){
      //     console.log("client query post: nexusQuery is empty");
      //     return;
      // } else { 
        async function getNexusPriceQuery(){
          try {
            // console.log( "client query string posted:", nexusQuery);
            // get request pass as query string 
           await axios.get(
              `
              http://localhost:5555/ItemPrice?server=${encodeURIComponent(serverQueryString)}&faction=${encodeURIComponent(factionQueryString)}`
            ).then((response) => console.log(response))
            // .then(await axios.get('http://localhost:5555/ItemPrice')
              // .then((response) => console.log(response))
            // )
          } catch (error) {
              console.error("Error:", error);
          }};
          getNexusPriceQuery();
      },[serverQueryString, factionQueryString]
  );
  // [nexusQuery]

  const [nexusData, setNexusData] = useState();

  // useEffect(() => {
  //     if(!nexusQuery){
  //         return;
  //     } else {
  //     async function nexusCall(){
  //         try {
  //           await axios.get("http://localhost:5555/")
  //             .then((response) => {
  //               setNexusData(response)
  //             })
  //         }
  //         catch(error) {
  //           console.error("Error:", error);
  //         }
  //     }
  //     nexusCall();
  //     setInterval(() => nexusCall(), 10000);
  //     };
  // },[nexusQuery]);

    return (
        <div className="App">
          <SelectionNavbar
            updateServerString={updateServerString}
            updateFactionString={updateFactionString}
            updateNexusQuery={updateNexusQuery}
            nexusData={nexusData}
            nexusQuery={nexusQuery}
            />
          <GoodsContainer 
            nexusData={nexusData}
          />
        </div>
    )
  };

export default App;