import React from 'react';
import './ItemSearchLoader.css'

import { Button, Spinner } from 'react-bootstrap';

const ItemSearchLoader = () => {

    return (
        <>
            <Button variant="warning" disabled id="item-search-btn">
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                <span className="visually-hidden">No Item Searched</span>
            </Button>{' '}
        </>
    )
}

export default ItemSearchLoader