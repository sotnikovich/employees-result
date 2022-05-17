import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
);
