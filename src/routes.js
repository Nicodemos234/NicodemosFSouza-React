import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/home';
import Works from './pages/works';
import Contact from './pages/contact';
import NotFound from './components/NotFound';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/works" component={Works}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Routes;