import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, ThemeProvider } from '@material-ui/core';
import { theme } from '../static/theme';

import Auth from './Auth';
import Home from './Home';
import NotFound from './ErrorPages/NotFound';
import BadRequest from './ErrorPages/BadRequest';

const App = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Router>
                    <Route exact path="/">
                        <Auth />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/not_found">
                        <NotFound />
                    </Route>
                    <Route exact path="/bad_request">
                        <BadRequest />
                    </Route>
                </Router>
            </Container>
        </ThemeProvider>
    );
};

export default App;
