import React, {useState} from 'react';
import { Dropdown } from 'react-bootstrap';

 const FactionSelect = ({ updateFactionString, setUserFaction }) => {

    const [selectedFaction, setSelectedFaction] = useState('')

    const handleSelect = (e) => {
        setSelectedFaction(e)
        updateFactionString(e)
        setUserFaction(e)
    }
    

    return (
        // style match color match logo
        // grey lighter
        // h1 of logo text styled
        <Dropdown onSelect={handleSelect} >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedFaction === '' ? "Choose Faction":selectedFaction}
            </Dropdown.Toggle>
            <Dropdown.Menu >
                <Dropdown.Item eventKey="horde">Horde</Dropdown.Item>
                <Dropdown.Item eventKey="alliance" >Alliance</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default FactionSelect