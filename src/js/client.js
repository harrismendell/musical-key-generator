import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/layout";
import ScalePage from "./components/scalepage"

const app = document.getElementById('app');

ReactDOM.render(
  //Set up router for future navigation
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={ScalePage}></IndexRoute>
    </Route>
  </Router>,
app);
