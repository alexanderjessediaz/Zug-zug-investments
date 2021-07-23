import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const NexusDataLoader = () => {
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
                <span className="visually-hidden">Loading Item Data...</span>
            </Button>{' '}
        </>
    )
}

export default NexusDataLoader