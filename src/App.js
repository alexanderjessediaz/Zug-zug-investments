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

  const [priceQuery, setPriceQuery] = useState(false);

  const togglePriceSearch = (e) => {
    setPriceQuery(true)
  }

  const [nexusData, setNexusData] = useState([]);

  useEffect(() => {
      if(serverQueryString === "" || factionQueryString === "" || priceQuery === false){
        return;
      } else {
        async function getNexusPriceQuery(){
          try {
            await axios.get(`http://localhost:5555/ItemPrice?server=${serverQueryString}&faction=${factionQueryString}`)
            .then((response) => {
              setNexusData(response)
            })
          } catch (error) {
              console.error("Error:", error);
          }};
          getNexusPriceQuery();
      }
    },[serverQueryString, factionQueryString, priceQuery]
  );


    return (
        <div className="App">
          <SelectionNavbar
            updateServerString={updateServerString}
            updateFactionString={updateFactionString}
            togglePriceSearch={togglePriceSearch}
            nexusData={nexusData}
            />
          <GoodsContainer 
            nexusData={nexusData}
          />
          
        </div>
    )
  };

export default App;