import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { browserHistory } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import config from "react-global-configuration";
import configuration from "../config.js";
import { createStore } from "redux";

import "./static/css/bootstrap.min.css";
import "./static/css/font-awesome.min.css";
import "./index.scss";
import App from "./App";
import configureStore from "./configureStore";

config.set(configuration);

const storeModule = configureStore();

ReactDOM.render(
    <Provider store={storeModule.store}>
        <PersistGate loading={null} persistor={storeModule.persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);
