import React, { useState, useEffect } from 'react'
import SelectionNavbar from "./Components/SelectionNavbar"
import GoodsContainer from "./GoodsContainer/GoodsContainer.js"
// import {BrowserRouter as Router} from 'react-router-dom'
// import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const App = () => {

  const [serverQueryString, setServerQuery] = useState('')
    
  const updateServerChange = (e) => {
      setServerQuery(e)
  }

  const [factionQueryString, setFactionQueryString] = useState('')
  
  const updateFactionChange = (e) => {
      setFactionQueryString(e)
  }
  
  
  const [nexusQuery, setNexusQuery] = useState(``)

  const updateNexusQuery = () => {
    setNexusQuery(`/wow-classic/v1/items/${serverQueryString}-${factionQueryString}/13468/prices`)
  }
  
  
  

  useEffect(() => {
      if(nexusQuery === ""){
          console.log("client query post: nexusQuery is empty")
      } else { 
          try {
          console.log( "client query string posted:", nexusQuery)
          axios.post("http://localhost:5555/", {
              nQuery: nexusQuery 
          })
          } catch (error) {
              console.error("Error:", error)
          }
      }
  }, [nexusQuery])



  const [nexusData, setNexusData] = useState()
  // const [nexusItemPrice, setNexusItemPrice] = useState({})
  
  useEffect(() => {
      if(!nexusQuery){
          console.log("Nexus API call: nexusQuery is empty")
          return
      } else {
      async function nexusCall(){
          try {
            console.log("API items query sent")
            await axios.get("http://localhost:5555/")
                  .then((response) => {
                      setNexusData(response)
                  })
              }
                catch(error) {
                  console.error("Error:", error)
                }
              }
      // async function priceCall() {
      //   try {
      //     console.log("API item price query sent")
      //     await axios.get("http://localhost:5555/")
      //       .then((response) => {
      //         console.log("price call success:", response)
      //         setNexusItemPrice(response.nData)
      //       })
      //   } catch(error) {
      //     console.error("Error:", error)
      //   }
      // }
        nexusCall()
        // priceCall()
      }
  },[nexusQuery])

    return (
        <div className="App">
          <SelectionNavbar
            updateServerChange={updateServerChange}
            updateFactionChange={updateFactionChange}
            updateNexusQuery={updateNexusQuery}
          />
          <GoodsContainer 
            nexusData={nexusData}
            serverQueryString={serverQueryString}
            factionQueryString={factionQueryString}
          />
          
        </div>
    )

  }

export default App
        
