import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/nav-bar';
import Home from './components/home';
import Details from './components/details';
import Search from './components/search';

function App() {
    return (
        <Router>
            <Route component={Nav}></Route>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/info/:id" component={Details} />
                <Route path="/search/:name" component={Search} />
            </Switch>
        </Router>
    )
}

export default App;
