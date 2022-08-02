import React from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { Switch, Route } from "react-router-dom";

//swiper css module

import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
