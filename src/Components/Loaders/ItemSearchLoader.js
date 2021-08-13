import React from 'react';

import { Button, Spinner } from 'react-bootstrap';

const ItemSearchLoader = () => {

    return (
        <>
            <Button variant="primary" disabled>
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