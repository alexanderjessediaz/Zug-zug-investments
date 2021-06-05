import React, {useState, useEffect} from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import axios from 'axios';

 const FactionSelect = () => {

    const [faction, setFaction] = useState('')

    const handleSelect = (e) => {
        setFaction(e)
    }
    
    useEffect(() => {
        axios.post("http://localhost:5555/WowQuery", {
            factionQuery: faction
        })
    }, [faction])

    return (
        // style match color match logo
        // grey lighter
        // h1 of logo text styled
        <DropdownButton
         id="dropdown-basic-button" 
         title={faction === '' ? "Choose Faction":faction}
         onSelect={handleSelect}
         >
              <Dropdown.Item as="button" eventKey="horde">Horde</Dropdown.Item>
              <Dropdown.Item as="button" eventKey="alliance">Alliance</Dropdown.Item>
        </DropdownButton>
    )
}

export default FactionSelect