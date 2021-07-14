import React from 'react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Auth from './components/Auth';
import Home from './components/Home';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
    return (
        <Router>
            <QueryClientProvider client={queryClient}>
                <Route exact path="/">
                    <Auth />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <ReactQueryDevtools initialIsOpen />
            </QueryClientProvider>
        </Router>
    );
};

export default App;
