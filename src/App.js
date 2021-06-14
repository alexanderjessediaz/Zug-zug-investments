import React, { useState, useEffect } from 'react'
import SelectionNavbar from "./Components/SelectionNavbar"
import GoodsContainer from "./GoodsContainer/GoodsContainer.js"
// import {BrowserRouter as Router} from 'react-router-dom'
// import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const App = () => {

  const [serverQueryString, setServerQuery] = useState('')
    
  const updateServerString = (e) => {
    setServerQuery(e)
  }

  const [factionQueryString, setFactionQueryString] = useState('')
  
  const updateFactionString = (e) => {
    setFactionQueryString(e)
  }
  
  const [itemQueryString, setItemQueryString] = useState('')

  const updateItemString = (e) => {
    setItemQueryString(e)
  }
  
  const [nexusQuery, setNexusQuery] = useState(``)

  const updateNexusQuery = () => {
    setNexusQuery(`/wow-classic/v1/items/${serverQueryString.split(" ").join("-")}-${factionQueryString}/13468/prices`)
  }
  

  useEffect(() => {
      if(nexusQuery === ""){
          console.log("client query post: nexusQuery is empty")
          return
      } else { 
        async function postNexusQuery(){
          try {
          console.log( "client query string posted:", nexusQuery)
          axios.post("http://localhost:5555/", {
              nQuery: nexusQuery 
          })
          } catch (error) {
              console.error("Error:", error)
          }}
          postNexusQuery() 
      }
  }, [nexusQuery])



  const [nexusData, setNexusData] = useState()
  
  
  useEffect(() => {
      if(!nexusQuery){
          console.log("Nexus API call: nexusQuery is empty")
          return
      } else {
      async function nexusCall(){
          try {
            console.log("API items query sent")
            await axios.get("http://localhost:5555/")
              .then((response) => {setNexusData(response)})
          }
          catch(error) {
            console.error("Error:", error)
          }
      }
      nexusCall()
      setInterval(() => nexusCall(), 10000) 
      }
  },[nexusQuery])

    return (
        <div className="App">
          <SelectionNavbar
            updateServerString={updateServerString}
            updateFactionString={updateFactionString}
            updateItemString={updateItemString}
            updateNexusQuery={updateNexusQuery}
            />
          <GoodsContainer 
            nexusData={nexusData}
          />
          
        </div>
    )

  }

export default App
        
