import React from "react";
import Header from "./common/Header";
import HomePage from "./home-page/HomePage";
import { Switch, Route } from "react-router-dom";
import PageNotFound from "./common/PageNotFound";
import AboutPage from "./aboutPage/AboutPage";
import ManageRecordPage from "./record/ManageRecordPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/record/:id" component={ManageRecordPage} />
        <Route path="/record" component={ManageRecordPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
