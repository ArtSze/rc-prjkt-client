import { Query, QueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';

interface ResponseError extends Error {
    response?: Response;
}

function errorHandler(error: unknown): void {
    const history = useHistory();

    const e = error as ResponseError;
    if (e.response!.status) {
        const status = e.response!.status;
        console.log({ status, message: e.message });

        switch (status) {
            case 401:
                history.push('/auth');
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
}

export default errorHandler;
