import React from "react";
import { render } from "react-dom";
import App from "./component/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ProviderIntl from "./i18nProvider/ProviderIntl";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

let local = navigator.language;

if (local.slice(0, 2) !== "en") {
  local = "fr-ca";
} else {
  local = "en-us";
}

const store = configureStore();

render(
  <ProviderIntl locale={local}>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </ProviderIntl>,
  document.getElementById("root")
);
