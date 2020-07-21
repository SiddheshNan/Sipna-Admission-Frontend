import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import QueryForm from "./components/QueryForm";
import IndexPage from "./components/IndexPage";
import AdditionalForm from "./components/AdditionalForm";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route exact path="/Enquiry">
          <QueryForm />
        </Route>
        <Route exact path="/Query">
          <AdditionalForm />
        </Route>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
}
