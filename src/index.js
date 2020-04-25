import React from "react";
import { render } from "react-dom";
import App from "./component/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ProviderIntl from "./i18nProvider/ProviderIntl";

let local = navigator.language;

if (local.slice(0, 2) !== "en") {
  local = "fr-ca";
} else {
  local = "en-us";
}
render(
  <ProviderIntl locale={local}>
    <App />
  </ProviderIntl>,
  document.getElementById("root")
);
