import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

 const FactionButton = () => {
    return (
        <DropdownButton id="dropdown-basic-button" title="Choose Faction">
              <Dropdown.Item as="button">Horde</Dropdown.Item>
              <Dropdown.Item as="button">Alliance</Dropdown.Item>
        </DropdownButton>
    )
}

export default FactionButton