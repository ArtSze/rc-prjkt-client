import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, ThemeProvider } from '@material-ui/core';
import { theme } from '../static/theme';

import Footer from './Footer';
import Auth from './Auth';
import Home from './Home';
import NotFound from './error_pages/NotFound';

const App = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters maxWidth="md">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Auth} />
                        <Route exact path="/home" component={Home} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Container>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
