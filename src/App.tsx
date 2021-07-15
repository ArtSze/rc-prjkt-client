import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Auth from './components/Auth';
import Home from './components/Home';

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
            </Router>
        </div>
    );
};

export default App;
