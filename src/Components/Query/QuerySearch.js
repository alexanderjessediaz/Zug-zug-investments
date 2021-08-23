import React, {useState} from 'react';
import {  FormControl, Dropdown} from 'react-bootstrap';
import './QuerySearchStyles.css';

const QuerySearch = ({
    updateSearchItem,
    userSearchResults,
    searchResultId,
    searchItemId,
    nexusData
    
}) => {
    
    const [searchInput, setSearchInput] = useState('')
    const [searchItemDisplay, setSearchItemDisplay] = useState('')

    const handleChange = (e) => {
        updateSearchItem(e.target.value)
        setSearchInput(e.target.value)
    };

    const handleSelect = (e) => {
      searchResultId(e)
      setSearchItemDisplay(e)
    };
    
    const searchResults = () => {
      if(!userSearchResults.data) return;
      else {
        return userSearchResults.data.map((result, i) => {
            return <Dropdown.Item
                eventKey={result.itemId}
                key={i}
                onSelect={handleSelect}
            >{result.name}</Dropdown.Item>
            })
        }
    };

    const ItemSearchToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
        id="item-search-toggle"
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
      
    const ItemQueryMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    
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
              aria-placeholder="type item name to filter"
              placeholder="try searching primal"
              onChange={handleChange}
              value={searchInput}
            />
            <ul className="list-unstyled" id="dropdown-menu">
              { React.Children.toArray(children).filter(
                (child) =>
                  !searchInput || child.props.children.toLowerCase().startsWith(searchInput),
              )}
            </ul>
          </div>
        );
      },
    );
                          
    return (
        <div id="filter-container">
            {
                <Dropdown className="filter-btn" onSelect={handleSelect}>
                  <Dropdown.Toggle as={ItemSearchToggle} id="dropdown-custom-components">
                    {nexusData.length === 0 && searchItemId.length < 1? "Choose Item": "Item ID: " + searchItemDisplay}
                  </Dropdown.Toggle>
                  <Dropdown.Menu as={ItemQueryMenu} className="dropdown-menu-show">
                    {searchResults()}
                  </Dropdown.Menu>
              </Dropdown>
            }
        </div>
    )
};

export default QuerySearch;