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
                <span className="visually-hidden">Waiting for input</span>
            </Button>{' '}
        </>
    )
}

export default ItemSearchLoader