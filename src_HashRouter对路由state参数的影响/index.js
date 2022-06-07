import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";

import App from "./App";

//HashRouter会导致刷新时state参数丢失
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,

  document.getElementById("root")
);
