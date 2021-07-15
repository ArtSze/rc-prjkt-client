import React from 'react';
import { useHistory } from 'react-router-dom';

const BadRequest = () => {
    const history = useHistory();

    return <div>400: Bad Request</div>;
};

export default BadRequest;
