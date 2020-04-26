import React from "react";
import Header from "./common/Header";
import HomePage from "./home-page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecordPage from "./record/RecordPage";
import PageNotFound from "./common/PageNotFound";
import AboutPage from "./aboutPage/AboutPage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/records" component={RecordPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
