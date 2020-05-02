import React, { useReducer } from "react";
import Header from "./common/Header";
import HomePage from "./home-page/HomePage";
import { Switch, Route } from "react-router-dom";
import PageNotFound from "./common/PageNotFound";
import AboutPage from "./aboutPage/AboutPage";
import ManageRecordPage from "./record/ManageRecordPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProviderIntl from "./../i18nProvider/ProviderIntl";

const locStr = localStorage.getItem("lang");
let local = navigator.language;
if (local.slice(0, 2) !== "en") {
  local = "fr-ca";
} else {
  local = "en-us";
}

const initialState = locStr ? locStr : local;

const langReducer = (state, action) => {
  switch (action) {
    case "en":
      return "en-us";
    case "fr":
      return "fr-ca";
    default:
      return state;
  }
};

export const LangContext = React.createContext();

function App() {
  const [langState, dispatch] = useReducer(langReducer, initialState);

  return (
    <div>
      <LangContext.Provider value={{ langState, langDispatch: dispatch }}>
        <ProviderIntl locale={langState}>
          <p style={{ color: "blue" }}>{langState}</p>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/record/:id" component={ManageRecordPage} />
            <Route path="/record" component={ManageRecordPage} />
            <Route component={PageNotFound} />
          </Switch>
          <ToastContainer autoClose={3000} hideProgressBar />
        </ProviderIntl>
      </LangContext.Provider>
    </div>
  );
}

export default App;
