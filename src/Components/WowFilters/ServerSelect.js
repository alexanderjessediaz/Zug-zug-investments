import React, {useState, useEffect} from 'react';

import { Dropdown, FormControl } from 'react-bootstrap';


const ServerSelect = () => {

// list of WoW Server names for graph and table queries
const [wowServerNames, setWowServerNames] = useState([])

useEffect(() => {
  fetch("http://localhost:5555/Servers", {method: "GET"})
  .then((response) => response.json())
  .then((serverData => {
    // console.log(serverData.serverNames.map((server) => server.name))
    setWowServerNames(serverData.serverNames.map((server) => server.name))
  })).catch((error) => {console.error(error)});
},[]);

const serverNames = wowServerNames.map((server) => <Dropdown.Item>{server}</Dropdown.Item>)
// console.log(serverNames)
// const displayServerList = () => {
  // return wowServerNames === undefined ? <Dropdown.Item>Loading...</Dropdown.Item>: serverNames
// }

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
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
        Select Server
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu}>{wowServerNames === undefined ? <Dropdown.Item>Loading...</Dropdown.Item>: serverNames}</Dropdown.Menu>
    </Dropdown>
  );
}

export default ServerSelect