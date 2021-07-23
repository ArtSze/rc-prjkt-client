import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();

    return <div>404: Not Found</div>;
};

export default NotFound;
