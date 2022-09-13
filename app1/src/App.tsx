import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home } from "Pages/Home";
import { Navigation } from "Components/Navigation";

import "./Styles/tailwind.css";

const App = () => (
    <>
        <Navigation />
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    </>
);

export default App;
