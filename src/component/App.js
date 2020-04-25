import React from "react";
import Header from "./common/Header";
import HomePage from "./home-page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecordPage from "./record/RecordPage";
import PageNotFound from "./common/PageNotFound";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={HomePage} />
          <Route path="/records" component={RecordPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
