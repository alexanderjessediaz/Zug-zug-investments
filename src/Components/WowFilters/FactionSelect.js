import React, {useState} from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

 const FactionSelect = () => {

    const [faction, setFaction] = useState('')


    const handleSelect = (e) => {
        setFaction(e)
    }

    
    return (
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