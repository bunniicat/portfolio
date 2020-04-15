import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Projectpage from "./pages/Projectpage";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" exact component={Aboutpage} />
        <Route path="/contact" exact component={Contactpage} />
        <Route path="/projects" exact component={Projectpage} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);