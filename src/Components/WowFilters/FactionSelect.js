import React, {useState, useEffect} from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

 const FactionSelect = () => {

    const [faction, setFaction] = useState('')

    const handleSelect = (e) => {
        setFaction(e)
    }
    
    // useEffect(() => {
    //     if (faction === '') {
    //         return () => { return null}
    //     } else {
    //         fetch("http://localhost:5555/BlackLotus", {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(faction)
    //         })
    //         .then(response => response.json())
    //             .then(data => {
    //                 console.log('success:', data);
    //             }).catch((error) => {
    //                 console.error('Error:', error)
    //             })
    //     }
    // }, [])

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