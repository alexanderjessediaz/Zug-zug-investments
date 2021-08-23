import React, {useState} from 'react';
import { Dropdown, FormControl } from 'react-bootstrap';

 const FactionSelect = ({ updateFactionString, setUserFaction }) => {

    const [selectedFaction, setSelectedFaction] = useState('');
    const handleSelect = (e) => {
        setSelectedFaction(e);
        updateFactionString(e);
        setUserFaction(e);
    };

    const FactionSelectToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
        id="server-toggle"
        href="https://zugzug-inc.netlify.app/"
        ref={ref}
          onClick={(e) => {
            e.preventDefault();
              onClick(e);
            }}
            >
            {children}
            &#x25bc;
        </a>
      ));
      
    const FactionMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');
        return (
          <div
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
          >
            <FormControl
              autoFocus
              className="mx-3 my-2 w-auto"
              placeholder="Type to filter servers"
              label="Type to filter servers"
              onChange={(e) => setValue(factionNames)}
              value={value}
            />
            <ul className="list-unstyled" id="dropdown-menu">
              {React.Children.toArray(children).filter(
                (child) =>
                  !value || child.props.children.toLowerCase().startsWith(value),
              )}
            </ul>
          </div>
        );
      },
    );

    const wowfactionNames = ["Alliance", "Horde"]

    const factionNames = wowfactionNames.map( factionName => 
        <Dropdown.Item
            eventKey={factionName.toLowerCase()}
            onSelect={handleSelect}
        >{factionName}</Dropdown.Item>    
    )
    

    return (
        <Dropdown onSelect={handleSelect} >
            <Dropdown.Toggle as={FactionSelectToggle} variant="warning" id="dropdown-basic">
                {selectedFaction === '' ? "Choose Faction":selectedFaction}
            </Dropdown.Toggle>
            <Dropdown.Menu as={FactionMenu}>
                {factionNames}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default FactionSelect;