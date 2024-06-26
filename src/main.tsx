import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";

import config from "configs/aws-config.ts";

import App from "./App.tsx";
import "./styles/globals.scss";

Amplify.configure(config);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
