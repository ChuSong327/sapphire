import React from 'react';

import '../sass/main.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import LandingPage from './landingPage';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/'><LandingPage /></Route>
            </Switch>
        </Router>
    )
}
