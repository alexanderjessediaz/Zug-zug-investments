import React, { useState, useEffect } from 'react';
import SelectionNavbar from "./Components/SelectionNavbar.js";
import GoodsContainer from "./GoodsContainer/GoodsContainer.js";
import axios from 'axios';

const App = () => {

  const [itemQueryString, setItemQueryString] = useState('')

  const updateItemString = (e) => {
    setItemQueryString(e)
  }

  const [serverQueryString, setServerQuery] = useState('');
    
  const updateServerString = (e) => {
    const parsedServerString = e.split(" ").join("-")
    setServerQuery(parsedServerString);
  };

  const [factionQueryString, setFactionQueryString] = useState('');
  
  const updateFactionString = (e) => {
    setFactionQueryString(e);
  };

  const [priceQueryBool, setPriceQueryBool] = useState(false);

  const togglePriceSearch = () => {
    setPriceQueryBool(true)
  }

  const [nexusData, setNexusData] = useState([]);

  useEffect(() => {
      if(serverQueryString === "" || factionQueryString === "" || priceQueryBool === false){
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
    },[serverQueryString, factionQueryString, priceQueryBool]
  );


    return (
        <div className="App">
          <SelectionNavbar
            updateServerString={updateServerString}
            updateFactionString={updateFactionString}
            togglePriceSearch={togglePriceSearch}
            updateItemString={updateItemString}
            />
          <GoodsContainer 
            nexusData={nexusData}
          />
          
        </div>
    )
  };

export default App;