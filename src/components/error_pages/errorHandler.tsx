import React from 'react';
import { AxiosError } from 'axios';
import { useHistory } from 'react-router-dom';
import Auth from '../Auth';
import Home from '../Home';

function errorHandler(error: AxiosError): JSX.Element {
    const history = useHistory();

    const status = error.response?.status;
    console.log({ status, message: error.message });

    switch (status) {
        case 401:
            return <Auth />;
        default:
            return <Home />;
    }
}

export default errorHandler;
