import React from "react";
import Header from "./header/Header";
import translate from "./../i18nProvider/translate";

function App() {
  return (
    <div>
      <Header />
      {translate("hello")}
    </div>
  );
}

export default App;
