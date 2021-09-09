import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Navigation } from "./Components/Navigation";

import "./Styles/tailwind.css";

const App = () => (
    <>
        <Navigation />
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    </>
);

export default App;
