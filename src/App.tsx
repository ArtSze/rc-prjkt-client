import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Auth from './components/Auth';
import Home from './components/Home';
import NotFound from './components/ErrorPages/NotFound';
import BadRequest from './components/ErrorPages/BadRequest';

const App = (): JSX.Element => {
    return (
        <div>
            <Router>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/auth">
                    <Auth />
                </Route>
                <Route exact path="/not_found">
                    <NotFound />
                </Route>
                <Route exact path="/bad_request">
                    <BadRequest />
                </Route>
            </Router>
        </div>
    );
};

export default App;
