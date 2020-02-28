import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import history from "./Components/history";
import * as serviceWorker from "./serviceWorker";
import AdminPanel from "./Components/AdminPanel";
import Form from "./Components/Form";

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/adminPanel" exact render={() => <AdminPanel />} />
      <Route path="/form" component={Form} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
