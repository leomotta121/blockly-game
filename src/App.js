import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Game from "./components/Game/index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
