import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Container, ThemeProvider } from '@material-ui/core';
import { theme } from '../static/theme';

import Footer from './Footer';
import Auth from './Auth';
import Home from './Home';
import NotFound from './error_pages/NotFound';

import usePing from '../hooks/usePing';

const App = (): JSX.Element => {
    const { isSuccess, isLoading, error } = usePing();

    if (isSuccess || error) {
        return (
            <ThemeProvider theme={theme}>
                <Container disableGutters maxWidth="md">
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                {error ? <Auth /> : <Home />}
                            </Route>
                            <Route component={NotFound} />
                        </Switch>
                    </Router>
                </Container>
                <Footer />
            </ThemeProvider>
        );
    }

    return <></>;
};

export default App;
