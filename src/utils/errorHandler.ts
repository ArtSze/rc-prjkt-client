import { AxiosError } from 'axios';
import { useHistory } from 'react-router-dom';
import { useStore, AppState } from '../components/Home';

function errorHandler(error: AxiosError): void {
    const status = error.response?.status;
    console.log({ status, message: error.message });

    switch (status) {
        case 401:
            const history = useHistory();
            history.push('/');
            break;
        default:
            const setErrorOpen = useStore((state: AppState) => state.setErrorOpen);
            setErrorOpen(true);
            break;
    }
}

export default errorHandler;
