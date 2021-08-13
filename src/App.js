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
  const updateFactionString = (e) => {setFactionQueryString(e);};
  
  const [searchItemString, setSearchItemString] = useState('');

  const updateSearchItem = (e) => {setSearchItemString(e);};

  const [searchItemResults, setSearchItemResults] = useState('')
  const searchResultItem = (e) => {setSearchItemResults(e)}

  const [priceQueryBool, setPriceQueryBool] = useState(false);
  const togglePriceSearch = () => {setPriceQueryBool(true)};

  

  const [nexusData, setNexusData] = useState([]);
  const [isPriceLoading, setIsPriceLoading] = useState(true);

  useEffect(() => {
    if(serverQueryString === "" || factionQueryString === "" || searchItemResults === "" || priceQueryBool === false ){
      return;
    } else {
      async function getNexusPriceQuery(){
        try {
          await axios.get(
            // `https://zug-zug-backend.herokuapp.com/ItemPrice?server=${serverQueryString}&faction=${factionQueryString}&item=${searchItemResults}`
            `http://localhost:5555/ItemPrice?server=${serverQueryString}&faction=${factionQueryString}&item=${searchItemResults}`
            )
            .then((response) => {
              setIsPriceLoading(false)
              setNexusData(response)
            })
          } catch (error) {
            console.error("Error:", error);
          }};
          getNexusPriceQuery();
        };
      },[serverQueryString, factionQueryString, priceQueryBool, searchItemResults]);
      
      const [userSearchResults, setUserSearchResults] = useState([]);
      const [isItemSearchLoading, setIsItemSearchLoading] = useState(true);

      useEffect(() => {
        if (searchItemString.length < 2 || searchItemString.length > 50) return;
        else {
          async function itemSearch(){
            try {
              await axios.get(
                // `https://zug-zug-backend.herokuapp.com/ItemSearch?itemSearch=${searchItemString}`
                
                `http://localhost:5555/ItemSearch?itemSearch=${searchItemString}`
                )
                .then((response) => {
                  setUserSearchResults(response)
                  setIsItemSearchLoading(false)
              } )
            } catch (error) {
              console.error(error)
            }
          }
          itemSearch();
    };
  },[searchItemString]);

  
  const [nexusNews, setNexusNews] = useState([]);
  const [isNewsLoading, setIsNewsLoading] = useState(true);
  useEffect(() => {
    async function newsFetch(){
      try {
        await axios.get(
          // 'https://zug-zug-backend.herokuapp.com/News'
          'http://localhost:5555/News'
          
          )
        .then((response) => {
          setNexusNews(response)
          setIsNewsLoading(false)
        } )
      } catch (error) {
        console.error(error)
      }
    }
    newsFetch();
  },[])
  
    return (
      <div className="App">
          <SelectionNavbar
            updateServerString={updateServerString}
            updateFactionString={updateFactionString}
            togglePriceSearch={togglePriceSearch}
            updateSearchItem={updateSearchItem}
            searchResultItem={searchResultItem}
            // setSearchItemString={setSearchItemString}
            userSearchResults={userSearchResults}
            searchItemResults={searchItemResults}
            isItemSearchLoading={isItemSearchLoading}
            nexusData={nexusData}
            />
          <GoodsContainer 
            isNewsLoading={isNewsLoading}
            isPriceLoading={isPriceLoading}
            nexusData={nexusData}
            nexusNews={nexusNews}
            serverQueryString={serverQueryString}
            factionQueryString={factionQueryString}
            priceQueryBool={priceQueryBool}
            searchItemResults={searchItemResults}
          />
        </div>
    );
  };

export default App;