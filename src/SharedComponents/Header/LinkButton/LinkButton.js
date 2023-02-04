import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({url, title, onClose}) => {
    return (
        <Link onClick={onClose} to={url}>
            <Button variant={'ghost'}>
                {title}
            </Button>
        </Link>
    );
};

export default LinkButton;