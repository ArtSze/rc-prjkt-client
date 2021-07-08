import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Nav from './components/Nav';
import ProjectList from './components/ProjectList';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <h1>RC-Prjkt</h1>
                <Nav message={'message'} />
                <ProjectList />
            </div>
            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    );
};

export default App;
