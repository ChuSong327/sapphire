import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import '../styles/index.css';

import Nav from '../components/navigation/nav';
import ShuDong from './shu-dong/shu-dong';
import BBS from './bbs/bbs';

export default function App() {
    return (
        <>
            <Nav />
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to='/qqh'/>
                    </Route>
                    <Route path='/qqh' component={ ShuDong } />
                    <Route exact path='/bbs' component={ BBS } />
                    <Route exact path='/login' />
                </Switch>
            </BrowserRouter>
        </>
    )
}
  
