import { AxiosError } from 'axios';
import { useHistory } from 'react-router-dom';

function errorHandler(error: AxiosError): void {
    const history = useHistory();

    const status = error.response?.status;
    console.log({ status, message: error.message });

    switch (status) {
        case 401:
            history.push('/');
            break;
        case 404:
            history.push('/not_found');
            break;
        case 400:
            history.push('/bad_request');
            break;
        default:
            history.push('/bad_request');
            break;
    }
}

export default errorHandler;
