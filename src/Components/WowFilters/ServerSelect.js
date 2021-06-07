import React, {useState, useEffect} from 'react';

import { Dropdown, FormControl } from 'react-bootstrap';
import axios from 'axios';


const ServerSelect = () => {


const [wowServerNames, setWowServerNames] = useState([])

useEffect(() => {
  fetch("http://localhost:5555/Servers", {method: "GET"})
  .then((response) => response.json())
  .then((serverData => {
    setWowServerNames(serverData.serverNames.map((server) => server.name))
  })).catch((error) => {console.error(error)});
},[]);


const [selectedServer, setSelectedServer] = useState("")

const handleSelect = (e) => {
  setSelectedServer(e)
}


const serverNames = wowServerNames.map(
  (server, i) => 
    <Dropdown.Item 
      eventKey={server}
      key={i}
      onSelect={handleSelect}
      >{server}
    </Dropdown.Item>
);

useEffect(() => {
  axios.post("http://localhost:5555/WowQuery", {
    serverQuery: "testServer"
  })
}, [selectedServer])


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
  href="http://localhost:3001"
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
  console.log( "selectedServer:", selectedServer)
  
  const CustomMenu = React.forwardRef(
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
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);
  
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {selectedServer === '' ? "Choose Server":selectedServer}
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu} onSelect={handleSelect}>
        {wowServerNames === undefined ? <Dropdown.Item>Loading...</Dropdown.Item>: serverNames}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ServerSelect