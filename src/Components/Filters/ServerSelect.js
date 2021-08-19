import React, {useState, useEffect} from 'react';
import { Dropdown, FormControl } from 'react-bootstrap';
import Loader from '../../Loaders/Loader';
import './ServerSelectStyles.css'

const ServerSelect = ({ updateServerString, setUserServer }) => {

  const [wowServerNames, setWowServerNames] = useState([]);
  const [isServersLoading, setIsServersLoading] = useState(true)

  useEffect(() => {
    fetch(
      "https://zug-zug-backend.herokuapp.com/Servers",{method: "GET"})
      .then((response) => response.json())
        .then((serverData => {
          setIsServersLoading(false)
          setWowServerNames(serverData.serverNames.map((server) => {
          return server.name.split('').filter(char => char !== "'").join('')
            }))
        })).catch((error) => {console.error(error)});
  },[]);

  const [selectedServer, setSelectedServer] = useState('');

  const handleSelect = (e) => {
    setSelectedServer(e);
    updateServerString(e);
    setUserServer(e);
  };

  const serverNames = wowServerNames.map(
    (server, i) => 
      <Dropdown.Item 
        eventKey={server.toLowerCase()}
        key={i}
        onSelect={handleSelect}
        >{server.toLowerCase()}
      </Dropdown.Item>
  );

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
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
          placeholder="Type to filter servers"
          label="Type to filter servers"
          onChange={(e) => setValue(e.target.value)}
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
  
  return (
    <Dropdown onSelect={handleSelect} >
      {isServersLoading? <Loader/>: null}
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {selectedServer === '' ? "Choose Server":selectedServer}
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu} className="dropdown-menu-show">
        {wowServerNames === undefined ? <Dropdown.Item>Loading...</Dropdown.Item>: serverNames}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ServerSelect;