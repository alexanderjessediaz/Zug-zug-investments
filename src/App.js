import React, { useState, useEffect } from 'react';
import SelectionNavbar from "./Components/SelectionNavbar.js";
import GoodsContainer from "./GoodsContainer/GoodsContainer.js";
import axios from 'axios';

const App = () => {

  const [serverQueryString, setServerQueryString] = useState('');
  const updateServerString = (e) => {
    const parsedServerString = e.split(" ").join("-")
    setServerQueryString(parsedServerString);
  };
  const [factionQueryString, setFactionQueryString] = useState('');
  const updateFactionString = (e) => {
    setFactionQueryString(e);
  };

  const [priceQueryBool, setPriceQueryBool] = useState(false);

  const togglePriceSearch = () => { setPriceQueryBool(true)};
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
      }
    ,[serverQueryString, factionQueryString, priceQueryBool]
  );
        
    const [searchItemString, setSearchItemString] = useState('');

    const updateSearchItem = (e) => {
        setSearchItemString(e);
      };
          
    const [userSearchResults, setUserSearchResults] = useState([]);

    useEffect(() => {
        if (searchItemString.length < 2 || searchItemString.length > 50) return;
        else {
            async function itemSearch(){
                try {
                    await axios.get(`http://localhost:5555/ItemSearch?itemSearch=${searchItemString}`)
                    .then((response) => setUserSearchResults(response))
                } catch (error) {
                    console.error(error)
                }
            }
            itemSearch()
        }
    },[searchItemString]);
  
    return (
      <div className="App">
          <SelectionNavbar
            updateServerString={updateServerString}
            updateFactionString={updateFactionString}
            togglePriceSearch={togglePriceSearch}
            updateSearchItem={updateSearchItem}
            userSearchResults={userSearchResults}
            />
          <GoodsContainer 
            nexusData={nexusData}
          />
        </div>
    )
  };

export default App;