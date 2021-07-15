import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import errorHandler from './utils/ErrorHandler';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            onError: errorHandler,
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />

            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
