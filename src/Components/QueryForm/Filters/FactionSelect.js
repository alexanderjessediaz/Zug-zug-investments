import React, {useState} from 'react';
import { Dropdown } from 'react-bootstrap';

 const FactionSelect = () => {

    const [selectedFaction, setSelectedFaction] = useState('')

    const handleSelect = (e) => {
        setSelectedFaction(e)
    }
    

    return (
        // style match color match logo
        // grey lighter
        // h1 of logo text styled
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedFaction === '' ? "Choose Faction":selectedFaction}
            </Dropdown.Toggle>
            <Dropdown.Menu >
                <Dropdown.Item eventKey="horde">Horde</Dropdown.Item>
                <Dropdown.Item eventKey="alliance" >Alliance</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        // <DropdownButton
        //  id="dropdown-basic-button" 
        //  title={selectedFaction === '' ? "Choose Faction":selectedFaction}
        //  >
        //       <Dropdown.Item as="button" eventKey="horde">Horde</Dropdown.Item>
        //       <Dropdown.Item as="button" eventKey="alliance" >Alliance</Dropdown.Item>
        // </DropdownButton>
    )
}

export default FactionSelect