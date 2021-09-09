import React from "react";

import { Button } from "./Components/Button";

import "./Styles/tailwind.css";

const App = () => (
    <div className="m-3">
        <Button className="!bg-blue-600" data-testid="helloFriendsButton">Hello Friends 🚀</Button>
    </div>
);

export default App;
