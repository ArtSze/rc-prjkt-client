import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, ThemeProvider } from '@material-ui/core';
import { theme } from '../static/theme';
import Home, { AppState, useStore } from '../components/Home';
import Footer from './Footer';
import Auth from './Auth';
import NotFound from './error_pages/NotFound';

import usePing from '../hooks/usePing';

const App = (): JSX.Element => {
    const { isSuccess, error } = usePing();
    const setErrorOpen = useStore((state: AppState) => state.setErrorOpen);

    if (error && error.response?.status === 400) {
        setErrorOpen(true);
    }

    if (isSuccess || error) {
        return (
            <ThemeProvider theme={theme}>
                <Container disableGutters maxWidth="md">
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                {error?.response?.status === 401 ? <Auth /> : <Home />}
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
