import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./Components/history";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AdminPanel from "./Components/AdminPanel";
import Posts from "./Components/Posts";

ReactDOM.render(
  <Router history={history}>
    {/* <App /> */}
    <Switch>
      <Route to="/">
        <App />
      </Route>
      <Route to="/posts">
        <AdminPanel />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
