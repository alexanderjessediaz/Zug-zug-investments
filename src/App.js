import React, { useState, useEffect } from 'react';
import SelectionNavbar from "./Components/SelectionNavbar";
import GoodsContainer from "./containers/GoodsContainer";


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

  const [searchItemId, setSearchItemId] = useState('')
  const searchResultId = (e) => {setSearchItemId(e)}

  const [priceQueryBool, setPriceQueryBool] = useState(false);
  const togglePriceSearch = () => {setPriceQueryBool(true)};

  

  useEffect(() => {
    if(serverQueryString === "" || factionQueryString === "" || searchItemId === "" || priceQueryBool === false ){
      return;
    } else {
      async function getNexusPriceQuery(){
        try {
          await axios.get(
            `https://zug-zug-backend.herokuapp.com/ItemPrice?server=${serverQueryString}&faction=${factionQueryString}&item=${searchItemId}`
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
      },[serverQueryString, factionQueryString, priceQueryBool, searchItemId]);
      
      const [userSearchResults, setUserSearchResults] = useState([]);
      const [isItemSearchLoading, setIsItemSearchLoading] = useState(true);

      useEffect(() => {
        if (searchItemString.length < 2 || searchItemString.length > 50) return;
        else {
          async function itemSearch(){
            try {
              await axios.get(
                `https://zug-zug-backend.herokuapp.com/ItemSearch?itemSearch=${searchItemString}`
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
          'https://zug-zug-backend.herokuapp.com/News'
          )
        .then((response) => {
          setIsNewsLoading(false)
          setNexusNews(response)
        } )
      } catch (error) {
        console.error(error)
      }
    }
    newsFetch();
  },[])

  const [nexusData, setNexusData] = useState([]);
  const [isPriceLoading, setIsPriceLoading] = useState(true);
  
    return (
      <div className="App">
          <SelectionNavbar
            updateServerString={updateServerString}
            updateFactionString={updateFactionString}
            togglePriceSearch={togglePriceSearch}
            updateSearchItem={updateSearchItem}
            searchResultId={searchResultId}
            setSearchItemString={setSearchItemString}
            userSearchResults={userSearchResults}
            searchItemId={searchItemId}
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
          />
        </div>
    );
  };

export default App;